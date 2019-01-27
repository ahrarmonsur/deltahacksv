import React, { Component } from 'react';
import logo from './logo.svg';

import Header from './components/Header/Header';
import Login from './components/Login/Login';
import './App.sass';

class App extends Component {
    render() {
		return (
			<div id="App">
				<Header title="MediForm"/>
				<div id="content">
					<Login/>
				</div>
			</div>
		);
    }
}

export default App;
