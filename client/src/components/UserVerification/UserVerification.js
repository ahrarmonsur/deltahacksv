import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import BackButton from "../Navigation/BackButton/BackButton";
import "./UserVerification.sass";

import { createPatient } from "../../api/api";

class UserVerification extends Component {
    state = {
        name: "Jimothy Doe",
        email: "jimothydoe@gmail.com"
    };

    handleNameChange = e => this.setState({ name: e.target.value });
    handleEmailChange = e => this.setState({ email: e.target.value });

    handleSubmit = () => {
        createPatient(this.state, res => {
            this.props.history.push(`/form/${res._id}`);
        });
    };

    render() {
        return (
            <div className="userVerification">
                <BackButton href="/login" />
                <div className="info">
                    <h2>Confirm your information.</h2>
                </div>
                <div className="inputFields">
                    <TextField
                        id="name"
                        label="Name"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        margin="normal"
                        fullWidth={true}
                    />
                    <TextField
                        id="email"
                        label="Email"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        margin="normal"
                        fullWidth={true}
                    />
                </div>
                <div className="buttons footerButtons">
                    <Button
                        color="primary"
                        variant="contained"
                        size="large"
                        onClick={this.handleSubmit}
                    >
                        Confirm
                    </Button>
                </div>
            </div>
        );
    }
}

export default UserVerification;
