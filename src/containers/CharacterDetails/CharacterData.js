import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { withRouter } from "react-router-dom";
import gql from "graphql-tag";
import CharacterDetail from "./CharacterDetailCart";
import PilotedShips from "./PilotedShipCart";
import Loading from "../../components/Loading";
// import Login from "../../pages/Login";

const CHARACTER_DETAIL = gql`
  query person($id: ID!) {
    person(id: $id) {
      id
      name
      height
      mass
      image
      homeworld {
        name
      }
      species {
        name
      }
      starships {
        edges {
          node {
            id
            name
            model
            image
            starshipClass
            cost
            maxAtmosphericSpeed
            maxMLPerHour
            hyperdriveRating
            crew
          }
        }
      }
    }
  }
`;
const CharacterData = props => {
  ///from Apolo
  let ep = props.match.params.characterId;

  const { loading, error, data } = useQuery(CHARACTER_DETAIL, {
    variables: { id: ep }
  });
  if (loading) return <Loading />;
  if (error) {
    console.log(error);
    return <p>Error loading</p>;
  }

  const { person } = data;
//   console.log("person data:", person);

  return (
    <div>
      <CharacterDetail person={person}>
        <PilotedShips starships={person.starships.edges} />
      </CharacterDetail>
    </div>
  );
};

export default withRouter(CharacterData);
