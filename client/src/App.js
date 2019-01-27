import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from "./logo.svg";

import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import "./App.sass";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div id="App">
                    <Header title="MediForm" />
                    <div id="content">
                        {/* <Route exact path="/" /> */}
                        <Route path="/login" component={Login} />

                        {/* <Route path="/form/1" component={Form_1} /> */}
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
