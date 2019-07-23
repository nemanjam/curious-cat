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

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/discover"
          render={() => (
            <Layout page="discover">
              <Discover />
            </Layout>
          )}
        />
        <Route
          path="/communities"
          render={() => (
            <Layout page="communities">
              <Communities />
            </Layout>
          )}
        />
        <Route
          path="/profile"
          render={() => (
            <Layout page="profile">
              <Profile />
            </Layout>
          )}
        />
        <Route
          path="/inbox"
          render={() => (
            <Layout page="inbox">
              <Inbox />
            </Layout>
          )}
        />
        <Route
          path="/notifications"
          render={() => (
            <Layout page="notifications">
              <Notifications />
            </Layout>
          )}
        />
        <Route
          path="/"
          render={() => (
            <Layout page="social">
              <Social />
            </Layout>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
