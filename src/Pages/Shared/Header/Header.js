import React from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth/useAuth';
import './header.css'

const Header = () => {
    const { user, logOut } = useAuth()
    const logOutHandler = () => {
        logOut()
    }
    return (
        <div className="sticky top-0 z-10">
            <div >
                <Navbar className="py-2 px-12" bg="dark" variant="dark" expand="lg">
                    <Container fluid>
                        <Navbar.Brand className="w-32" href="#"><img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandtour/demo2/wp-content/themes/grandtour/images/logo@2x_white.png" alt="" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={HashLink} to="#home/services">Service</Nav.Link>
                                {user?.email &&
                                    <Nav.Link as={Link} to="/myOrders">My Orders</Nav.Link>
                                }
                                {user?.email &&
                                    <Nav.Link as={Link} to="/manage">Manage All Orders</Nav.Link>
                                }
                                {user?.email &&
                                    <Nav.Link as={Link} to="/newService">Add New Service</Nav.Link>
                                }
                            </Nav>
                            <Form className="d-flex">
                                <Navbar.Collapse className="justify-content-end">
                                    <Navbar.Text>
                                        {user?.email && <div className="flex items-center"><span className="text-red-600 block">{user?.displayName}</span>
                                            <img className="ml-2 w-10 h-10 rounded-full" src={user?.photoURL} alt="" /></div>}
                                    </Navbar.Text>
                                </Navbar.Collapse>
                                {!user?.email ?
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                    :
                                    <Nav.Link onClick={logOutHandler}><i className="text-red-600 logOut fas fa-sign-out-alt"></i></Nav.Link>
                                }
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;