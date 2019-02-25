import {onChangeNameInput, onClickGetName} from '../actionCreators/getNameActions';

export const mapDispatchToProps = (dispatch) => ({
    onClickGetName: () => dispatch(onClickGetName()),
    handleChange: (event) => dispatch(onChangeNameInput(event)),
});

