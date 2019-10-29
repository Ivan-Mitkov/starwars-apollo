import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";

import styled from "styled-components";
import { withTheme } from "styled-components";
import { withRouter } from "react-router-dom";
import { allPeople as movies } from "../data/allPeople";
import People from "../components/EpisodeDetail/PersonEpisodeDetail";
import gql from "graphql-tag";
import Loading from "../components/Loading";

const PeopleList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-between;
  height: 100vh;
  padding: 0 5rem;
  margin: 3rem auto;

  @media (max-width: 800px) {
    justify-content: center;
    padding: 2rem;
  }
`;

const ALL_PEOPLE = gql`
  query allPeople($first: Int!) {
    allPeople(first: $first) {
      edges {
        node {
          id
          name
          image
        }
        cursor
      }
    }
  }
`;

const MovieList = props => {
  ///from files
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await movies;
      if (result) {
        // console.log(result);
        const personsInEpisode = result.data.allPeople.edges
          .map(x => x.node)
          .slice(0, 12);
        // const searchedMovie=result.data.allEpisodes.edges.find()
        // console.log(personsInEpisode);
        setMovie(personsInEpisode);
      }
    };
    fetchData();
  }, []);
  const onClickHandle = id => {
    props.history.push(`/characters/${id}`);
  };

  ///from Apolo
  const { loading, error, data, fetchMore } = useQuery(ALL_PEOPLE, {
    variables: { first: 7 }
  });
  if (loading) return <Loading />;
  if (error){
    console.log(error)
    return <p>Error on getting all people</p>;
  } 

  const {
    allPeople: { edges, hasMore, cursor }
  } = data;
  console.log(edges);

  // const loadMoreCars = () => {
  //   fetchMore({
  //     variables: {
  //       after: cursor
  //     },
  //     updateQuery: (prev, { fetchMoreResult: { allPeople } }) => {
  //       if (!allPeople.edges.length) {
  //         return prev;
  //       }

  //       return {
  //         allPeople: {
  //           ...allPeople,
  //           people: [...prev.allPeople.edges, ...allPeople.edges]
  //         }
  //       };
  //     }
  //   });
  // };
  return (
    <>
      {/* <PeopleList>
        {movie &&
          movie.map((m, i) => {
            return (
              <People
                key={movie && m.id}
                url={movie && m.image}
                name={movie && m.name}
                onClick={() => onClickHandle(m.id)}
              />
            );
          })}
      </PeopleList> */}
      <PeopleList>
        {edges &&
          edges.map((m, i) => {
            // console.log(m)
            return (
              <People
                key={edges && m.node.id}
                url={edges && m.node.image}
                name={edges && m.node.name}
                onClick={() => onClickHandle(m.id)}
              />
            );
          })}
      </PeopleList>
    </>
  );
};

export default withRouter(withTheme(MovieList));
