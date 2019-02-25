import {ON_CLICK_GET_NAME, ON_CHANGE_NAME_INPUT} from '../actionCreators/getNameActions';

const initialState = { generatedName: '' }

export const getNameReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_CLICK_GET_NAME:
            return {
                ...state,
                generatedName: 'Tosia',
            };
        case ON_CHANGE_NAME_INPUT:
            return {
                ...state,
                generatedName: action.event.target.value,
            };
        default:
            return state;
    }
};

