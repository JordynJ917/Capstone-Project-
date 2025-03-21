import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown' 
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useCart } from '../context/CartContext';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css'
import LoginForm from './LoginForm';

const NavBar = () => {
  const  {cart}  = useCart();
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <Navbar expand="xxl" className="">
        <Container className="px-4 px-lg-5 ">
          <Navbar.Brand href="/" style={{ fontFamily: "'Playwrite AU SA', serif", color: 'white'}}>
            Nailed It!
          </Navbar.Brand>
          <LoginForm/>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto ms-lg-4">
              <Nav.Link href="/" className="text-light">Home</Nav.Link>
              <NavDropdown title="Shop" id="navbarDropdown">
                <NavDropdown.Item> <Link to="/favorites" className="navbar-link">Favorites</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item> <Link to="/PopularPage" className="navbar-link">Popular</Link></NavDropdown.Item>
                <NavDropdown.Item> <Link to="/SalePage" className="navbar-link">Sale</Link></NavDropdown.Item>
              </NavDropdown>
            </Nav>

          {/* Cart Button */}
          <>
            <NavLink className="cart-link" to="/CartPage">
            <Button variant="outline-light" className="d-flex align-items-center" >
              <i className='bi-cart-fill me-1'></i>
              Cart{" "}
              <Badge className="ms-1 rounded-pill">{cartCount}</Badge>
            </Button>
            </NavLink>
            </>
          </Navbar.Collapse>
        </Container>
      </Navbar>    
  );
};

export default NavBar;