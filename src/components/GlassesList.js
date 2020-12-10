import React, { Component } from "react";
import GlassesItem from "./GlassesItem";
class GlassesList extends Component {
  handleChange = (id) => {
    console.log(id);
  };
  render() {
    return (
      <div className=" container row glasses-list__box">
        {this.props.productList.map((item) => {
          return (
            <div className="col-2" key={item.id}>
              <div
                className="glasses-list__item"
                onClick={() => this.props.onTry(item.id)}
              >
                <GlassesItem url={item.url} />
              </div>
            </div>
          );
        })}

      </div>
    );
  }
}

export default GlassesList;
