import { combineReducers } from 'redux';
import { getNameReducer } from './getNameReducer';

export const mainReducer = combineReducers({
    getNameReducer,
});
