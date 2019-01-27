import React, { Component } from "react";
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Input,
    TextField,
    Button,
    Typography,
    List,
    ListItem,
    ListItemText,
    IconButton,
    ListItemSecondaryAction,
    dense
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import formImg from '../../assets/illustration-2.png';
import formImg2 from '../../assets/illustration-3.png';

import "./Form.sass";
import BackButton from "../Navigation/BackButton/BackButton";

import { submitPatientForm } from "../../api/api";

export default class Form extends Component {
    state = {
        prevStep: 1,
        step: 1,
        data: {
            gender: "",
            dob: "",
            phone_1: "",
            phone_2: "",
            phone_3: "",
            card_num: "",
            province: "on",
            address: "",
            postal: "",
            city: "",
            medications: [],
            medication: "",
            serious_illness: undefined
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
            prevStep: prevState.step,
            step: prevState.step + 1
        }));
    };

    handlePreviousStep = () => {
        this.setState(prevState => ({
            step: prevState.step - 1,
            prevStep: prevState.step
        }));
	    console.log(this.state);
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

    handleAddMedication = () => {
        this.setState(prevState => {
            if (prevState.data.medication !== "") {
                return {
                    data: {
                        ...prevState.data,
                        medications: prevState.data.medications.concat([
                            prevState.data.medication
                        ]),
                        medication: ""
                    }
                };
            } else {
                return;
            }
        });
    };

    handleRemoveMedication = rm_medication => {
        this.setState(prevState => {
            let filteredMeds = prevState.data.medications.filter(
                medication => medication !== rm_medication
            );
            return {
                data: {
                    ...prevState.data,
                    medications: filteredMeds
                }
            };
        });
    };

    handleSeriousDecision = val => {
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                serious_illness: val
            }
        }));
        this.handleNextStep();
        submitPatientForm("5c4ccb40d0dc8f0317d60eb0", this.state.data);
    };

    gotoStep = step => {
        console.log(step);
        this.setState(prevState => ({
            prevStep: prevState.step,
            step: step
        }));
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
                        InputLabelProps={{
                            shrink: true
                        }}
                        placeholder="eg. 4162223333"
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
                {this.state.step === 1 && (
                    <BackButton href="/userVerification" />
                )}
                {this.state.step !== 1 && (
                    <BackButton onClick={this.handlePreviousStep} />
                )}

                {/* *** STEP 1 *** */}
                {this.state.step == 1 && (
					<div className="info">
						<img src={formImg} alt="Image of health passport"/>
						<Typography variant="subheading">
							STEP 1
						</Typography>
						<h2>Let's get your health passport set up.</h2>
						<p>
							Fill out your information once, and you'll only have
							to scan your QR code the next time you visit the
							doctor!
						</p>
						<p>We'll start with information about you.</p>
					</div>
                )}

                {/* *** STEP 2 *** */}
                {this.state.step == 2 && (
                    <>
                        <div className="info">
                            <h1>What's your gender and date of birth?
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
                                        <MenuItem value="">Choose one...</MenuItem>
                                        <MenuItem value={"male"}>Male</MenuItem>
                                        <MenuItem value={"female"}>Female</MenuItem>
                                        <MenuItem value={"other"}>Other</MenuItem>
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
                            <h1>What's your primary phone number?</h1>
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
                            <h1>What is your health card number?</h1>
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
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    placeholder="eg. 1234-567-890-XX"
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
                            <h1>Please enter your address.</h1>
                        </div>
                        <form id="form_2">
                            <div>
                                <TextField
                                    fullWidth={true}
                                    id="address"
                                    label="Street"
                                    value={this.state.data.address}
                                    onChange={this.handleChangeInput("address")}
                                    type="text"
                                    name={`address`}
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
                                        margin="normal"
                                    />
                                </div>
                            </div>
                        </form>
                    </>
                )}

                {/* *** STEP 6 *** */}
                {this.state.step == 6 && (
					<div className="info">
						<img src={formImg2} alt="Image of prescriptions"/>
						<Typography variant="subheading" gutterBottom>
							STEP 2
						</Typography>
						<h2>Your medical information</h2>
						<p>
							Doctors need background information in order to make
							informed medical decisions for you.
						</p>
						<p>
							Here are a few questions about you and your medical
							history.
						</p>
					</div>
                )}

                {/* *** STEP 7 *** */}
                {this.state.step == 7 && (
                    <>
                        <div
                            className="info"
                            style={{ justifyContent: "center" }}
                        >
                            <h2>Are you currently taking any prescription medication?</h2>
                        </div>
	                    <div className="buttons footerButtons">
		                    <Button
			                    color="primary"
			                    variant="contained"
			                    size="large"
			                    onClick={() => this.gotoStep(8)}
		                    >
			                    Yes
		                    </Button>
		                    <Button
			                    color="primary"
			                    variant="contained"
			                    size="large"
			                    onClick={() => this.gotoStep(9)}
		                    >
			                    No
		                    </Button>
                        </div>
                    </>
                )}

                {/* *** STEP 8 ***
                  YES TO MEDICATION */}
                {this.state.step == 8 && (
                    <>
                        <div className="info">
                            <h2>
                                Which medication(s) are you taking right now?
                            </h2>
                        </div>
                        <form id="form_2">
                            {this.state.data.medications !== [] && (
                                <List dense={false}>
                                    {this.state.data.medications.map(
                                        medication => {
                                            return (
                                                <ListItem key={medication}>
                                                    <ListItemText
                                                        primary={medication}
                                                    />
                                                    <ListItemSecondaryAction
                                                        style={{ top: "25%" }}
                                                    >
                                                        <IconButton
                                                            aria-label="Delete"
                                                            onClick={() =>
                                                                this.handleRemoveMedication(
                                                                    medication
                                                                )
                                                            }
                                                        >
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </ListItemSecondaryAction>
                                                </ListItem>
                                            );
                                        }
                                    )}
                                </List>
                            )}
                            <TextField
                                fullWidth={true}
                                id="medication"
                                label={
                                    this.state.data.medications != []
                                        ? "Prescription Medication"
                                        : null
                                }
                                value={this.state.data.medication}
                                onChange={this.handleChangeInput("medication")}
                                type="text"
                                name={`medication`}
                                // className={classes.textField}
                                InputLabelProps={{
                                    shrink: true
                                }}
                                placeholder="eg. Advil, 25mg, twice daily"
                                margin="normal"
                            />
                            <Button
                                color="default"
                                onClick={this.handleAddMedication}
                            >
                                + Add Another
                            </Button>
                        </form>
                    </>
                )}

                {/* *** STEP 9 *** */}
                {this.state.step == 9 && (
                    <>
                        <div
                            className="info"
                            style={{ justifyContent: "center" }}
                        >
                            <h2>Do you have a history of serious illnesses?</h2>
                            <p>
                                For instance, heart disease, diabetes, HIV/AIDS,
                                etc.
                            </p>
                        </div>
	                    <div className="buttons footerButtons">
		                    <Button
			                    color="primary"
			                    variant="contained"
			                    size="large"
			                    onClick={() => this.handleSeriousDecision(true)}
		                    >
			                    Yes
		                    </Button>
		                    <Button
			                    color="primary"
			                    variant="contained"
			                    size="large"
			                    onClick={() => this.handleSeriousDecision(false)}
		                    >
			                    No
		                    </Button>
                        </div>
                    </>
                )}

                {/* *** STEP 10 *** */}
                {this.state.step == 10 && (
					<div className="info"
					     style={{ justifyContent: "center" }}
                    >
						<h2>
							Your health passport is complete!
						</h2>
						<p>
							Thank you for filling out all of the entries. You
							are now ready to check into clinics with a quick
							scan!
						</p>
					</div>
                )}

                <div className="buttons footerButtons">
	                {this.state.step !== 7 &&
	                this.state.step !== 9 &&
	                this.state.step !== 10 && (
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
	                )}
	                {this.state.step === 10 && (
		                <Button
			                color="primary"
			                variant="contained"
			                size="large"
                            // onClick={this.handleNextStep}
		                >
			                View my profile
		                </Button>
	                )}

                </div>
            </div>
        );
    }
}
