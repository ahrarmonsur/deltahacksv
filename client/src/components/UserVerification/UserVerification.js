import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TextField from '@material-ui/core/TextField';
import BackButton from '../Navigation/BackButton/BackButton';
import './UserVerification.sass';

class UserVerification extends Component {
	render() {
		return (
			<div className="userVerification">
				<BackButton/>
				<div className="info">
					<h2>
						Is this information correct?
					</h2>
				</div>
				<div className="inputFields">
					<TextField
						id="name"
						label="Name"
						value={"Jimothy Doe"}
						margin="normal"
						fullWidth={true}
						readOnly={true}
					/>
					<TextField
						id="email"
						label="Email"
						value={"jimothydoe@gmail.com"}
						margin="normal"
						fullWidth={true}
					/>
				</div>
				<div className="buttons">
					<Button color="primary" variant="contained" size="large">Yes, continue</Button>
					<Button color="primary" variant="outlined" size="large">No, edit</Button>
				</div>
			</div>
		);
	}
}

export default UserVerification;
