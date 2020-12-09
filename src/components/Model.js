import React, { Component } from "react";
import GlassesItem from "./GlassesItem";
import GlassesDetail from "./GlassesDetail";
class Model extends Component {
  render() {
    return (
      <div>
        <GlassesItem />
        <GlassesDetail />
      </div>
    );
  }
}
export default Model;
