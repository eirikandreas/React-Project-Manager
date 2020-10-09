import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const NavBar = () => {


    return (
            <Navbar bg="white" className="justify-content-between">
                <Navbar.Brand href="#home">Project Manager</Navbar.Brand>
                <Nav>
                    <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
                    <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                    <Nav.Link as={Link} to="/clients">Clients</Nav.Link>
                    <Nav.Link as={Link} to="/employees">Employees</Nav.Link>
                </Nav>
            </Navbar>
    )
}

export default NavBar;