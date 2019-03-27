import {ON_CLICK_GET_NAME, ON_CHANGE_NAME_INPUT} from '../actionCreators/getNameActions';
import {GET_DATA_REQUESTED, GET_DATA_DONE, GET_DATA_FAILED} from '../restActions';

const initialState = {
    generatedName: 'Test name',
    isLoading: false,
    isError: false,
};

export const getNameReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_CLICK_GET_NAME:
            return {
                ...state,
            };
        case ON_CHANGE_NAME_INPUT:
            return {
                ...state,
                generatedName: action.event.target.value,
            };
        case GET_DATA_REQUESTED:
            return {
                ...state,
                isLoading: true,
            };
        case GET_DATA_DONE:
            return {
                ...state,
                isLoading: false,
                generatedName: action.payload.generatedName,
            };
        case GET_DATA_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        default:
            return state;
    }
};

