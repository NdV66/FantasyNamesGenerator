import React from 'react';
import {Col, Form, FormGroup, Input, Row, Button} from 'reactstrap';

export const NameGeneratorPage = () => <Row className='bg-dark pt-4 pb-3'>
    <Col md='12' className='triangle-up-dark'>
        <Col md='6' className='offset-3 text-center'>
            <Form>
                <FormGroup>
                    <Input type='text' name='name' id='name' placeholder='name will be here' />
                </FormGroup>
                <Button>Get name!</Button>
            </Form>
        </Col>
    </Col>
</Row>;