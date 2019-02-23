import Actions from '../actionNames.json';

const initialState = { generatedName: '' }

export const getNameReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.ON_CLICK_GET_NAME:
            return {
                ...state,
                generatedName: 'Tosia',
            };
        case Actions.ON_CHANGE_NAME_INPUT:
            return {
                ...state,
                generatedName: action.event.target.value,
            };
        default:
            return state;
    }
};

