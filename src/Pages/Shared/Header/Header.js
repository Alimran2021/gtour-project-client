import React from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar className="py-4" bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"><img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandtour/demo2/wp-content/themes/grandtour/images/logo@2x_white.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="#home/services">Service</Nav.Link>
                            <Nav.Link as={Link} to="/myOrders">My Orders</Nav.Link>
                            <Nav.Link as={Link} to="/manage">Manage All Orders</Nav.Link>
                            <Nav.Link as={Link} to="/newService">Add New Service</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Navbar.Collapse className="justify-content-end">
                                <Navbar.Text>
                                    Signed in as: <a href="#login">Mark Otto</a>
                                </Navbar.Text>
                            </Navbar.Collapse>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;