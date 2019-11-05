import React from "react";
import styled from "styled-components";
import { withTheme } from "styled-components";

const Cart = styled.div`
  width: 80%;
  height: 80vh;
  background: red;
  margin: 3rem auto;
  min-width: 300px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 1.2rem;
  line-height: 2rem;
  ${props => {
    return { ...props.theme.cards };
  }}
  @media (max-width: 500px) {
    width: 90%;
    height: 80vh;
    /* padding:0; */
    margin: 0 auto;
  }

  /* &:hover {
    transform: translate(-1px, -1px) scale(1.01);
  } */
`;

const Image = styled.div`
  width: 80%;
  height: 66%;
  background-size: cover;
  border-radius: 12px;
  min-width: 200px;
  padding:16px;
  @media (max-width: 800px) {
    height: 80%;
    margin:16px;
    border-radius: 12px;
  }
`;
const MainHeader = styled.h1`
  ${props => {
    return { ...props.theme.primaryHeading };
  }}
  margin:12px;
  font-weight: 800;

 
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
    <Cart>
      <MainHeader>{props.name}</MainHeader>
      <Image style={{ backgroundImage: `url("${props.url}")` }}></Image>
      <Titles>
        <Detail>
          <span className="name">Height:</span>
          <span className="data"> {props.height}</span>
        </Detail>
        <Detail>
          <span className="name">Weight:</span>
          <span className="data"> {props.mass}</span>
        </Detail>
        <Detail>
          <span className="name">Species:</span>
          <span className="data"> {props.species}</span>
        </Detail>
        <Detail>
          <span className="name">Home World:</span>
          <span className="data"> {props.homeworld}</span>
        </Detail>
      </Titles>
    </Cart>
  );
};

export default withTheme(CartMovie);
