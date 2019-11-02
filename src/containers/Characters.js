import React from "react";
import { useQuery } from "@apollo/react-hooks";

import styled from "styled-components";
import { withTheme } from "styled-components";
import { withRouter } from "react-router-dom";
import People from "../components/EpisodeDetail/PersonEpisodeDetail";
import gql from "graphql-tag";
import Loading from "../components/Loading";

const PeopleList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-between;
  /* height: 100vh; */
  padding: 0 5rem;
  margin: 3rem auto;

  @media (max-width: 800px) {
    justify-content: center;
    padding: 2rem;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonDiv = styled.div`
  padding: 20px;
`;
const ALL_PEOPLE = gql`
  query allPeople($first: Int!, $after: String) {
    allPeople(first: $first, after: $after) {
      edges {
        node {
          id
          name
          image
        }
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
      }
      totalCount
    }
  }
`;

const MovieList = props => {
  const onClickHandle = id => {
    props.history.push(`/characters/${id}`);
  };

  ///from Apolo
  const { loading, error, data, fetchMore } = useQuery(ALL_PEOPLE, {
    variables: { first: 12 }
  });
  if (loading) return <Loading />;
  if (error) {
    console.log(error);
    return <p>Error on getting all people</p>;
  }

  const {
    allPeople: { edges, pageInfo }
  } = data;
  // console.log("allPeople data:", edges);

  const loadMorePeople = () => {
    fetchMore({
      variables: {
        after: pageInfo.endCursor
      },

      updateQuery: (prev, { fetchMoreResult: { allPeople } }) => {
        // console.log("update allPeople", allPeople);
        if (!allPeople.edges.length) {
          return prev;
        }
        // console.log("prev", prev.allPeople.edges);
        // console.log("currenet", allPeople.edges);
        const newEdges = allPeople.edges;
       
        const result ={allPeople: {
         ...allPeople,
          edges: [...prev.allPeople.edges, ...newEdges]
        }};
        // console.log(result);
        return result;
      }
    });
  };
  return (
    <>
      <Container>
        {/* {console.log("render: ", data)} */}
        <div>
          <PeopleList>
            {edges &&
              edges.map((m, i) => {
                // console.log(m);
                return (
                  <People
                    key={edges && m.node.id}
                    url={edges && m.node.image}
                    name={edges && m.node.name}
                    onClick={() => onClickHandle(m.node.id)}
                  />
                );
              })}
          </PeopleList>
        </div>
       {pageInfo.hasNextPage&&( <ButtonDiv>
          <button onClick={loadMorePeople}>Load More</button>
       </ButtonDiv>)}
      </Container>
    </>
  );
};

export default withRouter(withTheme(MovieList));
