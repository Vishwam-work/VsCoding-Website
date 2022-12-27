import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from 'D:/VISHWAM PROGRAM/react/Crash Course/Vscoding-Website/website/src/images/logo.png'
import Nav from 'react-bootstrap/Nav';
function BrandExample(){
    return (
<>
      <br />
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            VS CODING
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About Me</Nav.Link>
            <Nav.Link href="#pricing">Videos</Nav.Link>
          </Nav>
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    );
};

export default BrandExample;