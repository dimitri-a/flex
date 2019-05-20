import React, { Component } from "react";
//demo for basic flex and wrap option

import "./onerow.css";

import styled from "styled-components";

const iStyle = {
  fontSize: "24px"
};

const Text = () => <input type="text" placeholder="name here" />;
const TextWrapper = styled.div`
  margin-left: 10px;
`;

export default class OneRow extends Component {
  render() {
    return (
      <div className="onerow-container">
        <div className="div1">
          <i className="fas fa-cloud" style={iStyle} />
          <TextWrapper>
            <Text />
          </TextWrapper>
        </div>
      </div>
    );
  }
}
