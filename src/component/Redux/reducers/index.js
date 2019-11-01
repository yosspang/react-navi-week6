import {combineReducers} from 'redux';
import oddEvenReducer from './oddEvenReducer';

const allReducers = combineReducers({
    dataNumbers: oddEvenReducer
});
export default allReducers;