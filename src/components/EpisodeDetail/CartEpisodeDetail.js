import React from "react";
import styled from "styled-components";
import { withTheme } from "styled-components";

const Cart = styled.div`
  width: 66%;
  height: 33vh;
  background: red;
  margin: 3rem auto;
  min-width: 250px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  ${props => {
    return { ...props.theme.cards };
  }}
   @media (max-width: 800px) {
    height: 50vh;
    flex-direction:column
  }

  /* &:hover {
    transform: translate(-1px, -1px) scale(1.01);
  } */
`;

const Image = styled.div`
  width: 33%;
  height: 100%;
  background-size: cover;
  border-radius: 12px 0 0 12px;
  min-width:200px;
  @media (max-width: 800px) {
    width: 100%;
    max-height: 80%;
    border-radius: 12px 12px 0 0;
  }
`;
const MainHeader = styled.h1`
  ${props => {
    return { ...props.theme.primaryHeading };
  }}
  margin:12px;
  font-weight: 800;
`;

const SubHeader = styled.div`
  padding: 0 12px 12px 12px;
  font-size: 1.5rem;
`;
const Titles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:space-around;
  @media (max-width: 800px) {
    align-items:flex-start;
  }
  
`;
const CartMovie = props => {
    // console.log(`cart episode detail movie: ("${props.url}")`);
  return (
    <Cart >
      <Image style={{ backgroundImage: `url("${props.url}")` }}></Image>
      <Titles>
        <MainHeader>{props.title}</MainHeader>
        <SubHeader>{props.subTitle}</SubHeader>
      </Titles>
    </Cart>
  );
};

export default withTheme(CartMovie);
