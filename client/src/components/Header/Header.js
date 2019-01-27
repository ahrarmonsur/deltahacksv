import React, {Component} from 'react';
import './Header.sass'

class Header extends Component {
	render() {
		return (
			<div class="header">
				<h1>{this.props.title}</h1>
			</div>
		);
	}
}

export default Header;
