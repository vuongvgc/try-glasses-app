import React, { Component } from "react";
import Header from "./Header";
import Model from "./Model";
import GlassesList from "./GlassesList";
import "../app.css";
class GlassesApp extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Model />
        <GlassesList />
      </div>
    );
  }
}

export default GlassesApp;
