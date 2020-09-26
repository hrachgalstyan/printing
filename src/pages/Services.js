import React, { Component } from 'react';
import {products} from "../components/Services/products";
import { Card } from 'antd';

const { Meta } = Card;

export default class Services extends Component {
  state={
    value: "All",
    products: products,
    filterProducts: products
  }

  future = () => {
    console.log(this.state.value);
    if(this.state.value === "All"){
      this.setState({filterProducts: products});
    } else {
      this.setState({filterProducts: products.filter(item => item.categories === this.state.value)})
    }
  }

  click = async (event) => {
    await this.setState({value: event.target.value});
    this.future();
  };

  render() {
    return (
      <div className="container-fluid text-center bg-white">
        <h3 className="heading-secondary p-3 mt-3 text-center" style={{color: "#5FB7EA"}}>Մենք Ձեզ առաջարկում ենք</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis nec fringilla nibh pellentesque finibus</p>
        <div className="row w-100 d-flex justify-content-center mx-auto pb-4" id="myDIV">
          <button onClick={this.click} className={this.state.value === "All" ? "py-2 px-3 mx-2 categories-btn my-2 active" : "py-2 px-3 mx-2 categories-btn my-2"} style={{background: "#fff", fontSize: "15px", color: "#000", borderRadius: "7px", border: '0.5px solid rgba(0, 0, 0, 0.1'}} value="All" id="all">
            All
          </button>
          <button onClick={this.click} className={this.state.value === "Business" ? "py-2 px-3 mx-2 categories-btn my-2 active" : "py-2 px-3 mx-2 categories-btn my-2"} style={{background: "#fff", fontSize: "15px", color: "#000", borderRadius: "7px", border: '0.5px solid rgba(0, 0, 0, 0.1'}} value="Business">
            Business Cards
          </button>
          <button onClick={this.click} className={this.state.value === "Calendars" ? "py-2 px-3 mx-2 categories-btn my-2 active" : "py-2 px-3 mx-2 categories-btn my-2"} style={{background: "#fff", fontSize: "15px", color: "#000", borderRadius: "7px", border: '0.5px solid rgba(0, 0, 0, 0.1'}} value="Calendars">
            Calendars
          </button>
          <button onClick={this.click} className={this.state.value === "Cataloge" ? "py-2 px-3 mx-2 categories-btn my-2 active" : "py-2 px-3 mx-2 categories-btn my-2"} style={{background: "#fff", fontSize: "15px", color: "#000", borderRadius: "7px", border: '0.5px solid rgba(0, 0, 0, 0.1'}} value="Cataloge">
            Cataloge
          </button>
          <button onClick={this.click} className={this.state.value === "Decoration" ? "py-2 px-3 mx-2 categories-btn my-2 active" : "py-2 px-3 mx-2 categories-btn my-2"} style={{background: "#fff", fontSize: "15px", color: "#000", borderRadius: "7px", border: '0.5px solid rgba(0, 0, 0, 0.1'}} value="Decoration">
            Decoration
          </button>
          <button onClick={this.click} className={this.state.value === "Invitations" ? "py-2 px-3 mx-2 categories-btn my-2 active" : "py-2 px-3 mx-2 categories-btn my-2"} style={{background: "#fff", fontSize: "15px", color: "#000", borderRadius: "7px", border: '0.5px solid rgba(0, 0, 0, 0.1'}} value="Invitations">
            Invitations
          </button>
        </div>
        <div className="container d-flex flex-wrap pb-5">
          {this.state.filterProducts && this.state.filterProducts.map((product) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-3 mt-lg-4" key={product.id}>
                <Card
                  hoverable
                  cover={<img alt="example" src={product.image} />}
                >
                  <Meta title={product.name} description={product.meta} />
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
