import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from "./logo.svg";

import Header from './components/Header/Header';
import RoleSelection from './components/RoleSelection/RoleSelection';
import UserVerification from './components/UserVerification/UserVerification';
import Login from './components/Login/Login';
import './App.sass';

class App extends Component {
    render() {
		return (
			<BrowserRouter>
				<div id="App">
					<Header title="MediForm"/>
					<div id="content">
						<Route path="/" exact component={RoleSelection} />
						<Route path="/login" component={Login} />
						<Route path="/userVerification" component={UserVerification} />
					</div>
				</div>
			</BrowserRouter>
		);
    }
}

export default App;
