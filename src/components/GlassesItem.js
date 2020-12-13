import React, { Component } from "react";

class GlassesItem extends Component {
  render() {
    if (this.props.url) {
      return (
        <div>
          <img className="img-fluid" src={this.props.url} alt="glasses" />
        </div>
      );
    } else {
      return "";
    }
  }
}

export default GlassesItem;
