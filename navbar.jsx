import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Navigationbar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.toLowerCase() === 'indonesia') {
      window.location.href = '/indonesia'; // Redirect to the '/indonesia' page
    } else if (searchQuery.toLowerCase() === 'brazil') {
      window.location.href = '/brazil'; // Redirect to the '/brazil' page
    } else if (searchQuery.toLowerCase() === 'dubai') {
      window.location.href = '/dubai'; // Redirect to the '/brazil' page
    } else if (searchQuery.toLowerCase() === 'california') {
      window.location.href = '/california'; // Redirect to the '/brazil' page
    } else if (searchQuery.toLowerCase() === 'shenzhen') {
      window.location.href = '/shenzhen'; // Redirect to the '/brazil' page
    } else if (searchQuery.toLowerCase() === 'singapore') {
      window.location.href = '/singapore'; // Redirect to the '/brazil' page
    } else {
      // Perform regular search functionality
      console.log('Perform search for:', searchQuery);
    }
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Navbar expand="lg" className="bg-light">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <div className="logo-container">
            <img
              alt=""
              src="/logo.jpg"
              width="80"
              height="80"
              className="d-inline-block align-top"
            />
          </div>
          <span className="explora-text">ExploraPals</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About us</Nav.Link>
            <Nav.Link href="/destinations">Destinations</Nav.Link>
            <NavDropdown title="Continents" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Europe</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Asia</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Africa</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">North America</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">South America</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Oceania</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.7">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex" onSubmit={handleFormSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
