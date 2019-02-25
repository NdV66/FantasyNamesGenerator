import React from 'react';
import {Col, Input, Row, Button, Container} from 'reactstrap';
import {PropTypes} from 'prop-types';
import { connect } from 'react-redux';
import {mapDispatchToProps} from '../reduxUtils/mapDispatchToProps';
import {mapStateToProps} from '../reduxUtils/mapStateToProps';
import LANG from '../assets/en.json';

class NameGeneratorPage extends React.Component {
    render() {
        const {generatedName, onClickGetName, handleChange} = this.props;

        return <Container fluid id='generator-page'>
            <Row className='bg-dark pb-3 pt-4'>
                <Col md='12' className=''>
                    <Col md='6' sm='12' className='offset-md-3 text-center'>
                        <h3>{LANG.NAME_LABEL}</h3>
                        <Input
                            type='text'
                            name='name'
                            id='name'
                            placeholder={LANG.NAME_INPUT_PLACEHOLDER}
                            className='mb-3 mt-3'
                            value={generatedName}
                            onChange={handleChange}
                        />
                        <Button onClick={onClickGetName}>{LANG.GET_NAME}</Button>
                    </Col>
                </Col>
            </Row>
        </Container>;
    }
}

NameGeneratorPage.propTypes = {
    generatedName: PropTypes.string,
    onClickGetName: PropTypes.func,
    handleChange: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(NameGeneratorPage);
