import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { withTheme } from "styled-components";
import { withRouter } from "react-router-dom";

import { movies } from "../data/movies";
import CartEpisodeDetail from "../components/EpisodeDetail/CartEpisodeDetail";

const EpisodesPage = styled.div`
  height: 100vh;
`;
const EpisodeDetail = props => {
const roman={
    '1':'I',
    '2':"II",
    '3':"III",
    '4':"IV",
    '5':"V",
    '6':"VI",
    '7':"VII"
}
  const [movie, setMovie] = useState(null);
  const [title, setTitle] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
    const ep=props.match.params.episodeId
      const result = await movies;
      if (result) {
        const episode = result.data.allEpisodes.edges.find(x => {
          //   console.log(x.node.episodeId);
          return x.node.episodeId.toString() === ep;
        });
        setMovie(episode.node);
        setTitle(`Star Wars: Episode ${roman[ep]}`)
      }
    };
    fetchData();
  }, []);
  return (
    <EpisodesPage>
      {console.log(movie)}
      <CartEpisodeDetail url={movie && movie.image} title={title} subTitle={movie&&movie.title}/>
    </EpisodesPage>
  );
};

export default withRouter(withTheme(EpisodeDetail));
