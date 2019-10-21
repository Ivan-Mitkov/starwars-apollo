import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { withTheme } from "styled-components";
import { withRouter } from "react-router-dom";

import { allStarships } from "../../data/allStraships";
import StarshipCart from "../../components/StarshipDetails/StarshipCart";
import CharacterDetailTitle from "../../components/CharacterDetails/CharacterDetailTitle";

import RadarChart from "../../components/StarshipDetails/RadarChart";

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
const StarshipDetail = props => {
  const [starship, setStarship] = useState(null);

  useEffect(() => {
    const fetchDataStarshipDetails = async () => {
      let ep = props.match.params.starshipId;

      const result = await allStarships;
      if (result) {
        // console.log(result);
        const starship = result.data.allStarships.edges.find(x => {
          return x.node.id.toString() === ep;
        });
        console.log(starship.node);
        if (starship) {
          setStarship(starship.node);
        }
      }
    };
    fetchDataStarshipDetails();
  }, [props]);

  return (
    <>
  <CharacterDetailTitle name={starship && starship.name} />
  <ContainerBig>
    {/* <Container> */}
    <ContainerSmall>
  <StarshipCart 
  name={starship&&starship.name} 
  url={starship&&starship.image} 
  class={starship&&starship.starshipClass} 
  cost={starship&&starship.cost} 
  crew={starship&&starship.crew} 
  maxAtmosphericSpeed={starship&&starship.maxAtmosphericSpeed} 
  hyperdriveRating={starship&&starship.hyperdriveRating} 
  
  />
   </ContainerSmall>
        <ContainerSmall>
          {/* <StarshipTitle>
            <h2>Piloted Starships</h2>
          </StarshipTitle>
          <PilotedShipList /> */}
        </ContainerSmall>

        {/* </Container> */}
      </ContainerBig>
      
      </>)
};

export default withRouter(withTheme(StarshipDetail));
