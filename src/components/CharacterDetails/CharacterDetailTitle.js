import React from "react";
import styled from "styled-components";
import { withTheme } from "styled-components";

const Title = styled.h1`
  ${props => {
    return { ...props.theme.primaryHeading };
  }}
  margin:0 auto;
  font-weight: 800;
  font-size: 3rem;
  line-height: 10rem;
  width: 80%;
  text-align: center;
  border-bottom: 1px solid ${props=>props.theme.Black};
`;
const CharacterDetailTitle = props => {
  return <Title>{props.name}</Title>;
};

export default withTheme(CharacterDetailTitle);
