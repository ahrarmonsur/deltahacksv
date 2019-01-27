import axios from 'axios'

function createPatient(patientBasicInfo){
    axios.post('/api/patients', patientBasicInfo).then(res =>
        console.log(`${patientBasicInfo['first_name']} added to db.`))
}

function submitPatientForm(patientID, patientData){
    axios.post(`/api/patients/${patientID}/form`, patientData).then(res =>
        console.log("ResAction called"));
}


function addPatientToClinic(clinicID, patientID){
    axios.post(`/api/clinic/${clinicID}/patient/${patientID}`).then(res =>
        console.log(`${patientID} added to ${clinicID}`))
}

export {createPatient, submitPatientForm, addPatientToClinic}