import {takeLatest,put,delay} from 'redux-saga/effects'


function* incrementsync(){
    yield delay(1000)
    yield put({type : "INCREMENT_BY_ONE"});
}


function* decrementsync(){
    yield delay(1000)
    yield put({type : "DECREMENT_BY_ONE"});
}


function* resetsync(){
    yield delay(1000)
    yield put({type : "RESET_COUNT"});
}


export function* counterfun(){
    yield takeLatest("INCREMENT_ONE", incrementsync)
    yield takeLatest("DECREMENT_ONE", decrementsync)
    yield takeLatest("RESET", resetsync)
}
