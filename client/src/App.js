import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from "./logo.svg";

import Header from "./components/Header/Header";
import RoleSelection from "./components/RoleSelection/RoleSelection";
import UserVerification from "./components/UserVerification/UserVerification";
import Login from "./components/Login/Login";
import Form from "./components/Form/Form";
import Profile from "./components/Profile/Profile";
import PatientData from "./components/PatientData/PatientData";
import QRDisplay from "./components/QRDisplay/QRDisplay";
import QRScan from "./components/QRScan/QRScan";
import "./App.sass";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div id="App">
                    <Header title="MediForm" />
                    <div id="content">
                        <Route path="/" exact component={RoleSelection} />
                        <Route path="/login" component={Login} />
                        <Route
                            path="/userVerification"
                            component={UserVerification}
                        />
                        <Route
                            path="/qrdisplay/:patientID"
                            component={QRDisplay}
                        />
                        <Route path="/qrscan" component={QRScan} />
                        <Route path="/form/:patientID" component={Form} />
                        <Route path="/profile/:patientID" component={Profile} />
                        <Route
                            path="/patient/:patientID"
                            component={PatientData}
                        />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
