import axios from 'axios'

function submitPatientForm(patientID,patientInfo, ResAction){
    axios.post(`/api/patients/${patientID}/form`, patientInfo).then(res =>
    console.log("ResAction called"));
}
export {submitPatientForm}