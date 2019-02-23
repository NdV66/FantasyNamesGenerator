import React from 'react';
import {Col, Input, Row, Button, Container} from 'reactstrap';
import {PropTypes} from 'prop-types';
import Actions from '../actionNames.json';
import { connect } from 'react-redux';

const mapStateToProps = ({getNameReducer}) => ({
    generatedName: getNameReducer.generatedName,
});

const mapDispatchToProps = (dispatch) => ({
    onClickGetName: () => dispatch({ type: Actions.ON_CLICK_GET_NAME }),
});

class NameGeneratorPage extends React.Component {
    render() {
        const {generatedName, onClickGetName} = this.props;

        return <Container fluid id='generator-page'>
            <Row className='bg-dark pb-3 pt-4'>
                <Col md='12' className=''>
                    <Col md='6' sm='12' className='offset-md-3 text-center'>
                        <h3>Your character name is...</h3>
                        <Input
                            type='text'
                            name='name'
                            id='name'
                            placeholder='name will be here'
                            className='mb-3 mt-3'
                            value={generatedName}
                        />
                        <Button onClick={onClickGetName}>Get name!</Button>
                    </Col>
                </Col>
            </Row>
        </Container>;
    }
}

NameGeneratorPage.propTypes = {
    generatedName: PropTypes.string,
    onClickGetName: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(NameGeneratorPage);
