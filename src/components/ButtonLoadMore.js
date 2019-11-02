import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  box-sizing: "border-box";
  min-width: 160px;
  min-height: 36px;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1.2rem;
  text-align: center;
  background-color: yellow;
  box-shadow: 0px 0px 1px 1px #eeeeee;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: blue;
    color: white;
    box-shadow: 0px 0px 1px 2px #eeeeee;
    font-size: 1.2rem;
    animation: fade 1s;
  }
  &:active {
    animation: fade2 0.5s;
    box-shadow: inset 0px 0px 0px 2px rgba(0, 0, 0, 0.1);
  }
  @keyframes fade {
    0% {
      background-color: yellow;
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      background-color: blue;
    }
  }
  @keyframes fade2 {
    0% {
      background-color: darkblue;
      opacity: 1;
    }
    50% {
      background-color: blue;
      opacity: 1;
    }
    100% {
      opacity: 1;
      background-color: darkblue;
    }
  }
`;
const Button = props => {
  return <StyledButton onClick={props.onClick}>{props.text}</StyledButton>;
};

export default Button;