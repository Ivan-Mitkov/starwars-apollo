import React from 'react';
import MovieList from '../containers/MovieList';
import styled from "styled-components";
import { withTheme } from "styled-components";

const EpisodesPage=styled.div`

height:100vh;
`;
const Episodes = () => {
    return (
        <EpisodesPage>
            <MovieList/>
        </EpisodesPage>
    )
}

export default withTheme(Episodes)
