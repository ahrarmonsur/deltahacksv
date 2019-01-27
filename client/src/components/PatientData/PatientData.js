import React, { Component } from "react";
import { getPatient, getForm } from "../../api/api";
import "./PatientData.sass";
import { Button, Typography } from "@material-ui/core";
import BackButton from "../Navigation/BackButton/BackButton";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import TableChartIcon from "@material-ui/icons/TableChart";

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
                <BackButton href="/login" />
                {this.state.patient.form !== undefined && (
                    <>
                        <h1>
                            <Typography variant="subtitle1" gutterBottom>
                                Patient Profile
                            </Typography>
                            {patient.first_name} {patient.last_name}
                        </h1>
                        <div
                            style={{
                                border: "1px solid #51B4F2",
                                padding: "0.5em 2em"
                            }}
                        >
                            <p>
                                <Typography variant="overline" gutterBottom>
                                    Email
                                </Typography>
                                {patient.email}
                            </p>
                            <div className="two-col-input">
                                <div>
                                    <p style={{ textTransform: "capitalize" }}>
                                        <Typography
                                            variant="overline"
                                            gutterBottom
                                        >
                                            Gender
                                        </Typography>
                                        {patient.form.gender}
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <Typography
                                            variant="overline"
                                            gutterBottom
                                        >
                                            Date of Birth
                                        </Typography>
                                        {patient.form.dob}
                                    </p>
                                </div>
                            </div>
                            <p>
                                <Typography variant="overline" gutterBottom>
                                    Phone Number
                                </Typography>
                                {patient.form.phone_1}
                            </p>
                            <p>
                                <Typography variant="overline" gutterBottom>
                                    Health Card Number
                                </Typography>
                                {patient.form.card_num}
                            </p>
                            <p>
                                <Typography variant="overline" gutterBottom>
                                    Address
                                </Typography>
                                {patient.form.address}, {patient.form.city},{" "}
                                <span style={{ textTransform: "uppercase" }}>
                                    {patient.form.province}
                                </span>
                                , {patient.form.postal}
                            </p>
                            <p>
                                <Typography variant="overline" gutterBottom>
                                    Notes
                                </Typography>
                                Patient{" "}
                                {patient.form.serious_illness
                                    ? "has"
                                    : "does not have"}{" "}
                                a serious illness
                            </p>
                            <Typography variant="overline" gutterBottom>
                                Medications
                            </Typography>
                            {patient.form.medications &&
                            patient.form.medications.length > 0 ? (
                                patient.form.medications.map(med => {
                                    return <li>{med}</li>;
                                })
                            ) : (
                                <p>None</p>
                            )}
                            <br />
                        </div>
                        <div className="buttons">
                            <Button
                                href={`/`}
                                color="primary"
                                variant="contained"
                                size="large"
                                // onClick={this.handleNextStep}
                            >
                                <PictureAsPdfIcon
                                    style={{ marginRight: "0.5em" }}
                                />
                                Export PDF
                            </Button>
                            <Button
                                href={`/`}
                                color="primary"
                                variant="contained"
                                size="large"
                                // onClick={this.handleNextStep}
                            >
                                <TableChartIcon
                                    style={{ marginRight: "0.5em" }}
                                />
                                Export Spreadsheet
                            </Button>
                        </div>
                        <br />
                    </>
                )}
            </div>
        );
    }
}
