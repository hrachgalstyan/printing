import React from 'react';
import Form from '../components/Contact/Form';

export default function Contact() {
  return (
    <div className="container-fluid text-center bg-white">
        <h3 className="heading-secondary p-3 mt-3 text-center" style={{color: "#5FB7EA"}}>Կապ մեզ հետ</h3>
        <div className="col-lg-6 col-md-6 col-sm-8 col-12 mx-auto mb-3">
          Խնդրում ենք թողնել կարճ հաղորդագրություն և մենք հնարավորինս արագ կկապնվենք Ձեզ հետ:
        </div>
        <div className="row w-100 d-flex justify-content-center mx-auto pb-4" id="myDIV">
          <Form />
        </div>
    </div>
  )
}
