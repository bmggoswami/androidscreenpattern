/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import { fromJS } from 'immutable';

import {
    SAVE_PATTERN_REQUEST,
    SAVE_PATTERN_FAILURE,
    SAVE_PATTERN_SUCCESS
} from './constants';


const initialState = fromJS({
   reset: '' 
});

function patternReducer(state = initialState, action){
    console.log("in reducers",state);
    switch (action.type){
        case SAVE_PATTERN_REQUEST:
            console.log("in request");
            return state;
        case SAVE_PATTERN_FAILURE:    
            console.log("in failure");
            return state.set({"reset":false});
        case SAVE_PATTERN_SUCCESS:    
            console.log("in success");
            return state.set({"reset":true});
        default:
            return state;
    }
}

export default patternReducer;