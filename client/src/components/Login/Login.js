import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import './Login.sass';

class Login extends Component {
	render() {
		return (
			<div className="login">
				<div className="info">
					<h2>
						Doctor check-ins<br/>
						made easy
					</h2>
					<p>
						Skip the form at the doctor’s office, and scan your QR code in seconds.
					</p>
				</div>
				<div className="buttons">
					<Button color="primary" variant="contained" size="large" href="/userVerification"> Sign up with Google</Button>
					<Button color="primary" variant="contained" size="large" href="/userVerification"> Sign up with Email</Button>
					<p>or log in</p>
				</div>
			</div>
		);
	}
}

export default Login;
