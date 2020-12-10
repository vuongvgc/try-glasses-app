import React, { Component } from "react";

class GlassesDetail extends Component {
  render() {
    return (
      <div className="detail__box">
        <h4>{this.props.name}</h4>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}

export default GlassesDetail;
