import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Button, FormGroup, FormControl, Form as RForm } from 'react-bootstrap';

class Form extends React.Component {
	state = { userName: '' };

	handleSubmit = event => {
		event.preventDefault();
		let url = `https://api.github.com/users/${this.state.userName}`;
		console.log(url);
		axios
			.get(url)
			.then(response => {
				this.props.onSubmit(response.data);
				this.setState({ userName: '' });
			})
			.catch(error => {
				console.log(error);
			});
	};

	updateUserName = event => {
		this.setState({ userName: event.target.value });
	};

	render() {
		return (
			<RForm inline onSubmit={this.handleSubmit}>
				<FormGroup>
					<FormControl
						bsSize="large"
						type="text"
						value={this.state.userName}
						onChange={this.updateUserName}
						placeholder="Github username"
					/>
					<Button type="submit" bsStyle="success" bsSize="large">
						Add card
					</Button>
				</FormGroup>
			</RForm>
		);
	}
}

Form.propTypes = {
	onSubmit: PropTypes.func.isRequired
};

export default Form;
