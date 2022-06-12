import React from "react";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Admin = () => {
    return ( <div className="">
        <Navbar collapseOnSelect expand="lg" bg="" variant="light" className='Admin'>
          <Container className="AdminNavbar">
          <Navbar.Brand text-size="" href="/"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/flights"><Button variant="success">Manage Flights</Button></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/users"><Button variant="success">Manage Users</Button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
    </div> );
}
 
export default Admin;