import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Circle } from './Circle';

const CIRCLE_NUMBER = 40;
const MAX_CIRCLE_SIZE = 16;
const MIN_CIRCLE_SIZE = 4;

const randomIntegerBetween = (min, max) => Math.floor(Math.random() * max) + min;

const renderCircles = ({circlesNumber, maxY, maxX,}) => {
    const renderedCircles = [];

    for(let i = 0; i < circlesNumber; ++i) {
        const greyColor = randomIntegerBetween(90, 250);
        const opacity = randomIntegerBetween(0.4, 0.9);

        renderedCircles.push(<Circle
            r={randomIntegerBetween(MIN_CIRCLE_SIZE, MAX_CIRCLE_SIZE).toString()}
            fill={`rgba(${greyColor}, ${greyColor}, ${greyColor}, ${opacity})`}
            cx={randomIntegerBetween(0, maxX).toString()}
            cy={(0 - MAX_CIRCLE_SIZE).toString()}
            key={`circle_${i}`}
        />);
    }

    return renderedCircles;
};

export class PageJumbotron extends React.Component {
    constructor(props){
        super(props)
        this.jumbotronRef = React.createRef();
        this.state = {
            jumbotronHeight: 0,
            jumbotronWidth: 0,
        };
    }

    componentDidMount () {
        const jumbotronHeight = this.jumbotronRef.current.offsetHeight;
        const jumbotronWidth = this.jumbotronRef.current.offsetWidth;
        this.setState({jumbotronHeight, jumbotronWidth});
    }

    render() {
        const circlesSettings = {
            circlesNumber: CIRCLE_NUMBER,
            maxX: this.state.jumbotronWidth,
            maxY: this.state.jumbotronHeight,
        };

        return <div className='jumbotron-bg position-relative wavy-div' ref={this.jumbotronRef}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className='jumbotron-svg'>
                {renderCircles(circlesSettings)}
            </svg>
            <Jumbotron className='page-jumbotron text-center text-light shadow-bg mb-0'>
                <h1>Fantasy names generator</h1>
                <h2 className='mt-3'>beacuse we love Role Plaing Games so much!</h2>
            </Jumbotron>
        </div>;
    }
}
