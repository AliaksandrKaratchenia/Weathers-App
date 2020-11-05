import watchGetOrders from "./weatherEffect";
import { all, fork } from 'redux-saga/effects'

function* rootSaga() {
    yield all([fork(watchGetOrders)])
}

export default rootSaga;
