import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/" style={{ margin: "10px", fontSize: "28px" }}>
          MK
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"> </Nav>
          <Nav>
            <Nav.Link
              href="/connect"
              style={{
                fontSize: "18px",
                paddingRight: "20px",
                paddingLeft: "20px",
              }}
            >
              Portfolio
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
