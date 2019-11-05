import React from "react";
import styled from "styled-components";
import { withTheme } from "styled-components";
import { withRouter } from "react-router-dom";

import PilotedShipCart from "../../components/CharacterDetails/PilotedShipCart";

const StarshipList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-between;
  padding: 0 5rem;
  margin: 3rem auto;

  @media (max-width: 800px) {
    justify-content: center;
    padding: 2rem;
  }
`;

const StarshipDetail = props => {
  const { starships } = props;
  // console.log('StarshipDetail',props);

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
              key={x.node.id}
              name={x.node.name}
              url={x.node.image}
              onClick={() => onClickHandle(x.node.id)}
            ></PilotedShipCart>
          );
        })}
    </StarshipList>
  );
};

export default withRouter(withTheme(StarshipDetail));
