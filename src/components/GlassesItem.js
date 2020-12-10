import React, { Component } from "react";

class GlassesItem extends Component {
  render() {
    return (
      <div>
        <img className="img-fluid" src={this.props.url} alt="glasses" />
      </div>
    );
  }
}

export default GlassesItem;
