import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {FaAlignRight} from 'react-icons/fa';
import image from '../assets/logo.png';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavbarText } from 'reactstrap';

const Example = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="container-fluid p-0">
      <Navbar color="faded" className="d-flex" style={{background: "#303030"}} expand="lg" light>
        <Link className="navbar-brand d-flex align-items-center justify-content-center ml-lg-5 ml-3" to="/">
          <img src={image} height="70px" alt="Recipes.am" />
          <span className="font-weight-bold" style={{color: "#5fb7ea", fontSize: "30px"}}>Logo</span>
        </Link>
        <NavbarToggler onClick={toggleNavbar} style={{border: "none"}}>
          <span className="pr-3" style={{color: "#fff"}}>Menu</span>
          <FaAlignRight style={{fontSize: "32px", color: "#fff"}} className="mr-lg-5 mr-3" />
        </NavbarToggler>
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <Link className="nav-link text-center px-3" to="/" style={{fontSize: "16px", color: "#fff"}}>Գլխավոր</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link text-center px-3" to="/services" style={{fontSize: "16px", color: "#fff"}}>Ծառայություններ</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link text-center px-3" to="/about" style={{fontSize: "16px", color: "#fff"}}>Մեր մասին</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link text-center px-3" to="/contact" style={{fontSize: "16px", color: "#fff"}}>Կապ</Link>
            </NavItem>
            <NavItem className="d-block d-lg-none">
              <a className="nav-link text-center px-3 py-2 mx-auto" href="tel:+37444151415" style={{background: "#5FB7EA", borderRadius: "28px", color: "#fff", fontSize: "14px"}}>+374-44-00-00-00</a>
            </NavItem>
            <NavItem className="d-flex d-lg-none justify-content-center my-3">
              <i className="px-3 fa fa-facebook" style={{fontSize: "24px", color: "#3b5999"}} aria-hidden="true"></i>
              <i className="px-3 fa fa-instagram" style={{fontSize: "24px", color: "#e4405f"}} aria-hidden="true"></i>
              <i className="px-3 fa fa-whatsapp" style={{fontSize: "24px", color: "#25D366"}} aria-hidden="true"></i>
              <i className="px-3 fa fa-google" style={{fontSize: "24px", color: "#dd4b39"}} aria-hidden="true"></i>
            </NavItem>
          </Nav>
          <NavbarText className="px-3 p-2 d-none d-lg-flex mr-lg-5 mr-3" style={{background: "#5FB7EA", borderRadius: "28px", color: "#fff", fontSize: "14px"}}><a href="tel:+37444151415" style={{color: "#fff"}}>+374(44)-00-00-00</a></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;