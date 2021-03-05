import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import userReducer from '../modules/user/reducer';

const reducers = (history) =>
	combineReducers({
		user: userReducer,
		router: connectRouter(history),
	});

export default reducers;
