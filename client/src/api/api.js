import axios from "axios";
import clean from "../func";

function createPatient(patientBasicInfo, cb) {
    let data = {
        first_name: patientBasicInfo.name.split(" ")[0],
        last_name: patientBasicInfo.name.split(" ")[1],
        email: patientBasicInfo.email
    };
    axios.post("/api/patients", data).then(res => cb(res.data[0]));
}

function getPatient(patientID, cb) {
    axios.get(`/api/patients/${patientID}`).then(res => cb(res));
}

function getForm(formID, cb) {
    axios.get(`/api/form/${formID}`).then(res => cb(res));
}

function submitPatientForm(patientID, patientData) {
    clean(patientData);
    if (patientData.medication) {
        patientData.medications.push(patientData.medication);
    }
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
