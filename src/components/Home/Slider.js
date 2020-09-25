import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import image from '../../assets/printing.svg';

export default function Slider() {
  return (
    <Wrapper className="mx-5 mb-5">
      <div className="row d-flex justify-content-center flex-wrap-reverse">
        <div className="col-lg-6 col-md-6 col-sm-10 col-10 d-flex justify-content-start align-items-center mx-auto">
          <p className="font-weight-light slider-text text-center text-md-left m-auto" style={{color: "#000"}}>
            Մենք տալիս ենք <br />
            <span className="font-weight-bold" style={{color: "#5fb7ea"}}>Ձեր խնդրի</span> տպագրության 
            <br /> լավագույն <span className="font-weight-bold" style={{color: "#5fb7ea"}}>լուծումներ</span>
            <br />
            <Link to="/services" className="btn--green mt-md-3 mt-2 slider-btn">
              Ավելին
            </Link>
          </p>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-10 col-10 d-flex justify-content-center align-items-center mx-auto">
          <img src={image} className="img-fluid" width="100%" height="500px" alt="Cook..." />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  @media screen and (max-width: 1103px){
    .display-3{
      font-size: 40px !important;
    }
  }
  @media screen and (max-width: 600px){
    .display-3{
      font-size: 30px !important;
    }
  }
`