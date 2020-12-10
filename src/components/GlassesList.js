import React, { Component } from "react";
import GlassesItem from "./GlassesItem";
class GlassesList extends Component {
  render() {
    return (
      <div className=" container row glasses-list__box">
        <div className="col-2">
          <div className="glasses-list__item ">
            <GlassesItem />
          </div>
        </div>
        <div className="col-2">
          <div className="glasses-list__item ">
            <GlassesItem />
          </div>
        </div>
        <div className="col-2">
          <div className="glasses-list__item ">
            <GlassesItem />
          </div>
        </div>
        <div className="col-2">
          <div className="glasses-list__item ">
            <GlassesItem />
          </div>
        </div>
        <div className="col-2">
          <div className="glasses-list__item ">
            <GlassesItem />
          </div>
        </div>
        <div className="col-2">
          <div className="glasses-list__item ">
            <GlassesItem />
          </div>
        </div>
        <div className="col-2">
          <div className="glasses-list__item ">
            <GlassesItem />
          </div>
        </div>
        <div className="col-2">
          <div className="glasses-list__item ">
            <GlassesItem />
          </div>
        </div>
      </div>
    );
  }
}

export default GlassesList;
