import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { withTheme } from "styled-components";
import { withRouter } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Loading from "../components/Loading";

// import { movies } from "../data/movies2";
import CartEpisodeDetail from "../components/EpisodeDetail/CartEpisodeDetail";
import TextEpisodeDetail from "../components/EpisodeDetail/TextEpisodeDetail";
import PeopleList from "../containers/PersonsList";

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

const EpisodesPage = styled.div`
  height: 100vh;
`;
const EpisodeDetail = props => {
  // console.log('episode detail:',props)
  const [movie, setMovie] = useState(null);
  const [title, setTitle] = useState(null);
  const roman = {
    "1": "I",
    "2": "II",
    "3": "III",
    "4": "IV",
    "5": "V",
    "6": "VI",
    "7": "VII"
  };
  // let ep = props.match.params.episodeId;
  ///from Apolo

  useEffect(() => {
    const fetchData = async () => {
      let ep = props.match.params.episodeId;
      const result = await data;
      // console.log(result)
      if (result) {
        const episode = result.allEpisodes.edges.find(x => {
          // console.log(x.node.episodeId);
          return x.node.episodeId.toString() === ep;
        });
        if (episode) {
          setMovie(episode.node);
          setTitle(`Star Wars: Episode ${roman[ep]}`);
        } else {
          const episode = result.data.allEpisodes.edges.find(x => {
            // console.log(x.node.episodeId);
            return x.node.episodeId.toString() === "1";
          });
          setMovie(episode.node);
          setTitle(`Star Wars: Episode ${roman[1]}`);
        }
      }
    };
    fetchData();
  }, [props, roman]);
  ///from Apolo
  const { loading, error, data } = useQuery(ALL_EPISODES, {
    variables: { first: 7 }
  });
  if (loading) return <Loading />;
  if (error) {
    // console.log(error);
    return <p>Error on getting all movies</p>;
  }

  const {
    allEpisodes: { edges, cursor }
  } = data;
// console.log(movie)
  return (
    <EpisodesPage>
      {/* {console.log(movie)} */}
      <CartEpisodeDetail
        url={movie && movie.image}
        title={title}
        subTitle={movie && movie.title}
      />
      <TextEpisodeDetail
        text={movie && movie.openingCrawl}
        director={movie && movie.director}
        date={movie && movie.releaseDate}
      />
      <PeopleList id={movie&&movie.id}/>
    </EpisodesPage>
  );
};

export default withRouter(withTheme(EpisodeDetail));
