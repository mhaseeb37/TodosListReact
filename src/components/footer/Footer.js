import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import './Footer.css'
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='mainFooter'>
        <Container className='FooterTop'>
            <Row>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
            </Row>
        </Container>
        <Container className='FooterBottom'>
            <Row>
                <Col>
                    <p className='text-center'>&copy;2023 | Powered by <Link to='/'>TodosList.com</Link></p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}
