import React from 'react';
import {Col, Form, FormGroup, Input, Row, Button} from 'reactstrap';

export const NameGeneratorPage = () => <Row className='bg-dark pb-3 pt-4'>
    <Col md='12' className=''>
        <Col md='6' sm='12' className='offset-md-3 text-center'>
            <h3>Your character name is...</h3>
            <Input type='text' name='name' id='name' placeholder='name will be here' className='mb-3 mt-3'/>
            <Button>Get name!</Button>
        </Col>
    </Col>
</Row>;