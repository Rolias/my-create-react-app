import React from 'react';
import CardList from './CardList';
import Form from './Form';

// class CardArea extends React.Component {
// 	render() {
// 		return <CardList cards={data} />;
// 	}
// }

class CardArea extends React.Component {
	state = {
		cards: []
	};

	addNewCard = cardInfo => {
		this.setState(prevState => {
			return {
				cards: prevState.cards.concat(cardInfo)
			};
		});
	};
	render() {
		return (
			<div style={{ margin: 10 }}>
				<Form onSubmit={this.addNewCard} />
				<CardList cards={this.state.cards} />
			</div>
		);
	}
}

export default CardArea;
