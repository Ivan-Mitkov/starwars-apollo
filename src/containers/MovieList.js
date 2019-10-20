import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { withTheme } from "styled-components";
import { withRouter } from "react-router-dom";
import { movies } from "../data/movies2";
import CartMovie from "../components/CartMovie";

const MoviesList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-between;
  height: 100vh;
  padding: 3rem;

  @media (max-width: 800px) {
    justify-content: center;
    padding: 2rem;
  }
`;
const MovieList = (props) => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await movies;
      if (result) {
        // console.log(result);
        setMovie(result.data.allEpisodes.edges);
      }
    };
    fetchData();
  }, []);
  const onClickHandle = id => {props.history.push(`/episodes/${id}`)};
  const formatCrawl = (i, words) => {
    if (movie) {

      return (
        movie[i].node.openingCrawl
          .split(" ")
          .slice(0, words)
          .join(" ") + "..."
      );
    }
    return "";
  };
  return (
    <>
      <MoviesList>
        {movie &&
          movie.map((m, i) => {
            return (
              <CartMovie
                key={movie && m.node.episodeId}
                url={movie && m.node.image}
                title={movie && m.node.title}
                openingCrawl={movie && formatCrawl(i, 15)}
                onClick={()=>onClickHandle(m.node.episodeId)}
              />
            );
          })}
      </MoviesList>
    </>
  );
};

export default withRouter( withTheme(MovieList));
