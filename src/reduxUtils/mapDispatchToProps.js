import {onChangeNameInput, onClickGetNameButton} from './actionCreators/getNameActions';

const PATH = 'http://localhost:4000/name/random';

export const mapDispatchToProps = (dispatch) => ({
    onClickGetName: () => dispatch(onClickGetNameButton(PATH)),
    handleChange: (event) => dispatch(onChangeNameInput(event)),
});
