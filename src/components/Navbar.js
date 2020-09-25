import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {FaAlignRight} from 'react-icons/fa';
import image from '../assets/logo.png';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavbarText } from 'reactstrap';

const Example = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="container-fluid">
      <Navbar color="faded" className="d-flex fixed-top" style={{background: "#303030"}} expand="lg" light>
        <Link className="navbar-brand d-flex align-items-center justify-content-center ml-lg-5 ml-3" to="/">
          <img src={image} height="70px" alt="Recipes.am" />
          <span className="font-weight-bold" style={{color: "#5fb7ea", fontSize: "30px"}}>Name</span>
        </Link>
        <NavbarToggler onClick={toggleNavbar}>
          <span className="pr-3" style={{color: "#fff"}}>Menu</span>
          <FaAlignRight style={{fontSize: "32px", color: "#fff"}} className="mr-lg-5 mr-3" />
        </NavbarToggler>
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <Link className="nav-link text-center px-3" to="/about" style={{fontSize: "18px", color: "#fff"}} onClick={toggleNavbar}>Մեր մասին</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link text-center px-3" to="/services" style={{fontSize: "18px", color: "#fff"}} onClick={toggleNavbar}>Ծառայություններ</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link text-center px-3" to="/contact" style={{fontSize: "18px", color: "#fff"}} onClick={toggleNavbar}>Կապ</Link>
            </NavItem>
            <NavItem className="d-block d-lg-none">
              <Link className="nav-link text-center px-3 py-2 mx-auto" to="/contact" style={{background: "#D9B290", borderRadius: "28px", width: "170px", color: "#fff"}}>+374-44-44-44-44</Link>
            </NavItem>
            <NavItem className="d-flex d-lg-none justify-content-center my-3">
              <i className="px-3 fa fa-facebook" style={{fontSize: "24px", color: "#3b5999"}} aria-hidden="true"></i>
              <i className="px-3 fa fa-instagram" style={{fontSize: "24px", color: "#e4405f"}} aria-hidden="true"></i>
              <i className="px-3 fa fa-whatsapp" style={{fontSize: "24px", color: "#25D366"}} aria-hidden="true"></i>
              <i className="px-3 fa fa-google" style={{fontSize: "24px", color: "#dd4b39"}} aria-hidden="true"></i>
            </NavItem>
          </Nav>
          <NavbarText className="px-3 py-2 d-none d-lg-block mr-lg-5 mr-3" style={{background: "#D9B290", borderRadius: "28px", color: "#fff"}}>+374-44-44-44-44</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;