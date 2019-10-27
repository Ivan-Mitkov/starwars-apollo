import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { withTheme } from "styled-components";
import { withRouter } from "react-router-dom";

import { allPeople } from "../../data/allPeople";
import CartCharacterDetail from "../../components/CharacterDetails/CharacterDetailCart";
import CharacterDetailTitle from "../../components/CharacterDetails/CharacterDetailTitle";
import PilotedShipList from "./PilotedShipCart";

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
  const [character, setCharacter] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      let ep = props.match.params.characterId;
      //   console.log(props.match.params)
      const result = await allPeople;
      if (result) {
        const episode = result.data.allPeople.edges.find(x => {
          // console.log(x.node.episodeId);
          return x.node.id.toString() === ep;
        });
        if (episode) {
          setCharacter(episode.node);
        } else {
          const episodeOther = result.data.allPeople.edges.find(x => {
            // console.log(x.node.episodeId);
            return x.node.id.toString() === "people.10";
          });
          setCharacter(episodeOther.node);
        }
      }
    };
    fetchData();
  }, [props.match.params.characterId]);
  return (
    <>
      <CharacterDetailTitle name={character && character.name} />
      <ContainerBig>
        {/* <Container> */}
        <ContainerSmall>
          <CartCharacterDetail
            name={character && character.name}
            height={character && character.height}
            mass={character && character.mass}
            species={character && character.species && character.species.name}
            homeworld={
              character && character.homeworld && character.homeworld.name
            }
            url={character && character.image}
          />
        </ContainerSmall>
        <ContainerSmall>
          <StarshipTitle>
            <h2>Piloted Starships</h2>
          </StarshipTitle>
          <PilotedShipList />
        </ContainerSmall>

        {/* </Container> */}
      </ContainerBig>
    </>
  );
};

export default withRouter(withTheme(CharacterDetail));
