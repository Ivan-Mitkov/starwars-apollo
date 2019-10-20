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
`;

const SubHeader = styled.div`
  padding: 0 12px 12px 12px;
  font-size: 1.5rem;
  width:100%;
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
