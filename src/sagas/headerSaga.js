import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { GET_MENU, getComplete } from '../actions/headerActions';

export const callApi = () => {
  return axios.get('http://5d465ab172adf500143e1b0c.mockapi.io/api/menu-items');         
}

function* fetchMenuItems() {
  try {
    const menuItems = yield call(callApi);
    if (menuItems) {
      yield put(getComplete(menuItems.data));
    }
  } catch(err) {
    console.log(err);
  }
}

export function* watchMenu() {
  return yield takeLatest(GET_MENU, fetchMenuItems);
}