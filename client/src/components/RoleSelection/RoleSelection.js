import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import './RoleSelection.sass';

class RoleSelection extends Component {
	render() {
		return (
			<div className="roleSelection">
				<h2>
					Welcome to<br/>
					MediForm
				</h2>
				<div className="buttons">
					<Button color="primary" variant="contained" size="large" href="/login">Patient Portal</Button>
					<Button color="primary" variant="contained" size="large">Clinician Portal</Button>
				</div>
			</div>
		);
	}
}

export default RoleSelection;

