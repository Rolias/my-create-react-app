import React from 'react';
//import propTypes from 'prop-types';

const Card = props => {
	return (
		<div style={{ marginLeft: 10, marginTop: 10 }}>
			<img width="75" src={props.avatar_url} alt="headshot" />
			<div style={{ display: 'inline-block', marginLeft: 10 }}>
				<div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>
					{props.name}
				</div>
				<div>
					{props.company}
				</div>
			</div>
		</div>
	);
};

export default Card;
