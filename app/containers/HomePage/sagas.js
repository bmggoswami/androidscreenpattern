/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import { take, call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../../services/localStorageApi';
import * as types from './constants';

function* savePattern(pattern){
    console.log("in sagas");
    try{
       if(pattern){
            yield call(api.saveItem, "pattern", pattern.pattern);
            yield put({type: types.SAVE_PATTERN_SUCCESS, message:"saved successfully"});
        }else{
            yield put({type: types.SAVE_PATTERN_FAILURE, message:"error saving pattern"});
        }
    }catch(error){
        yield put({type: types.types.SAVE_PATTERN_FAILURE, error});
    }
}

function* patternWatcher(){
    const watcher = yield takeLatest(types.SAVE_PATTERN_REQUEST, savePattern);
}

export default [
    patternWatcher
];

