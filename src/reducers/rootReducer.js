import { combineReducers } from 'redux';
import gitCards from './cardReducers';

const rootReducer = combineReducers({
	gitCards
});

export default rootReducer;
