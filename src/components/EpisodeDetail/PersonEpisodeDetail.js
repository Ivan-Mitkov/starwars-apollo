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
  justify-content: space-between;
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
    justify-content: space-between;
  }
  @media (min-width: 2000px) {
    height: 10vh;
    flex-direction: row;
    justify-content: space-between;
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
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 20%;
  line-height: 3rem;
  ${props => {
    return { ...props.theme.primaryHeading };
  }}
  span {
    padding-left: 20px;
    display: inline-block;
  }
  @media (max-width: 800px) {
    border-radius: 12px 12px 0 0;
    justify-content: center;
    width: 100%;
  }
  @media (min-width: 800px) {
    height: 100%;
    width: 100%;
    border-radius: 12px 12px 0 0;
  }
`;

const CartMovie = props => {
  //   console.log(`cart movie: url("${props.url}")`);
  return (
    <Cart onClick={props.onClick}>
      <Image style={{ backgroundImage: `url("${props.url}")` }}></Image>

      <SubHeader>
        <span>{props.name}</span>
      </SubHeader>
    </Cart>
  );
};

export default withTheme(CartMovie);
