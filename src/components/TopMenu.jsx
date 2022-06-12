import React from "react";
import { Container,  Navbar, Nav, Button } from 'react-bootstrap';
import userLoginService from "../services/UserLoginService";
import { Link } from "react-router-dom";

// import { Form, Modal, Button } from 'react-bootstrap';

// import { Link }  from "react-router-dom";
// import { Button } from 'react-bootstrap';
// import Button from "@mui/material/Button";

const TopMenu = () => {

    {/*
      const [show, setShow] = React.useState(false);
      const handleClose = () => {setShow(false)};
      const handleShow = () => {setShow(true)};
    */}

    return ( <div>
        <Navbar collapseOnSelect expand="lg" bg="" variant="light" className='Navbar' fixed="top">
          <Container>
          <Navbar.Brand text-size="18" href="/"><h3>bookFlight</h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">Home</Link>
              <Nav.Link href="/not-found">My Bookings</Nav.Link>
              <Nav.Link href="/not-found">Flights</Nav.Link>
            </Nav>

            {!userLoginService.isLoggedIn() ? (
              <>
                <Nav>
                  <Link to="/user-data">My Account</Link>
                </Nav>
                <Nav>
                  <Link to="/login">Login</Link>
                </Nav>
              </>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={(e) => {
                  userLoginService.logout();
                  window.location.reload();
                }}
              >
                LogOut
              </Button>
            )}

            <Nav>
              <Nav.Link href="/contact-us">Help</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </div> );
}
 
export default TopMenu;