import React, { useEffect, useState } from "react";
// import styled from "styled-components";
import { withTheme } from "styled-components";
import { withRouter } from "react-router-dom";

import { allPeople } from "../../data/allPeople";
import CartCharacterDetail from "../../components/CharacterDetails/CharacterDetailCart";
import CharacterDetailTitle from "../../components/CharacterDetails/CharacterDetailTitle";


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
        }
        else{
          const episode = result.data.allPeople.edges.find(x => {
            // console.log(x.node.episodeId);
            return x.node.id.toString() === '1';
          });
          setCharacter(episode.node);
        }
      }
    };
    fetchData();
  }, [props]);
  return (
    <>
<CharacterDetailTitle name={character && character.name}/>
      <CartCharacterDetail
      name={character && character.name}
        height={character && character.height}
        mass={character && character.mass}
        species={character &&character.species &&character.species.name}
        homeworld={character &&character.homeworld &&character.homeworld.name}
        url={character && character.image}
        
      />
    </>
  );
};

export default withRouter(withTheme(CharacterDetail));
