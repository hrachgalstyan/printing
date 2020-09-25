import React from 'react'
import {GiHealing} from 'react-icons/gi';
import {GiReceiveMoney} from 'react-icons/gi';
import {BsCheckCircle} from 'react-icons/bs';

export default function Services() {
  const services = [
    {
      icon: <GiHealing />,
      title: "Որակը",
      description: "Լավագույն գին/որակ հարաբերակցություն։",
      bg: "#ff4d4d"
    },
    {
      icon: <BsCheckCircle />,
      title: "Բարի համբավը",
      description: "Մենք սիրում ենք մեր գործը:",
      bg: "#fd79a8"
    },
    {
      icon: <GiReceiveMoney />,
      title: "Ճկունությունը",
      description: "Անհատական մոտեցում մեր գործընկերներին:",
      bg: "#ffb8b8"
    }
  ]
  return (
    <div className="container-fluid text-center mx-auto">
      <div className="row text-center mt-3">
        {services.map((item, index) => {
          return(
            <div key={index} className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 d-flex align-items-center" style={{background: `${item.bg}`, height: "100px"}}>
              <p className="py-3 m-auto font-weight-bold" style={{color: "white", fontSize: "14px"}}>{item.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}