import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { replace, push } from 'connected-react-router';

import * as types from '../actions/types';
import * as userActions from '../actions';
import * as userApi from '../api/userApi';
import * as storageUtils from '../../../utils/storageUtils';
import toast from '../../../utils/toast';

function* loginUser(action) {
	let data;
	yield put(userActions.enableLoader());
	try {
		data = yield call(userApi.loginUser, action.data);
		yield call(storageUtils.setUserToken, data.result.access_token);
		yield call(storageUtils.setUserData, data.result);
		yield put(userActions.setLoggedInUser(data.result));
		toast.success(data.status_message);
		yield put(replace('/'));
	} catch (err) {
		toast.error(err.status_message);
	}
	yield put(userActions.disableLoader());
}

function* logoutUser() {
	yield call(storageUtils.unsetUserData);
	yield call(storageUtils.unsetUserToken);
	yield put(replace('/login'));
}

function* restoreSession() { 
	yield put(userActions.enableLoader());
	let token = yield call(storageUtils.getUserToken);
	if (token && token !== '') {
		let userData = yield call(storageUtils.getUserData);
		yield put(userActions.setLoggedInUser(userData));
		yield put(push('/'));
	} else {
		yield put(push('/login'));
	}
	yield put(userActions.disableLoader());
}

export function* watchLoginUser() {
	yield takeEvery(types.LOGIN_USER, loginUser);
	yield takeEvery(types.LOGOUT_USER, logoutUser);
	yield takeEvery(types.RESTORE_SESSION, restoreSession);
}

export default function* userSaga() {
	yield all([fork(watchLoginUser)]);
}
