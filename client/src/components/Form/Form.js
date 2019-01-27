import React, { Component } from "react";
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Input,
    TextField,
    Button,
    Typography
} from "@material-ui/core";

import "./Form.sass";
import BackButton from "../Navigation/BackButton/BackButton";

export default class Form extends Component {
    state = {
        step: 1,
        data: {
            gender: "",
            dob: "",
            phone_1: "",
            phone_2: "",
            phone_3: "",
            card_num: "",
            province: "",
            address: "",
            postal: "",
            city: ""
        },
        phone_numbers: 1
    };

    handleChangeSelect = event => {
        console.log(event.target.value);
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                [event.target.name]: event.target.value
            }
        }));
    };

    handleChangeInput = name => event => {
        let value = event.target.value;
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                [name]: value
            }
        }));
    };

    handleNextStep = () => {
        this.setState(prevState => ({
            step: prevState.step + 1
        }));
    };

    handlePreviousStep = () => {
        this.setState(prevState => ({
            step: prevState.step - 1
        }));
    };

    handleAddPhone = () => {
        this.setState(prevState => {
            if (prevState.phone_numbers < 3) {
                return {
                    phone_numbers: prevState.phone_numbers + 1
                };
            }
        });
    };

    createPhoneInputs = () => {
        let prevState = this.state;
        let inputs = [];
        for (let i = 1; i < prevState.phone_numbers + 1; i++) {
            inputs.push(
                <div key={i}>
                    <TextField
                        fullWidth={true}
                        id="standard-number"
                        label={`Phone Number ${i}`}
                        value={this.state.data[`phone_${i}`]}
                        onChange={this.handleChangeInput(`phone_${i}`)}
                        type="tel"
                        name={`phone_${i}`}
                        // className={classes.textField}
                        InputLabelProps={{
                            shrink: true
                        }}
                        margin="normal"
                    />
                </div>
            );
        }
        return inputs;
    };

    render() {
        return (
            <div className="form">
                {this.state.step === 1 && <BackButton href="/" />}
                {this.state.step !== 1 && (
                    <BackButton onClick={this.handlePreviousStep} />
                )}

                {/* *** STEP 1 *** */}
                {this.state.step == 1 && (
                    <>
                        <Typography variant="subheading" gutterBottom>
                            STEP 1
                        </Typography>
                        <div className="info">
                            <h1>
                                Let's get your health <br /> passport set up.
                            </h1>
                        </div>
                        <p>
                            Fill out your information once, and you'll only have
                            to scan your QR code the next time you visit the
                            doctor!
                        </p>
                        <p>We'll start with information about you.</p>
                    </>
                )}

                {/* *** STEP 2 *** */}
                {this.state.step == 2 && (
                    <>
                        <div className="info">
                            <h1>
                                What's your gender <br />
                                and date of birth?
                            </h1>
                        </div>
                        <form id="form_1">
                            <div className="formRow">
                                <FormControl
                                    className="formControl"
                                    fullWidth={true}
                                >
                                    <InputLabel
                                        shrink
                                        htmlFor="age-label-placeholder"
                                    >
                                        Gender
                                    </InputLabel>
                                    <Select
                                        value={this.state.data.gender}
                                        onChange={this.handleChangeSelect}
                                        input={
                                            <Input
                                                name="gender"
                                                id="age-label-placeholder"
                                            />
                                        }
                                        displayEmpty
                                        name="gender"
                                    >
                                        <MenuItem value="">
                                            <em>Choose one...</em>
                                        </MenuItem>
                                        <MenuItem value={"male"}>Male</MenuItem>
                                        <MenuItem value={"female"}>
                                            Female
                                        </MenuItem>
                                        <MenuItem value={"other"}>
                                            Other
                                        </MenuItem>
                                    </Select>
                                    {/* <FormHelperText>Label + placeholder</FormHelperText> */}
                                </FormControl>
                            </div>
                            <div className="formRow">
                                <TextField
                                    id="date"
                                    label="Date of Birth"
                                    type="date"
                                    // defaultValue=""
                                    className="formEl"
                                    name="dob"
                                    value={this.state.data.dob}
                                    fullWidth={true}
                                    onChange={this.handleChangeInput("dob")}
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                />
                            </div>
                        </form>
                    </>
                )}

                {/* *** STEP 3 *** */}
                {this.state.step == 3 && (
                    <>
                        <div className="info">
                            <h1>
                                What's your primary <br />
                                phone number?
                            </h1>
                        </div>
                        <form id="form_2">
                            {this.createPhoneInputs()}
                            {this.state.phone_numbers < 3 && (
                                <Button
                                    color="default"
                                    onClick={this.handleAddPhone}
                                >
                                    + Add Another
                                </Button>
                            )}
                        </form>
                    </>
                )}

                {/* *** STEP 4 *** */}
                {this.state.step == 4 && (
                    <>
                        <div className="info">
                            <h1>
                                What is your health card <br /> number?
                            </h1>
                        </div>
                        <form id="form_2">
                            <div>
                                <TextField
                                    fullWidth={true}
                                    id="standard-number"
                                    label="Health Card Number"
                                    value={this.state.data.card_num}
                                    onChange={this.handleChangeInput(
                                        "card_num"
                                    )}
                                    type="text"
                                    name={`card_num`}
                                    // className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    margin="normal"
                                />
                            </div>
                            {/* <Button color="default">Need help?</Button> */}
                        </form>
                    </>
                )}

                {/* *** STEP 5 *** */}
                {this.state.step == 5 && (
                    <>
                        <div className="info">
                            <h1>
                                Please enter your <br /> address.
                            </h1>
                        </div>
                        <form id="form_2">
                            <div>
                                <TextField
                                    fullWidth={true}
                                    id="address"
                                    label="Address"
                                    value={this.state.data.address}
                                    onChange={this.handleChangeInput("address")}
                                    type="text"
                                    name={`address`}
                                    // className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    margin="normal"
                                />
                                <TextField
                                    fullWidth={true}
                                    id="city"
                                    label="City"
                                    value={this.state.data.city}
                                    onChange={this.handleChangeInput("city")}
                                    type="text"
                                    name={`city`}
                                    // className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    margin="normal"
                                />

                                <div className="two-col-input">
                                    <FormControl
                                        className="formControl"
                                        fullWidth={true}
                                    >
                                        <InputLabel
                                            shrink
                                            htmlFor="age-label-placeholder"
                                        >
                                            Province
                                        </InputLabel>
                                        <Select
                                            value={this.state.data.province}
                                            onChange={this.handleChangeSelect}
                                            input={
                                                <Input
                                                    name="province"
                                                    id="age-label-placeholder"
                                                />
                                            }
                                            displayEmpty
                                            name="province"
                                        >
                                            <MenuItem value="" />
                                            <MenuItem value={"ab"}>
                                                Alberta
                                            </MenuItem>
                                            <MenuItem value={"bc"}>
                                                British Columbia
                                            </MenuItem>
                                            <MenuItem value={"mb"}>
                                                Manitoba
                                            </MenuItem>
                                            <MenuItem value={"nb"}>
                                                New Brunswick
                                            </MenuItem>
                                            <MenuItem value={"nl"}>
                                                Newfoundland and Labrador
                                            </MenuItem>
                                            <MenuItem value={"nt"}>
                                                Northwest Territories
                                            </MenuItem>
                                            <MenuItem value={"ns"}>
                                                Nova Scotia
                                            </MenuItem>
                                            <MenuItem value={"nu"}>
                                                Nunavut
                                            </MenuItem>
                                            <MenuItem value={"on"}>
                                                Ontario
                                            </MenuItem>
                                            <MenuItem value={"pe"}>
                                                Prince Edward Island
                                            </MenuItem>
                                            <MenuItem value={"sk"}>
                                                Saskatchewan
                                            </MenuItem>
                                            <MenuItem value={"yt"}>
                                                Yukon
                                            </MenuItem>
                                        </Select>
                                        {/* <FormHelperText>Label + placeholder</FormHelperText> */}
                                    </FormControl>
                                    <TextField
                                        fullWidth={true}
                                        id="postal"
                                        label="Postal Code"
                                        value={this.state.data.postal}
                                        onChange={this.handleChangeInput(
                                            "postal"
                                        )}
                                        type="text"
                                        name={`postal`}
                                        // className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        margin="normal"
                                    />
                                </div>
                            </div>
                        </form>
                    </>
                )}

                {/* *** STEP 6 *** */}
                {this.state.step == 6 && (
                    <>
                        <div className="info">
                            <h1>
                                What is your health card <br /> number?
                            </h1>
                        </div>
                        <form id="form_2">
                            <div>
                                <TextField
                                    fullWidth={true}
                                    id="standard-number"
                                    label="Health Card Number"
                                    value={this.state.data.card_num}
                                    onChange={this.handleChangeInput(
                                        "card_num"
                                    )}
                                    type="text"
                                    name={`card_num`}
                                    // className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    margin="normal"
                                />
                            </div>
                            {/* <Button color="default">Need help?</Button> */}
                        </form>
                    </>
                )}

                <footer>
                    <Button
                        color="primary"
                        variant="contained"
                        size="large"
                        onClick={this.handleNextStep}
                    >
                        {this.state.step == 1 || this.state.step == 6
                            ? "Continue"
                            : "Next"}
                    </Button>
                </footer>
            </div>
        );
    }
}
