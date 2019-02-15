import Actions from './actionNames.json';

export const mainReducer = (state, action) => {
    switch (action.type) {
        case Actions.ON_CLICK_GET_NAME:
            return {
                ...state,
                generatedName: 'Tosia',
            };
        default:
            return state;
    }
};

