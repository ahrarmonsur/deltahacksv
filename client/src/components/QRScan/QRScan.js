import React, { Component } from "react";
import QrReader from "react-qr-reader";
import { Card, Button } from "@material-ui/core";
import "./QRScan.sass";

export default class QRScanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delay: 50
            // result: "No result"
        };
        this.handleScan = this.handleScan.bind(this);
    }
    handleScan(data) {
        if (data) {
            this.props.history.push(`/patient/${data}`);
        }
    }
    handleError(err) {
        console.error(err);
    }
    render() {
        return (
            <div className="qrscan">
                <h1>Check-in</h1>
                <Card className="qrcard">
                    <QrReader
                        delay={this.state.delay}
                        onError={this.handleError}
                        onScan={this.handleScan}
                        style={{ width: "100%" }}
                        resolution={600}
                        facingMode={"environment"}
                    />
                </Card>
                <div className="buttons footerButtons">
                    <Button
                        href={`/`}
                        color="primary"
                        variant="contained"
                        size="large"
                        // onClick={this.handleNextStep}
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        );
    }
}
