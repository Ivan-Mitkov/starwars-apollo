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
  align-items:center;
`;

const SwapButton = styled.div`
  font-family: "StarWars";
  font-size: 3rem;
  color: ${props => props.theme.Yellow};
  margin-left: 32px;
  flex-grow: 2;
  @media (max-width: 500px) {
    font-size: 2rem;
    flex-grow: 1;
    margin-left: 8px;
    };
`;

const LinkDiv = styled.div`
  a {
    text-decoration: none;
    color: inherit;
    font-size: 1.5rem;
    padding-right: 3rem;
    @media (max-width: 500px) {
      padding-right: 1rem;
      font-size: 1rem;
    }
  }

  display: flex;
  justify-content: space-between;
  @media (min-width: 500px) {
    justify-content: space-evenly;
    }
`;

const NavBar = ({ theme, toggleTheme }) => {
  return (
    <Navbar >
      <SwapButton onClick={toggleTheme}>SWAPP</SwapButton>
      <LinkDiv>
        <Link to={"./episodes"}>Episodes</Link>
        <Link to={"./characters"}>Charachters</Link>
      </LinkDiv>
    </Navbar>
  );
};

export default withTheme(NavBar);
