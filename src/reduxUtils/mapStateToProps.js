export const mapStateToProps = ({getNameReducer}) => {
    return {
        generatedName: getNameReducer.generatedName,
        isError: getNameReducer.isError,
        isLoading: getNameReducer.isLoading,
    }
};