import React from 'react';
import Button from './Button';
import Result from './Result';

class ButtonArea extends React.Component {
	state = {
		counter: 1
	};
	incrementCounter = incr => {
		this.setState(prevState => ({
			counter: prevState.counter + incr
		}));
	};
	render() {
		return (
			<div>
				<Button incrValue={1} onClickFunction={this.incrementCounter} />
				<Button incrValue={5} onClickFunction={this.incrementCounter} />
				<Result counterVal={this.state.counter} />
			</div>
		);
	}
}

export default ButtonArea;
