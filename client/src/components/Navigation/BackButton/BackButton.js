import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./BackButton.sass";

class BackButton extends Component {
    render() {
        return (
            <div className="back">
                <Button href={this.props.href} onClick={this.props.onClick}>
                    <ArrowBackIcon />
                    Back
                </Button>
            </div>
        );
    }
}

export default BackButton;
