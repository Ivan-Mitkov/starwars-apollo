import React from "react";
import styled from "styled-components";
import { withTheme } from "styled-components";
import { withRouter } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Loading from "../../components/Loading";
// import Login from "../../pages/Login";

// import { allStarships } from "../../data/allStraships";
import StarshipCart from "../../components/StarshipDetails/StarshipCart";
import CharacterDetailTitle from "../../components/CharacterDetails/CharacterDetailTitle";

import RadarChart from "../../components/StarshipDetails/ReactVisChart";
const ALL_STARSHIP = gql`
  query allStarships {
    allStarships(first: 100) {
      edges {
        node {
          starshipClass
          id
          name
          model
          image
          starshipClass
          cost
          maxMLPerHour
          maxAtmosphericSpeed
          hyperdriveRating
          crew
        }
      }
    }
  }
`;
const ContainerBig = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  @media (max-width: 1100px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;

const ContainerSmall = styled.div`
  width: 100%;
  height: 100vh;
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
const RadarContainer = styled.div`
 background-color:${props=>props.theme.radar.fill};
 display:flex;
 align-items:center;
 justify-content:center;
`;
const StarshipDetail = props => {
  let allStarshipsFromData = null;
  let starship = null;
  let sameClassStarships = null;
  let maxCrew = null;
  let maxCost = null;
  let maxMLPerHour = null;
  let maxAtmosphericSpeed = null;
  let maxHyperdriveRating = null;
  let allStarshipData = null;
  let maxData = null;

  const findMax = () => {
    const result = allStarshipsFromData;
    if (result && sameClassStarships) {
      const maxCostArr = sameClassStarships.map(x => x.cost);
      maxCost = Math.max(...maxCostArr);
      //   console.log(maxCost);

      const maxMLPerHourArr = sameClassStarships.map(x => x.maxMLPerHour);
      maxMLPerHour = Math.max(...maxMLPerHourArr);

      const maxAtmosphericSpeedArr = sameClassStarships.map(
        x => x.maxAtmosphericSpeed
      );
      maxAtmosphericSpeed = Math.max(...maxAtmosphericSpeedArr);
      //   console.log(maxAtmosphericSpeed);

      const maxHyperdriveRatingArr = sameClassStarships.map(
        x => x.hyperdriveRating
      );
      maxHyperdriveRating = Math.max(...maxHyperdriveRatingArr);
      //   console.log(maxHyperdriveRating);

      const maxCrewArr = sameClassStarships.map(x => x.crew);
      maxCrew = Math.max(...maxCrewArr);
      //   console.log(maxCrew);
    }
  };

  const findData = () => {
    const result = data;
    // console.log(starship)
    if (result && sameClassStarships) {
      const Range = {
        name: starship.name,
        cost: maxCost,
        Crew: maxCrew,

        MaxAtmSpeed: maxAtmosphericSpeed,
        HyperDRat: maxHyperdriveRating,
        MaxMLh: maxMLPerHour
      };
      maxData = Range;
      const DATA = [
        {
          name: starship.name,
          cost: starship.cost,
          crew: starship.crew,

          maxAtmSpeed: starship.maxAtmosphericSpeed,
          HyperDRat: starship.hyperdriveRating,
          MaxMLh: starship.maxMLPerHour
        }
      ];
      allStarshipData = DATA;
    }
  };

  //get data
  const { loading, error, data } = useQuery(ALL_STARSHIP, {
    variables: { first: 7 }
  });
  if (loading) return <Loading />;
  if (error) {
    console.log(error);
    return <p>Error on getting all movies</p>;
  }

  const {
    allStarships: { edges }
  } = data;

  //get selected starship
  let ep = props.match.params.starshipId;

  if (edges) {
    allStarshipsFromData = edges;
    const thisStarship = edges.find(x => {
      return x.node.id.toString() === ep;
    });
    starship = thisStarship.node;
  }
  //get all staships with same class
  if (starship && allStarshipsFromData) {
    const starshipClass = starship.starshipClass;
    const sameClass = allStarshipsFromData.filter(x => {
      return x.node.starshipClass === starshipClass;
    });
    if (sameClass) {
      const sameClassStarshipArr = sameClass.map(x => x.node);
      sameClassStarships = sameClassStarshipArr;
    }
    // console.log(sameClassStarships);
  }
  findMax();
  findData();
 
  return (
    <>
      <CharacterDetailTitle name={starship && starship.name} />
      <ContainerBig>
        {/* <Container> */}
        <ContainerSmall>
          <StarshipCart
            name={starship && starship.name}
            url={starship && starship.image}
            class={starship && starship.starshipClass}
            cost={starship && starship.cost}
            crew={starship && starship.crew}
            maxAtmosphericSpeed={starship && starship.maxAtmosphericSpeed}
            hyperdriveRating={starship && starship.hyperdriveRating}
          />
        </ContainerSmall>
        <ContainerSmall>
          <StarshipTitle>
            <h2>{starship && starship.name}</h2>
          </StarshipTitle>
          <RadarContainer>
            {allStarshipData && maxData ? (
              <RadarChart data={allStarshipData} range={maxData} />
            ) : null}
          </RadarContainer>
{/* 
          {console.log("allStarshipData:", allStarshipData)}
          {console.log("maxData", maxData)} */}
        </ContainerSmall>
      </ContainerBig>
    </>
  );
};

export default withRouter(withTheme(StarshipDetail));
