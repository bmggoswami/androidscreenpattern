/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {
    SAVE_PATTERN_REQUEST
} from './constants';

export function savePattern(pattern){
    console.log("in actions",pattern);
    return{
        type: SAVE_PATTERN_REQUEST,
        pattern
    };
}

