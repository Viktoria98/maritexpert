import React, { Component } from 'react';
import {  Nav, Navbar, NavItem } from 'react-bootstrap';
import './bootstrap.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
    return(
          <Navbar>
            <Navbar.Brand>
              <Link to="/">Home</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav navbar>
              <Link to="/login/">Login</Link>
              <Link to="/characters/">Characters</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
       
    );
  }
}


export default App;