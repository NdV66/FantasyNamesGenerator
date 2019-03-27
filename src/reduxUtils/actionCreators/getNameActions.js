import { dispatchFetchData } from '../restActions';

export const ON_CLICK_GET_NAME = 'ON_CLICK_GET_NAME';
export const ON_CHANGE_NAME_INPUT = 'ON_CHANGE_NAME_INPUT';

export const onChangeNameInput = (event) => ({
    type: ON_CHANGE_NAME_INPUT,
    event,
});

export const onClickGetName = () => ({
    type: ON_CLICK_GET_NAME,
});

export const onClickGetNameButton = (url) =>
    (dispatch) => {
        dispatch(onClickGetName());
        dispatchFetchData(url, dispatch);
    };

