import React, { Component } from "react";

var QRCode = require('qrcode')

export default class QRDisplay extends Component {
    state = {
        image: ""
    };

    createQRCode = (patientID) => {
        console.log({patientID})
        QRCode.toDataURL(`http://localhost:3000/api/patients/${patientID}`, function (err, image) {
            console.log(image);
            this.setState({
                image: image
            });
        }.bind(this))
    }

    componentDidMount() {
        this.createQRCode(this.props.patientID);
    }

    render() {
        return <div>{this.state.image!='' && (<img src={this.state.image}></img>)}</div>;
    }
}
