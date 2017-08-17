import React from 'react';

class Button extends React.Component {
	//No state object of our own but still worth keeping as a class
	//so we can do invoke a function on this.props
	handleClick = () => {
		this.props.onClickFunction(this.props.incrValue);
	};

	render() {
		return (
			<div>
				<button onClick={this.handleClick}>
					Add {this.props.incrValue}
				</button>
			</div>
		);
	}
}
export default Button;
