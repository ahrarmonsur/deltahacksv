import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import './Login.sass';
import loginImg from '../../assets/illustration-1.png';

class Login extends Component {
	render() {
		return (
			<div className="login">
				<div className="info">
					<img src={loginImg} alt="Image of woman holding Mediform app"/>
					<h2>
						Clinic visits made easy.
					</h2>
					<p>
						Skip the form at the doctor’s office, and scan your QR code in seconds.
					</p>
				</div>
				<div className="buttons footerButtons">
					<Button color="primary" variant="contained" size="large" href="/userVerification"> Sign up with Google</Button>
					<Button color="primary" variant="contained" size="large" href="/userVerification"> Sign up with Email</Button>
					<p>or log in</p>
				</div>
			</div>
		);
	}
}

export default Login;
