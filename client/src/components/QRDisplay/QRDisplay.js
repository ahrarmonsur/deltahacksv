import React, { Component } from "react";

export default class QRDisplay extends Component {
    state = {
        image: ""
    };

    handleLoadImage = url => {
        imageData = generateQRCode();
        this.setState({
            image: imageData
        });
    };

    componentDidMount() {
        this.handleLoadImage();
    }

    render() {
        return <div>Hey</div>;
    }
}
