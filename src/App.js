import React from "react";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import "./pages/tweeper/Profile";
import Profile from "./pages/tweeper/Profile";
import Social from "./pages/tweeper/Social";
import Discover from "./pages/tweeper/Discover";
import Inbox from "./pages/tweeper/Inbox";
import Notifications from "./pages/tweeper/Notifications";
import Layout from "./pages/tweeper/Layout";
import Communities from "./pages/tweeper/Communities";
import RouteWithLayout from "./pages/tweeper/RouteWithLayout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
       <RouteWithLayout
        component={Discover}
        path="/discover"
        layout={Layout}
        layoutProps={{page: "discover"}}
      />
       <RouteWithLayout
        component={Communities}
        path="/communities"
        layout={Layout}
        layoutProps={{page: "communities"}}
      />
       <RouteWithLayout
        component={Profile}
        path="/profile"
        layout={Layout}
        layoutProps={{page: "profile"}}
      />
       <RouteWithLayout
        component={Inbox}
        path="/inbox"
        layout={Layout}
        layoutProps={{page: "inbox"}}
      />
       <RouteWithLayout
        component={Notifications}
        path="/notifications"
        layout={Layout}
        layoutProps={{page: "notifications"}}
      />
       <RouteWithLayout
        component={Social}
        path="/"
        layout={Layout}
        layoutProps={{page: "social"}}
      />     
      </Switch>
    </BrowserRouter>
  );
}

export default App;
