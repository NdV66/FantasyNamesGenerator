import Actions from '../actionNames.json';

const initialState = { generatedName: 'Test' }

export const getNameReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.ON_CLICK_GET_NAME:
        console.log('on click get name buttonik');
            return {
                ...state,
                generatedName: 'Tosia',
            };
        default:
            return state;
    }
};

