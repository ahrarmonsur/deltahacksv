import React, { Component } from "react";
import { getPatient } from "../../api/api";
import "./Profile.sass";
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
            }
        );
    }

    render() {
        let patient = this.state.patient;
        console.log(this.state.patient);
        return (
            <div className="profile">
                <h1>Hi, {patient.first_name}</h1>
                <Button
                    href={`/qrdisplay/${patient._id}`}
                    variant="contained"
                    color="primary"
                    className="banner-btn"
                >
                    <Typography variant="overline" gutterBottom>
                        My passport
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Check-in with QR code
                    </Typography>
                </Button>
            </div>
        );
    }
}
