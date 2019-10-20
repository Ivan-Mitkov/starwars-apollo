import React from "react";
import styled from "styled-components";
import { withTheme } from "styled-components";

const Cart = styled.div`
  width: 100%;
  height: 10vh;
  background: red;
  margin: 12px auto;
  min-width: 250px;
  border-radius: 12px;
  display: flex;
  justify-content:flex-start;
  ${props => {
    return { ...props.theme.cards };
  }}
  @media (max-width: 800px) {
    
  }

  /* &:hover {
    transform: translate(-1px, -1px) scale(1.01);
  } */
`;

const Image = styled.div`
  /* width: 80%; */
  height: 100%;
  width:30%;
  background-size: contain;
  background-repeat:no-repeat;
  border-radius: 12px;
  min-width: 70px;
  @media (max-width: 800px) {
   
    border-radius: 12px;
  }
`;
const MainHeader = styled.h2`
  ${props => {
    return { ...props.theme.primaryHeading };
  }}
  margin:12px;
  font-weight: 400;
  font-size: 1.3rem;
  width:100%;
`;

const Detail = styled.div`
  justify-self: flex-end;
  line-height: 1.8rem;
  span.data {
    color: ${props => props.theme.primaryHeading.color};
  }
  span.name {
    color: ${props => props.theme.name.color};
  }
`;
const Titles = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 16px;
  @media (max-width: 800px) {
    align-items: flex-start;
  }
`;
const CartMovie = props => {
//   console.log(`cart movie: url("${props.url}")`);
  return (
    <Cart onClick={props.onClick}>
      <Image style={{ backgroundImage: `url("${props.url}")` }}/> 
      <MainHeader>{props.name}</MainHeader>
    </Cart>
  );
};

export default withTheme(CartMovie);
