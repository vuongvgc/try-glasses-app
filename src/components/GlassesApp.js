import React, { Component } from "react";
import Header from "./Header";
import Model from "./Model";
import GlassesList from "./GlassesList";
import "../app.css";
class GlassesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      glassTry: {},
    };
  }
  handleTry = (id) => {
    // console.log(id);
    let index = this.props.data.findIndex((item) => item.id === id);
    this.setState({
      glassTry: this.props.data[index],
    });
  };
  render() {
    return (
      <div className="app">
        <Header />
        <Model glassTry={this.state.glassTry} />
        <GlassesList
          productList={this.props.data}
          onTry={(id) => this.handleTry(id)}
        />
      </div>
    );
  }
}

export default GlassesApp;
