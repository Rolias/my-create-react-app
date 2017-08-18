import * as types from '../actions/actionTypes';

export default function cardReducer(state = [], action) {
	if (action.type === types.ADD_NEW_GIT_CARD) {
		return [...state, Object.assign({}, action.newCardInfo)];
	} else {
		return state;
	}
}
