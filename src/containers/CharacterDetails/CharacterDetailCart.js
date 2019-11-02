import React from "react";
import styled from "styled-components";
import { withTheme } from "styled-components";
import { withRouter } from "react-router-dom";

// import { allPeople } from "../../data/allPeople";
import CartCharacterDetail from "../../components/CharacterDetails/CharacterDetailCart";
import CharacterDetailTitle from "../../components/CharacterDetails/CharacterDetailTitle";

const ContainerBig = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  @media (max-width: 800px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;

const ContainerSmall = styled.div`
  width: 100%;
  display: flex;
  min-width: 300px;
  flex-direction: column;
  @media (max-width: 800px) {
    margin: 0 auto;
  }
`;

const StarshipTitle = styled.div`
  line-height: 3rem;
  height: 10vh;
  border-bottom: 1px solid black;
  width: 100%;
  text-align: center;
  h2 {
    ${props => {
      return { ...props.theme.name };
    }}
  }
  @media (max-width: 800px) {
    flex-direction: column;
    line-height: 1rem;
    height: 10vh;
    border-bottom: 1px solid black;
    width: 100%;
  }
`;

const CharacterDetail = props => {
  // console.log("CharacterDetail", props);
 
  return (
    <>
      <CharacterDetailTitle name={props.person && props.person.name} />
      <ContainerBig>
        {/* <Container> */}
        <ContainerSmall>
          <CartCharacterDetail
            name={props.person && props.person.name}
            height={props.person && props.person.height}
            mass={props.person && props.person.mass}
            species={
              props.person && props.person.species && props.person.species.name
            }
            homeworld={
              props.person &&
              props.person.homeworld &&
              props.person.homeworld.name
            }
            url={props.person && props.person.image}
          />
        </ContainerSmall>
        <ContainerSmall>
          <StarshipTitle>
            <h2>Piloted Starships</h2>
          </StarshipTitle>
          {props.children}
        </ContainerSmall>

        {/* </Container> */}
      </ContainerBig>
    </>
  );
};

export default withRouter(withTheme(CharacterDetail));
