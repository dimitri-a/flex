import React, { Component } from "react";
//demo for basic flex and wrap option

import "./flexcontainer.css";

export default class FlexContainer extends Component {
  render() {
    return (
      <div className="flex-container">
        <div className="div1">1</div>
        <div className="div1">2</div>
        <div className="div2">3</div>
        <div className="div2">4</div>
      </div>
    );
  }
}
