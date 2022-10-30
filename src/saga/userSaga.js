import {call, put, takeEvery} from 'redux-saga/effects'
import { FETCH_USERS, setUsers } from '../store/userReduser'


const fetchUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')

function* fetchUserWorker() {
  const data = yield call(fetchUsersFromApi)
  const json = yield call(()=> new Promise(res => res(data.json())))
  yield put(setUsers(json))
}

// eslint-disable-next-line require-yield
export function* userWatcher() {
  yield takeEvery(FETCH_USERS, fetchUserWorker)
}



