import React, { Component } from 'react';
import logo from './logo.svg';

import Header from './components/Header/Header';
import RoleSelection from './components/RoleSelection/RoleSelection';
import UserVerification from './components/UserVerification/UserVerification';
import Login from './components/Login/Login';
import './App.sass';

class App extends Component {
    render() {
		return (
			<div id="App">
				<Header title="MediForm"/>
				<div id="content">
					{/*<RoleSelection/>*/}
					{/*<Login/>*/}
					<UserVerification/>
				</div>
			</div>
		);
    }
}

export default App;
