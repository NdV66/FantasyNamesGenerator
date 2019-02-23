import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {PropTypes} from 'prop-types';
import LANG from '../assets/en.json';

const URL_CONTAINER_CSS_CLASSES = 'mt-2 font-weight-normal';

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
    <div className={URL_CONTAINER_CSS_CLASSES}>
        <a target='_blank' rel='noopener noreferrer' href={props.href}>{props.linkName}</a>
    </div>
</div>;

TextFooterElementBody.propTypes = {
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    linkName: PropTypes.string.isRequired,
};

const aboutBody = <TextFooterElementBody
    href={LANG.ABOUT_URL}
    linkName={LANG.ABOUT_LINK}
    text={LANG.ABOUT_TEXT}
/>;

const myGithubBody = <TextFooterElementBody
    href={LANG.MY_GITUB_URL}
    linkName={LANG.MY_GITHUB_LINK}
    text={LANG.MY_GITHUB_TEXT}
/>;

const otherProjectBodyHrefCssClasses = 'd-block';
const otherProjectBody = <div className={URL_CONTAINER_CSS_CLASSES}>
    <a target='_blank' rel='noopener noreferrer' href={LANG.OTHER_PROJECT_URL_1} className={otherProjectBodyHrefCssClasses}>{LANG.OTHER_PROJECT_LINK_1}</a>
    <a target='_blank' rel='noopener noreferrer' href={LANG.OTHER_PROJECT_URL_2} className={otherProjectBodyHrefCssClasses}>{LANG.OTHER_PROJECT_LINK_2}</a>
</div>;

export const FooterPage = () => <Container fluid>
    <Row className='footer pt-3 pb-2 font-weight-normal'>
        <FooterElementContainer
            icon='grin-beam'
            header={LANG.ABOUT}
            body={aboutBody}
        />
        <FooterElementContainer
            icon='code-branch'
            header={LANG.MY_GITHUB}
            body={myGithubBody}
        />
        <FooterElementContainer
            icon='campground'
            header={LANG.OTHER_PROJECTS}
            body={otherProjectBody}
        />
    </Row>
</Container>;
