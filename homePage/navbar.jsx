import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

function Navigationbar() {
  const [searchQuery, setSearchQuery] = useState('');

  const [allCountries, setAllCountries] = useState([
    'Indonesia',
    'Brazil',
    'USA',
    'China',
    'Singapore'
  ]);

  const [filteredCountries, setFilteredCountries] = useState(allCountries);
  const searchFunction = (event) => {
    event.preventDefault();
    const selectedCountry = filteredCountries.find(country =>
      country.toLowerCase() === searchQuery.toLowerCase() //checks input to see if country exist
    );
    if (selectedCountry) {
      window.location.href = `/${selectedCountry.toLowerCase()}`; //open selected country pgae
    } else {
      alert('Country does not exist.'); //alert if country doesn't exist
    }
  };

  const filtersCountry = (event) => {
    const inputValue = event.target.value;
    setSearchQuery(inputValue);
    const filtered = allCountries.filter(country => //filter's country in array
      country.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredCountries(filtered);
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

          </Nav>
          <Form className="d-flex" onSubmit={searchFunction}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={filtersCountry}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
