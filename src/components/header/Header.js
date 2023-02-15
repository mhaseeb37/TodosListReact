import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Header = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
            <Link to='/'>{props.title}</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/about">Link</Link>
          </Nav>
        </Navbar.Collapse>
        { props.searchBar && <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>}
      </Container>
    </Navbar>
  )
}
