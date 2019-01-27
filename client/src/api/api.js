import axios from "axios";
import clean from "../func";

function createPatient(patientBasicInfo) {
    axios
        .post("/api/patients", patientBasicInfo)
        .then(res =>
            console.log(`${patientBasicInfo["first_name"]} added to db.`)
        );
}

function getPatient(patientID, cb) {
    axios.get(`/api/patients/${patientID}`).then(res => cb(res));
}

function getForm(formID, cb) {
    axios.get(`/api/form/${formID}`).then(res => cb(res));
}

function submitPatientForm(patientID, patientData) {
    clean(patientData);
    axios
        .post(`/api/patients/${patientID}/form`, patientData)
        .then(res => console.log("ResAction called"));
}

function addPatientToClinic(clinicID, patientID) {
    axios
        .post(`/api/clinic/${clinicID}/patient/${patientID}`)
        .then(res => console.log(`${patientID} added to ${clinicID}`));
}

export {
    createPatient,
    submitPatientForm,
    addPatientToClinic,
    getPatient,
    getForm
};
