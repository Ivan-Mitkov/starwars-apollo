import React from "react";
import CharactersData from "../containers/Characters";
import styled from "styled-components";
import { withTheme } from "styled-components";

const CharactersPage = styled.div`
  height: 100vh;
`;
const Characters = () => {
  return (
    <CharactersPage>
      <CharactersData />
    </CharactersPage>
  );
};

export default withTheme(Characters);
