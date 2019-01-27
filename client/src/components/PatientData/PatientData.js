import React, { Component } from "react";
import { getPatient, getForm } from "../../api/api";
import "./PatientData.sass";
import { Button, Typography } from "@material-ui/core";

export default class Profile extends Component {
    state = {
        patient: {}
    };

    componentDidMount() {
        console.log("Mounted");
        getPatient(
            this.props.match.params.patientID || "5c4ccb40d0dc8f0317d60eb0",
            patient => {
                this.setState({ patient: patient.data });
                getForm(patient.data.form, form => {
                    this.setState(prevState => ({
                        patient: {
                            ...prevState.patient,
                            form: form.data
                        }
                    }));
                });
            }
        );
    }

    render() {
        let patient = this.state.patient;
        console.log(this.state.patient);

        return (
            <div className="patientData">
                {this.state.patient.form !== undefined && (
                    <>
                        <h1>
                            {patient.first_name} {patient.last_name}
                        </h1>
                        <p>{patient.form.gender}</p>
                        <p>{patient.form.dob}</p>
                        <p>{patient.form.card_num}</p>
                        <p>{patient.form.address}</p>
                        <p>{patient.form.postal}</p>
                        <p>{patient.form.city}</p>
                        <p>{patient.form.province}</p>
                        <p>{patient.form.phone_1}</p>
                        <p>{patient.form.phone_2}</p>
                        <p>{patient.form.phone_3}</p>
                        <p>
                            Patient{" "}
                            {patient.form.serious_illness
                                ? "has"
                                : "does not have"}{" "}
                            a serious illness
                        </p>
                        <h2>Medications</h2>
                        {patient.form.medications &&
                        patient.form.medications.length > 0 ? (
                            patient.form.medications.map(med => {
                                return <p>{med}</p>;
                            })
                        ) : (
                            <p>None</p>
                        )}
                    </>
                )}
            </div>
        );
    }
}
