import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { withTheme } from "styled-components";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const Navbar = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;

  ${props => {
    return { ...props.theme.appBar };
  }}
  align-items:center;
  @media (max-width: 590px) {
   flex-direction:column;
   height: 15vh;
   margin-left:8px;
  }
`;

const SwapButton = styled.div`
  font-size: 3rem;
  color: ${props => props.theme.Yellow};
  margin-left: 32px;
  flex-grow: 2;
  font-weight: 900;
  font-family: "SF Distant Galaxy";
  @media (max-width: 500px) {
    font-size: 2.5rem;
    flex-grow: 1;
    margin-left: 8px;
  }
`;

const LinkDiv = styled.div`
  a {
    text-decoration: none;
    color: inherit;
    font-size: 1.5rem;
    padding-right: 3rem;
    @media (max-width: 590px) {
      padding-right: 1rem;
      font-size: 1.3rem;
    }
  }

  display: flex;
  justify-content: space-between;
  align-items:center;
  @media (min-width: 500px) {
    justify-content: space-evenly;
  }
`;

const NavBar = ({ theme, toggleTheme,isLogged,handleLogout }) => {
//  console.log(isLogged)
  return (
    <Navbar>
      <SwapButton onClick={toggleTheme}>SWAPP</SwapButton>
     
      <LinkDiv>
        {isLogged===true && (
         
           <LinkDiv>
           <Link to={"/episodes"}>Episodes</Link>
           <Link to={"/characters"}>Characters</Link>
         
          <Link onClick={handleLogout} to={"/login"}>
            <ExitToAppIcon style={{fontSize:'3rem'}}/>
          </Link>
          </LinkDiv>
        ) }
      </LinkDiv>
    </Navbar>
  );
};

export default withTheme(NavBar);
