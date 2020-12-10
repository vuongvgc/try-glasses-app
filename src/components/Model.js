import React, { Component } from "react";
import GlassesItem from "./GlassesItem";
import GlassesDetail from "./GlassesDetail";
import ModelImage from "../image/model.jpg";
class Model extends Component {
  render() {
    const { name, url, desc } = this.props.glassTry;
    return (
      <div className="col-2 mx-auto my-4 model__box">
        <img className="img-fluid" src={ModelImage} alt="model" />
        <div className="glasses__item">
          <GlassesItem url={url} />
        </div>
        <div className="glasses__detail">
          <GlassesDetail name={name} desc={desc} />
        </div>
      </div>
    );
  }
}
export default Model;
