import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {PropTypes} from 'prop-types';

const FontAwesomeIconWrapper = (props) => <FontAwesomeIcon icon={props.icon} className='fa-footer mb-2' />;

FontAwesomeIconWrapper.propTypes = {
    icon: PropTypes.string.isRequired,
};

const FooterElementContainer = (props) => <Col>
    <Col sm='12' className='text-center'>
        <FontAwesomeIconWrapper icon={props.icon} />
    </Col>
    <Col sm='12'>
        <h5>{props.header}</h5>
    </Col>
    <Col sm='12'>
        {props.body}
    </Col>
</Col>;

FooterElementContainer.propTypes = {
    icon: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    body: PropTypes.element,
};

const TextFooterElementBody = (props) => <div className='text-justify'>
    {props.text}
    <div className='mt-2 font-weight-normal'>
        <a href={props.href}>{props.linkName}</a>
    </div>
</div>;

TextFooterElementBody.propTypes = {
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    linkName: PropTypes.string.isRequired,
};

const aboutBody = <TextFooterElementBody
    href='#'
    linkName='See my site'
    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis orci sit amet nulla volutpat consequat. Suspendisse blandit purus quam.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis orci sit amet nulla volutpat consequat. Suspendisse blandit purus quam.'
/>;

const myGithubBody = <TextFooterElementBody
    href='https://github.com/NdV66'
    linkName='See my Github'
    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis orci sit amet nulla volutpat consequat. Suspendisse blandit purus quam.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis orci sit amet nulla volutpat consequat. Suspendisse blandit purus quam.'
/>;

export const FooterPage = () => <Container fluid>
    <Row className='footer pt-3 pb-2 font-weight-normal'>
        <FooterElementContainer
            icon='grin-beam'
            header='About'
            body={aboutBody}
        />
        <FooterElementContainer
            icon='code-branch'
            header='My Github'
            body={myGithubBody}
        />
        <FooterElementContainer
            icon='campground'
            header='Other projects'
        />
    </Row>
</Container>;
