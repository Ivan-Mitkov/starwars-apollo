import React from "react";
import styled from "styled-components";
import { withTheme } from "styled-components";
import { withRouter } from "react-router-dom";
// import { persons as movies } from "../data/peoples";
import People from "../components/EpisodeDetail/PersonEpisodeDetail";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Loading from "../components/Loading";
import Button from "../components/ButtonLoadMore";

const ALL_PEOPLE_IN_EPISODE = gql`
  query episode($first: Int!, $id: ID!, $after: String) {
    episode(id: $id) {
      people(first: $first, after: $after) {
        edges {
          node {
            id
            name
            image
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
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
const PeopleList = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-evenly;
  padding: 0 5rem;
  margin: 3rem auto;

  @media (max-width: 800px) {
    justify-content: center;
    padding: 2rem;
  }
`;
const MovieList = props => {
  // console.log(props)

  const onClickHandle = id => {
    props.history.push(`/characters/${id}`);
  };
  ///from Apolo
  // console.log(props.id)
  // console.log(typeof(props.id))
  const FILM_ID = props.id || "films.1";

  const { loading, error, data, fetchMore } = useQuery(ALL_PEOPLE_IN_EPISODE, {
    variables: { first: 5, id: FILM_ID }
  });
  if (loading) return <Loading />;
  if (error) {
    console.log(error);
    return <p>Error on getting all movies</p>;
  }

  // console.log(data.episode.people.edges);
  const {
    episode: {
      people: { edges, pageInfo }
    }
  } = data;

  const loadMorePeople = () => {
    fetchMore({
      variables: {
        after: pageInfo.endCursor
      },

      updateQuery: (prev, { fetchMoreResult: { episode } }) => {
        // console.log(pageInfo.endCursor);
        // console.log("update people", episode);
        if (!episode.people.edges.length) {
          return prev;
        }
        // console.log("prev", prev.episode.people.edges);
        // console.log("currenet", allPeople.edges);
        const newEdges = episode.people.edges;
        // console.log("prev page info", prev.episode.people.pageInfo);
        // console.log("prev page info", prev.episode.people.pageInfo);
        // console.log("new edges", newEdges);
        const result = {
          episode: {
            ...episode,
            people: {
              ...prev.episode.people,
              pageInfo: { ...episode.people.pageInfo },
              edges: [...prev.episode.people.edges, ...newEdges]
            }
          }
        };
        // console.log("result", result);
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
        {/* {console.log(pageInfo)} */}
        {pageInfo.hasNextPage && (
          <ButtonDiv>
            <Button text="Load More" onClick={loadMorePeople} />
          </ButtonDiv>
        )}
      </Container>
    </>
  );
};

export default withRouter(withTheme(MovieList));
