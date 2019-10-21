import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { withTheme } from "styled-components";
import { withRouter } from "react-router-dom";
import { persons as movies } from "../data/peoples";
import People from "../components/EpisodeDetail/PersonEpisodeDetail";

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
const MovieList = props => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const ep = props.match.params.episodeId;

      const result = await movies;
      if (result) {
        const episode = result.data.allEpisodes.edges.find(x => {
          // console.log(x.node.episodeId);
          return x.node.episodeId.toString() === ep;
        });
        if (episode) {
          // console.log(episode.node.people.edges);
          const personsInEpisode = episode.node.people.edges.map(x => x.node);
          // const searchedMovie=result.data.allEpisodes.edges.find()
          // console.log(personsInEpisode);
          setMovie(personsInEpisode);
        } else {
          const newEpisode = result.data.allEpisodes.edges.find(x => {
            // console.log(x.node.episodeId);
            return x.node.episodeId.toString() === '1';
          });
          // console.log(episode.node.people.edges);
          const personsInFirstEpisode = newEpisode.node.people.edges.map(
            x => x.node
          );
          // const searchedMovie=result.data.allEpisodes.edges.find()
          // console.log(personsInEpisode);
          setMovie(personsInFirstEpisode);
        }
      }
    };
    fetchData();
  }, []);
  const onClickHandle = id => {
    props.history.push(`/characters/${id}`);
  };

  return (
    <>
      <PeopleList>
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
      </PeopleList>
    </>
  );
};

export default withRouter(withTheme(MovieList));
