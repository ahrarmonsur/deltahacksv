import React, { Component } from "react";
import QrReader from "react-qr-reader";

export default class QRScanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delay: 50,
            result: "No result"
        };
        this.handleScan = this.handleScan.bind(this);
    }
    handleScan(data) {
        if (data) {
            console.log(data);
            this.setState({
                result: data
            });
        }
    }
    handleError(err) {
        console.error(err);
    }
    render() {
        return (
            <div>
                <QrReader
                    delay={this.state.delay}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ width: "500px" }}
                    resolution={600}
                    facingMode={"user"}
                />
                <p>{this.state.result}</p>
            </div>
        );
    }
}
