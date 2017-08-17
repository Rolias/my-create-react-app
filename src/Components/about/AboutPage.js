import React from 'react';
import { Link } from 'react-router-dom';

class AboutPage extends React.Component {
	render() {
		return (
			<div>
				<h1>AboutPage</h1>
				<div>This page uses react. </div>
				<Link to="/index" className="btn btn-primary btn-lg">
					Go Home
				</Link>
			</div>
		);
	}
}
export default AboutPage;
