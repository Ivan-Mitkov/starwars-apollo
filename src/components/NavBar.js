import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import classes from "classnames";
import { withTheme } from "styled-components";

const Navbar = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;

  ${props => {
    return { ...props.theme.appBar };
  }}
`;

const SwapButton = styled.button`
  
`;

const NavBar = ({ theme, toggleTheme }) => {
  return (
    <Navbar className="app">
      <SwapButton onClick={toggleTheme}>SWAPP</SwapButton>
    </Navbar>
  );
};

export default withTheme(NavBar);
