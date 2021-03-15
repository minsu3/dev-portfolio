import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/" style={{ fontSize: "28px" }}>
          MK
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="pull-right">
            <Nav.Link
              href="/about"
              style={{
                fontSize: "18px",
                paddingRight: "20px",
                paddingLeft: "20px",
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="/projects"
              style={{
                fontSize: "18px",
                paddingRight: "20px",
                paddingLeft: "20px",
              }}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="/connect"
              style={{
                fontSize: "18px",
                paddingRight: "20px",
                paddingLeft: "20px",
              }}
            >
              Connect
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
