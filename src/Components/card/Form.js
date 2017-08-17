import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

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
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					className="form-control col-3"
					value={this.state.userName}
					onChange={this.updateUserName}
					placeholder="Github username"
				/>
				<button type="submit" className="btn btn-primary">
					Add card
				</button>
			</form>
		);
	}
}

Form.propTypes = {
	onSubmit: PropTypes.func.isRequired
};

export default Form;
