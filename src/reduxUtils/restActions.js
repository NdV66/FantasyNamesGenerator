export const GET_DATA_REQUESTED = 'GET_DATA_REQUESTED';
export const GET_DATA_DONE = 'GET_DATA_DONE';
export const GET_DATA_FAILED = 'GET_DATA_FAILED';

export const getDataRequested = () => ({
    type: GET_DATA_REQUESTED,
});

export const getDataFailed = (data) => ({
    type: GET_DATA_FAILED,
    payload: data,
});

export const getDataDone = (data) => ({
    type: GET_DATA_DONE,
    payload: data,
});

export const dispatchFetchData = (url, dispatch) => {
    dispatch(getDataRequested());

    fetch(url)
        .then(response => response.json())
        .then(data => dispatch(getDataDone(data)))
        .catch(error => dispatch(getDataFailed(error)))
};


