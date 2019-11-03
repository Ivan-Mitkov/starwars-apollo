import React from "react";
import styled from "styled-components";
import { withTheme } from "styled-components";


const StyledButton = styled.button`
  box-sizing: "border-box";
  min-width: 160px;
  min-height: 36px;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1.5rem;
  text-align: center;
  /* background-color: yellow; */
  box-shadow: 0px 0px 1px 1px #eeeeee;
  font-weight: 600;
  border:none;
  ${props => {
    return { ...props.theme.solidButton };
  }}
  cursor: pointer;
  &:hover {
    /* background-color: blue; */
    color: white;
    box-shadow: 0px 0px 0px 1px #E5E9F2;
    font-size: 1.5rem;
    animation: fade 1s;
    opacity: 0.9;
    ${props => {
    return { ...props.theme.solidButton };
  }}
  }
  &:active {
    animation: fade2 0.5s;
    box-shadow: inset 0px 0px 0px 2px rgba(0, 0, 0, 0.1);
    ${props => {
    return { ...props.theme.solidButton };
  }}
  }
  @keyframes fade {
    0% {
      /* background-color: ${props=>props.theme.Yellow}; */
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      /* background-color: blue; */
    }
  }
  @keyframes fade2 {
    0% {
      /* background-color: darkblue; */
      opacity: 1;
    }
    50% {
      /* background-color: blue; */
      opacity: 0.5;
    }
    100% {
      opacity: 1;
      /* background-color: darkblue; */
    }
  }
`;
const Button = props => {
  return <StyledButton onClick={props.onClick}>{props.text}</StyledButton>;
};

export default withTheme(Button);