import {CHECK_ODDEVEN} from './types';

export function checkOddEven(inputNumber){
    return{
        type: CHECK_ODDEVEN,
        payload: inputNumber
    }
}