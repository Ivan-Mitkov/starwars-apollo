import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { withTheme } from "styled-components";
import { withRouter } from "react-router-dom";

import { allStarships } from "../../data/allStraships";
import { starshipOfPersons } from "../../data/starshipsOfPersons";
import PilotedShipCart from "../../components/CharacterDetails/PilotedShipCart";

const StarshipList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-between;
  height: 20vh;
  padding: 0 5rem;
  margin: 3rem auto;

  @media (max-width: 800px) {
    justify-content: center;
    padding: 2rem;
  }
`;

const StarshipDetail = props => {
  const [pilotedShips, setPilotedShips] = useState(null);
  const [starships, setStarships] = useState(null);

  useEffect(() => {
    const fetchDataStarshipOfPersons = async () => {
      let ep = props.match.params.characterId;
      // console.log(props.match.params)
      const result = await starshipOfPersons;
      if (result) {
        // console.log(result)
        const list = result.data.allPeople.edges.find(x => {
          // console.log(x.node.starships);
          return x.node.id.toString() === ep;
        });
        if (list) {
          const listOfStarship = list.node.starships.edges.map(x => x.node.id);
          //  console.log(list.node.starships.edges)
          // console.log(listOfStarship);
          setPilotedShips(listOfStarship);
        } else {
          setPilotedShips(null);
        }
      }
    };
    const fetchDataStarshipDetails = async () => {
      const result = await allStarships;
      if (result) {
        //  console.log(result)
        if (pilotedShips) {
          const starShipsNames = [];
          for (let x in pilotedShips) {
            // console.log(pilotedShips[x])
            for (let y in result.data.allStarships.edges) {
              // console.log(result.data.allStarships.edges[y].node.id)
              if (
                result.data.allStarships.edges[y].node.id === pilotedShips[x]
              ) {
                const newShip = {
                  id: result.data.allStarships.edges[y].node.id,
                  name: result.data.allStarships.edges[y].node.name,
                  image: result.data.allStarships.edges[y].node.image
                };
                starShipsNames.push(newShip);
              }
            }
          }
          // console.log(starShipsNames);
          setStarships(starShipsNames);
        }
      }
    };
    fetchDataStarshipOfPersons();
    fetchDataStarshipDetails();
  }, [props]);



  const onClickHandle = id => {
    props.history.push(`/starships/${id}`);
  };


  return (
    <StarshipList>
      {/* {console.log(starships)} */}
      {starships &&
        starships.map(x => {
          return (
            <PilotedShipCart
              key={x.id}
              name={x.name}
              url={x.image}
              onClick={()=>onClickHandle(x.id)}
            ></PilotedShipCart>
          );
        })}
    </StarshipList>
  );
};

export default withRouter(withTheme(StarshipDetail));
