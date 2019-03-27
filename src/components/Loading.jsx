import React from 'react';

export const Loading = () => <React.Fragment>Loading xD </React.Fragment>;

export const LightLoading = (component) => (props) => <span className='light-loading'>
    {component}
</span>;