import React from "react";
import styled from "styled-components";
import { withTheme } from "styled-components";

const Cart = styled.div`
  width: 300px;
  height: 60vh;
  background: red;
  margin: 2rem;
  min-width: 250px;
  border-radius: 12px;
  ${props => {
    return { ...props.theme.cards };
  }}
  &:hover {
    transform: translate(-1px, -1px) scale(1.01);
  }

  @media (min-width: 1700px) {
    height: 60vh;
  }
  @media (min-width: 2000px) {
    height: 40vh;
  }

  @media (max-width: 800px) {
    height: 66vh;
  }
  @media (max-width: 400px) {
    height: 60vh;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 50%;
  background-size: cover;
  border-radius: 12px 12px 0 0;
`;
const MainHeader = styled.h1`
  ${props => {
    return { ...props.theme.primaryHeading };
  }}
  margin:12px;
  font-weight: 600;
`;

const Text = styled.div`
  padding: 0 12px 12px 12px;
  margin-bottom: 12px;
  font-size: 1.2rem;
`;
const CartMovie = props => {
  // console.log(`cart movie: ${props.id}`);
  return (
    <Cart onClick={props.onClick} id={props.id}>
      <Image style={{ backgroundImage: `url("${props.url}")` }}></Image>
      <MainHeader>{props.title}</MainHeader>
      <Text>{props.openingCrawl}</Text>
    </Cart>
  );
};

export default withTheme(CartMovie);
