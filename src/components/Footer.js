import React from 'react'
import {Link} from 'react-router-dom';
import image from '../assets/logo.png';

export default function Footer() {
  return (
    <div className="container-fluid" style={{background: "#303030", color: "#fff"}}>
      <footer className="page-footer font-small unique-color-dark">
        <div className="container text-center text-md-left mt-5 mx-auto">
          <div className="row mt-3 mx-auto">
            <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mb-4 px-3">
              <h6 className="text-uppercase font-weight-bold">
                <img src={image} width="150px" alt="..." />
              </h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
              {/* <p>
                <img src={google} className="mx-auto" width="150px" alt="google" />
              </p> */}
            </div>
            <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mb-4 px-3">
              <h6 className="text-uppercase font-weight-bold pb-3" style={{color: "#fff"}}>Տեղեկատվություն</h6>
              <p>
                <Link to="/about" style={{color: "#fff"}}>Մեր մասին</Link>
              </p>
              <p>
                <Link to="/contact" style={{color: "#fff"}}>Կոնտակտներ</Link>
              </p>
              <p>
                <Link to="/privacy" style={{color: "#fff"}}>Գաղտնիություն</Link>
              </p>
              <p>
                <Link to="#!" style={{color: "#fff"}}>FAQ</Link>
              </p>
            </div>
            <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mb-4 px-3">
              <h6 className="text-uppercase font-weight-bold pb-3" style={{color: "#fff"}}>Գործընկերներին</h6>
              <p>
                <Link to="/partners" style={{color: "#fff"}}>Համագործակցություն</Link>
              </p>
              <p>
                <Link to="#!" style={{color: "#fff"}}>Գործընկերներին</Link>
              </p>
            </div>
            <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 px-3">
              <h6 className="text-uppercase font-weight-bold pb-3" style={{color: "#fff"}}>Կապ</h6>
              <p>
                <i className="fa fa-home" style={{color: "#fff"}}></i> Yerevan/Armenia, 0087 AM</p>
              <p>
                <i className="fa fa-envelope" style={{color: "#fff"}}></i> onlineprinting@gmail.com</p>
              <p>
                <i className="fa fa-phone" style={{color: "#fff"}}></i> +374(44)-44-44-44</p>
              <p>
                <i className="fa fa-link"></i> <Link to="/contact" style={{color: "#fff"}}>www.onlineprinting.am/contact </Link></p>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center pb-3">
          <i className="fa fa-facebook p-3" style={{color: "var(--mainGreen)", fontSize: "20px"}}></i>
          <i className="fa fa-instagram p-3" style={{color: "var(--mainGreen)", fontSize: "20px"}}></i>
          <i className="fa fa-telegram p-3" style={{color: "var(--mainGreen)", fontSize: "20px"}}></i>
          <i className="fa fa-google p-3" style={{color: "var(--mainGreen)", fontSize: "20px"}}></i>
          <i className="fa fa-vk p-3" style={{color: "var(--mainGreen)", fontSize: "20px"}}></i>
        </div>
        <div className="footer-copyright text-center py-3">© 2020 Copyright:
          <a href="https://hrachgalstyan.com" target="_blank" rel="noopener noreferrer" style={{color: "#fff"}}> www.hrachgalstyan.com</a>
        </div>
      </footer>
    </div>
  )
}
