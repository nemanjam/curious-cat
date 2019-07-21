import React from "react";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import "./pages/tweeper/Profile";
import Profile from "./pages/tweeper/Profile";
import Social from "./pages/tweeper/Social";
import Discover from "./pages/tweeper/Discover";
import Inbox from "./pages/tweeper/Inbox";
import Notifications from "./pages/tweeper/Notifications";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/discover" render={() => <Discover />} />
        <Route path="/communities" render={() => <div>communities</div>} />
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/inbox" render={() => <Inbox />} />
        <Route path="/notifications" render={() => <Notifications />} />
        <Route path="/" render={() => <Social />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
