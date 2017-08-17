import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const CardList = props => {
	return (
		<div>
			{props.cards.map(card => <Card key={card.id} {...card} />)}
		</div>
	);
};

CardList.propTypes = {
	cards: PropTypes.arrayOf(Card)
};
export default CardList;
