import React from 'react';

const Examples = () => {
  return (
    <>
    <div className="container-fluid py-0 mt-5">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 col-12 img-1">
          {/* <img src={image1} height="98.23%" width="100%" className="img-1 p-0 m-0" alt="ticket-1" /> */}
          <div className="overlay-1 d-flex justify-content-center align-items-center">
            <span className="font-weight-bold" style={{color: "#fff", fontSize: "26px"}}>Փաթեթավորում</span>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
          <div className="row p-0 img-2">
            {/* <img src={image2} className="img-fluid img-2" alt="ticket-2" /> */}
            <div className="overlay-2 d-flex justify-content-center align-items-center">
              <span className="font-weight-bold" style={{color: "#fff", fontSize: "26px"}}>Հրավիրատոմսեր</span>
            </div>
          </div>
          <div className="row justify-content-around">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-0 img-3">
              {/* <img src={image3} className="img-fluid img-3" alt="ticket-3" /> */}
              <div className="overlay-3 d-flex justify-content-center align-items-center">
                <span className="font-weight-bold" style={{color: "#fff", fontSize: "26px"}}>Պաստառներ</span>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-0 img-4">
              {/* <img src={image4} className="img-fluid img-4" alt="ticket-4" /> */}
              <div className="overlay-4 d-flex justify-content-center align-items-center">
                <span className="font-weight-bold" style={{color: "#fff", fontSize: "26px"}}>Տոպրակներ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
          <div className="row p-0 img-2">
            {/* <img src={image2} className="img-fluid img-2" alt="ticket-2" /> */}
            <div className="overlay-2 d-flex justify-content-center align-items-center">
              <span className="font-weight-bold" style={{color: "#fff", fontSize: "26px"}}>Հրավիրատոմսեր</span>
            </div>
          </div>
          <div className="row justify-content-around">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-0 img-3">
              {/* <img src={image3} className="img-fluid img-3" alt="ticket-3" /> */}
              <div className="overlay-3 d-flex justify-content-center align-items-center">
                <span className="font-weight-bold" style={{color: "#fff", fontSize: "26px"}}>Պաստառներ</span>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-0 img-4">
              {/* <img src={image4} className="img-fluid img-4" alt="ticket-4" /> */}
              <div className="overlay-4 d-flex justify-content-center align-items-center">
                <span className="font-weight-bold" style={{color: "#fff", fontSize: "26px"}}>Տոպրակներ</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-12 img-1">
          {/* <img src={image1} height="98.23%" width="100%" className="img-1 p-0 m-0" alt="ticket-1" /> */}
          <div className="overlay-1 d-flex justify-content-center align-items-center">
            <span className="font-weight-bold" style={{color: "#fff", fontSize: "26px"}}>Փաթեթավորում</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Examples;
