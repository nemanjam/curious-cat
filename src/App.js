import React from "react";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import "./pages/tweeper/Profile";
import Profile from "./pages/tweeper/Profile";
import Social from "./pages/tweeper/Social";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/discover" render={() => <div>discover</div>} />
        <Route path="/communities" render={() => <div>communities</div>} />
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/" render={() => <Social />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
