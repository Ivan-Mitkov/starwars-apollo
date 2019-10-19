import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { withTheme } from "styled-components";
import { movies } from "../data/movies";
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
const MovieList = () => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await movies;
      if (result) {
        // console.log(result);
        setMovie((result.data.allEpisodes.edges));
      }
    };
    fetchData();
  }, []);

  const formatCrawl = (i,words) => {
    if (movie) {
    //   console.log(movie);

      return (
        movie[i].node.openingCrawl
          .split(" ")
          .slice(0, words)
          .join(" ") + "..."
      );
    //   return (
    //     movie[i].node.openingCrawl
    //       .split("")
    //       .slice(0, words)
    //       .join("") + "..."
    //   );
    }
    return "";
  };
  return (
    <>
      <MoviesList>
        {movie&&movie.map((m,i) => {
         return <CartMovie
         key={movie&&m.node.episodeId}
            url={movie && m.node.image}
            title={movie && m.node.title}
            openingCrawl={movie && formatCrawl(i,15)}
          />;
        })}

        
      </MoviesList>
    </>
  );
};

export default withTheme(MovieList);
