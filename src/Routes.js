import React from "react";
import { Switch, Route  } from "react-router-dom";

import Characters from "./pages/Characters"
import Episodes from "./pages/Episodes"
import EpisodeDetail from "./pages/Episode.detail"
import CharacterDetail from "./pages/Characters.details"
import Starship from "./pages/Starship"
// import Login from "./pages/Login"

const Routes = () => {
  return (
    <Switch>
      <Route exact component={Characters} path="/characters" />
      <Route  component={EpisodeDetail} path="/episodes/:episodeId" />
      <Route  component={CharacterDetail} path="/characters/:characterId" />
      <Route  component={Starship} path="/starships/:starshipId" />
      {/* <Route exact component={Login} path="/login" /> */}
      <Route  exact component={Episodes} path="/episodes" />
      <Route  component={Episodes} path="/" />

    </Switch>
  );
};

export default Routes;
