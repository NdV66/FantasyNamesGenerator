import React from 'react';
import {PropTypes} from 'prop-types';

export const Circle = (props) => <circle
        cx={props.cx}
        cy={props.cy}
        r={props.r}
        fill={props.fill}
        className='fantasy-snow'
    />;

Circle.propTypes = {
    r: PropTypes.string,
    fill: PropTypes.string,
    cx: PropTypes.string,
    cy: PropTypes.string,
};