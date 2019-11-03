import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Loading from "../components/Loading";

import styled from "styled-components";
import { withTheme } from "styled-components";
import { withRouter } from "react-router-dom";
// import { movies } from "../data/movies2";
import CartMovie from "../components/CartMovie";
// import Login from "../pages/Login";

const MoviesList = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: flex-start;
  height: 100vh;
  padding: 3rem;
  margin: 0 auto;
  @media (max-width: 800px) {
    justify-content: center;
    padding: 2rem;
    width: 100%;
  }
  @media (min-width: 2000px) {
    margin: 0 auto;
    width: 66%;
    align-content: flex-start;
    padding: 2rem;
  }
`;

const ALL_EPISODES = gql`
  query allEpisodes($first: Int!) {
    allEpisodes(first: $first) {
      edges {
        node {
          id
          title
          director
          episodeId
          releaseDate
          openingCrawl
          image
        }
      }
    }
  }
`;
const MovieList = props => {
  // const [edges, setMovie] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await movies;
  //     if (result) {
  //       // console.log(result);
  //       setMovie(result.data.allEpisodes.edges);
  //     }
  //   };
  //   fetchData();
  // }, []);
  ///from Apolo
  const { loading, error, data } = useQuery(ALL_EPISODES, {
    variables: { first: 7 }
  });
  if (loading) return <Loading />;
  if (error) {
    console.log(error);
    return <p>Error on getting all movies</p>;
  }

  const {
    allEpisodes: { edges }
  } = data;
  // console.log("allEpisodes data:", edges);

  const onClickHandle = epId => {
    props.history.push(`/episodes/${epId}`);
  };
  const formatCrawl = (i, words) => {
    if (edges) {
      return (
        edges[i].node.openingCrawl
          .split(" ")
          .slice(0, words)
          .join(" ") + " ..."
      );
    }
    return "";
  };
  return (
    <>
      <MoviesList>
        {edges &&
          edges.map((m, i) => {
            return (
              <CartMovie
                key={edges && m.node.episodeId}
                url={edges && m.node.image}
                title={edges && m.node.title}
                openingCrawl={edges && formatCrawl(i, 12)}
                onClick={() => onClickHandle(m.node.episodeId)}
              />
            );
          })}
      </MoviesList>
    </>
  );
};

export default withRouter(withTheme(MovieList));
