import React, { Component } from "react";
import Header from "./Header";
import Model from "./Model";
import GlassesList from "./GlassesList";
class GlassesApp extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Model />
        <GlassesList />
      </div>
    );
  }
}

export default GlassesApp;
