import React, { Component } from "react";
import "./QRDisplay.sass";
import { Card, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

var QRCode = require("qrcode");

export default class QRDisplay extends Component {
    state = {
        image: ""
    };

    createQRCode = patientID => {
        console.log({ patientID });
        QRCode.toDataURL(
            patientID,
            { scale: 32 },
            function(err, image) {
                console.log(image);
                this.setState({
                    image: image
                });
            }.bind(this)
        );
    };

    componentDidMount() {
        this.createQRCode(this.props.match.params.patientID);
    }

    render() {
        return (
            <div className="qrdisplay">
                <h1>Check-in</h1>
                {this.state.image != "" && (
                    <Card className="qrcard">
                        <img src={this.state.image} />
                    </Card>
                )}
                <div className="buttons">
                    <Button
                        href={`/profile/${this.props.match.params.patientID}`}
                        color="primary"
                        variant="contained"
                        size="large"
                        // onClick={this.handleNextStep}
                    >
                        Finish
                    </Button>
                </div>
            </div>
        );
    }
}
