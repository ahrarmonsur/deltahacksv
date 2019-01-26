const express = require('express')
const MongoClient = require('mongodb').MongoClient

const DB_URL = "mongodb://admin:dh5acdg@ds145868.mlab.com:45868/deltahacksv"
const DB_NAME = "deltahacksv"
const client = new MongoClient(DB_URL)
let db

client.connect((err) => {
    if (err) console.log(err)
    console.log("Connected successfully to database")

    db = client.db(DB_NAME)
})

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello world")
})

// Patients

app.get('/api/patients/:patient_id', (req, res) => {
    let patient_id = req.params.patient_id
})

app.post('/api/patients', (req, res) => {
    // Create patients
    db.collection('patients').insertOne({
        first_name: "David",
        last_name: "Smith",
        dob: new Date("1999/03/12"),
        email: "email@test.com"
    }, (err, result) => {
        res.json(result.ops)
    })
})

app.get('/api/form/:form_id', (req, res) => {
    // Get form data
})

app.post('/api/patients/:patient_id/form', (req, res) => {
    // Create/Update patients form
    let collection = db.collections('patients')
})

// Form Templates

app.get('/api/template/:template_id', (req, res) => {

})

// Clinics

app.get('/api/clinic/:clinic_id', (res, req) => {

})

app.get('/api/clinic/:clinic_id/patients', (req, res) => {
    let id = req.params.id
    // Return list of patients
})

app.post('/api/clinic/:clinic_id/patients/:patient_id', (req, res) => {
    // Add patient to client
})

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})