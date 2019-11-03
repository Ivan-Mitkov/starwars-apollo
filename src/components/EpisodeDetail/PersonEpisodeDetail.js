import React from "react";
import styled from "styled-components";
import { withTheme } from "styled-components";

const Cart = styled.div`
  width: 300px;
  height: 20vh;
  background: red;
  margin: 0 3rem 3rem 3rem;
  min-width: 250px;
  border-radius: 12px;
  display: flex;
  justify-content:space-between;
  align-items: center;
  ${props => {
    return { ...props.theme.cards };
  }}
  @media (max-width: 800px) {
    height: 50vh;
    flex-direction: column;
    
  }
  @media (min-width: 800px) {
    height: 15vh;
    flex-direction: row;
    justify-content:space-between;

  }
  @media (min-width: 2000px) {
    height: 10vh;
    flex-direction: row;
    justify-content:space-between;

  }

  /* &:hover {
    transform: translate(-1px, -1px) scale(1.01);
  } */
`;

const Image = styled.div`
  width: 10%;
  height: 100%;
  background-size: cover;
  border-radius: 12px 0 0 12px;
  min-width: 120px;
  @media (max-width: 800px) {
    width: 100%;
    max-height: 70%;
    border-radius: 12px 12px 0 0;
  }
  @media (min-width: 1200px) {
    width: 40%;
  

  }
  @media (min-width: 2000px) {
    width: 80%;
    

  }
`;

const SubHeader = styled.div`
  padding: 0 12px 12px 12px;
  font-size: 1.5rem;
 
  height:20%;
  ${props => {
    return { ...props.theme.primaryHeading };
  }}
   @media (max-width: 800px) {
    /* width: 100%; */
    /* max-height: 70%; */
    border-radius: 12px 12px 0 0;
    /* padding: 0 0 30px 0 ; */
    text-align:center;
    align-self:center;
    width:100%;
  }
   @media (min-width: 800px) {
    /* width: 100%; */
    /* max-height: 70%; */
    border-radius: 12px 12px 0 0;
    /* padding: 0 0 30px 0 ; */
    text-align:center;
    align-self:center;
    /* min-width:40%; */
  }
`;

const CartMovie = props => {
  //   console.log(`cart movie: url("${props.url}")`);
  return (
    <Cart onClick={props.onClick}>
      <Image style={{ backgroundImage: `url("${props.url}")` }}></Image>

      <SubHeader>{props.name}</SubHeader>
    </Cart>
  );
};

export default withTheme(CartMovie);
