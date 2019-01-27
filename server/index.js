const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const DB_URL = "mongodb://admin:dh5acdg@ds145868.mlab.com:45868/deltahacksv";
const DB_NAME = "deltahacksv";
const client = new MongoClient(DB_URL);
let db;

client.connect(err => {
    if (err) console.log(err);
    console.log("Connected successfully to database");

    db = client.db(DB_NAME);
});

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello world");
});

// Patients

app.get("/api/patients/:patient_id", (req, res) => {
    let id = req.params.patient_id;

    db.collection("patients").findOne({ _id: ObjectId(id) }, (err, result) => {
        if (err) console.log(err);
        res.json(result);
    });
});

app.post("/api/patients", (req, res) => {
    // Create patients
    let patient = req.body;
    patient.dob = new Date(patient.dob);

    db.collection("patients").insertOne(patient, (err, result) => {
        if (err) console.log(err);
        res.json(result.ops);
    });
});

app.get("/api/form/:form_id", (req, res) => {
    // Get form data
    let id = req.params.form_id;

    db.collection("forms").findOne({ _id: ObjectId(id) }, (err, result) => {
        if (err) console.log(err);
        res.json(result);
    });
});

app.post("/api/patients/:patient_id/form", (req, res) => {
    // Create/Update patients form

    return_url = `http://localhost:5000/api/patients/${req.params.patient_id}`;

    payload = { ...req.body, created: new Date() };

    db.collection("patients").findOne(
        { _id: ObjectId(req.params.patient_id) },
        (err, patient) => {
            console.log(patient.form);
            if (patient.form) {
                db.collection("forms").updateOne(
                    { _id: ObjectId(patient.form) },
                    {
                        $set: payload
                    },
                    (err, result) => {
                        res.send(return_url);
                    }
                );
            } else {
                db.collection("forms").insertOne(
                    payload,
                    (err, form_result) => {
                        db.collection("patients").updateOne(
                            { _id: ObjectId(req.params.patient_id) },
                            {
                                $set: {
                                    form: form_result.ops[0]._id
                                }
                            },
                            (err, patient_result) => {
                                res.send(return_url);
                            }
                        );
                    }
                );
            }
        }
    );
});

// Form Templates

app.get("/api/template/:template_id", (req, res) => {
    let id = req.params.template_id;

    db.collection("templates").findOne(
        { _id: id == "default" ? id : ObjectId(id) },
        (err, result) => {
            if (err) console.log(err);
            res.json(result);
        }
    );
});

// Clinics

app.get("/api/clinic/:clinic_id", (req, res) => {
    let id = req.params.clinic_id;

    db.collection("clinics").findOne({ _id: ObjectId(id) }, (err, clinic) => {
        clinic.patients = clinic.patients.map(patient => ObjectId(patient.oid));

        db.collection("patients")
            .find({ _id: { $in: clinic.patients } })
            .toArray((err, patients) => {
                result = clinic;
                result.patients = patients;
                res.json(clinic);
            });
    });
});

app.post("/api/clinic/:clinic_id/patient/:patient_id", (req, res) => {
    // Add patient to clinic
    let clinic_id = req.params.clinic_id;
    let patient_id = req.params.patient_id;

    db.collection("clinics").updateOne(
        { _id: ObjectId(clinic_id) },
        {
            $addToSet: { patients: ObjectId(patient_id) }
        },
        (err, result) => {
            console.log(result);
            if (err) console.log(err);
            else res.send("Success!");
        }
    );
});

app.post("/*", (req, res) => {
    // Invalid post request
    res.send("Invalid post request made.");
});

app.get("/*", (req, res) => {
    // Invalid get request
    res.send("Invalid get request made.");
});

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});
