import React from 'react';
import PropTypes from 'prop-types';
import CardList from './CardList';
import Form from './Form';
import { connect } from 'react-redux';
import * as cardActions from '../../actions/addNewGitCardAction';
import { bindActionCreators } from 'redux';

// class CardArea extends React.Component {
// 	render() {
// 		return <CardList cards={data} />;
// 	}
// }

class CardArea extends React.Component {
	//This is the shorthand way for ecma8? to do it without using a constructor
	state = {
		cards: []
	};

	addNewCard = cardInfo => {
		console.log('Card Info has', cardInfo);
		this.props.addCard(cardInfo);
		// this.setState(prevState => {
		// 	return {
		// 		cards: prevState.cards.concat(cardInfo)
		// 	};
		// });
	};
	render() {
		return (
			<div style={{ margin: 10 }}>
				<Form onSubmit={this.addNewCard} />
				<CardList cards={this.props.theGitCards} />
			</div>
		);
	}
}

CardArea.propTypes = {
	addCard: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
	//gitCards is what I named the property in rootReducer.js
	return {
		theGitCards: state.gitCards
	};
}

function mapDispatchToProps(dispatch) {
	return {
		//The commented out way is how to do it without the bindActionCreators helper.
		// addCard: cardInfo => {
		// 	dispatch(cardActions.addNewGitCardAction(cardInfo));
		addCard: bindActionCreators(cardActions.addNewGitCardAction, dispatch)
		//alternately bindActionCreators can map them all so that would look like
		//actions: bindActionCreators(cardActions, dispatch);
		//Then when you need to invoke one you use this.props.action.addNewGitCardAction()
	};
}

const connectedStateAndPropsFunc = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndPropsFunc(CardArea);
//The alternate (more common form) is to write this one a single line like:
//export default connect(mapStateToProps, mapDispatchToProps)(CardArea);
