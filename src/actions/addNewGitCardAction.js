import * as types from './actionTypes';

export function addNewGitCardAction(newCardInfo) {
	return { type: types.ADD_NEW_GIT_CARD, newCardInfo };
}
