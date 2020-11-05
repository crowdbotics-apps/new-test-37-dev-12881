import { put, call, all, spawn, takeEvery } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
function* plugin50_get__readWorker(action) {
  try {
    const result = yield call(apiService.plugin50_get__read, action)
    yield put(actions.plugin50_get__readSucceeded(result, action))
  } catch (err) {
    yield put(actions.plugin50_get__readFailed(err, action))
  }
}
function* plugin50_get__readWatcher() {
  yield takeEvery(types.PLUGIN50_GET__READ, plugin50_get__readWorker)
}
function* plugin50_post_data_g1_createWorker(action) {
  try {
    const result = yield call(apiService.plugin50_post_data_g1_create, action)
    yield put(actions.plugin50_post_data_g1_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.plugin50_post_data_g1_createFailed(err, action))
  }
}
function* plugin50_post_data_g1_createWatcher() {
  yield takeEvery(
    types.PLUGIN50_POST_DATA_G1_CREATE,
    plugin50_post_data_g1_createWorker
  )
}
export default function* rootSaga() {
  const sagas = [plugin50_get__readWatcher, plugin50_post_data_g1_createWatcher]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
