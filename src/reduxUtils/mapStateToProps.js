export const mapStateToProps = ({getNameReducer}) => ({
    generatedName: getNameReducer.generatedName,
});