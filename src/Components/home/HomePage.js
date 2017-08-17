import React from 'react';
import { Link } from 'react-router-dom';
import CardArea from '../card/CardArea';

class HomePage extends React.Component {
	render() {
		return (
			<div>
				<CardArea />
				<Link to="/about" className="btn btn-primary btn-lg">
					Learn more
				</Link>
			</div>
		);
	}
}
export default HomePage;
