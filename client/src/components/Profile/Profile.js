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
            <div className="profile buttons">
                <h1>Hi, {patient.first_name}</h1>
                <Button
                    href={`/qrdisplay/${patient._id}`}
                    variant="contained"
                    color="primary"
                    className="banner-btn"
                    size="large"
                >
                    <Typography variant="overline" gutterBottom>
                        My passport
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Check-in with QR code
                    </Typography>
                </Button>
                <Button variant="contained" color="primary" size="large">
                    Edit form information
                </Button>

                <div style={{ marginTop: "3em" }} className="two-col-input">
                    <Typography variant="h6" gutterBottom>
                        Check-in History
                    </Typography>
                    <Typography
                        variant="overline"
                        gutterBottom
                        style={{ fontSize: "0.8em", color: "#777" }}
                    >
                        See More &#x203A;
                    </Typography>
                </div>
                <div className="checkin">
                    Family Wellness Medical Center
                    <div className="checkin-sub">Visited on 2019/01/12</div>
                </div>
                <div className="checkin">
                    Dr. Green Family Doctor
                    <div className="checkin-sub">Visited on 2018/12/28</div>
                </div>
            </div>
        );
    }
}
