import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import { styled } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

import Header from "../../components/tweeper/Header";
import Post from "../../components/tweeper/Post";
import WhoToFollow from "../../components/tweeper/WhoToFollow";
import AskSomething from "../../components/tweeper/AskSomething";
import ProfileHeader from "../../components/tweeper/ProfileHeader";
import theme from "../../theme/tweeper/theme";
import withTheme from "./withTheme";
import { posts } from "./data";

const Content = styled("div")({
  maxWidth: 1000,
  padding: theme.spacing(4),
  margin: "auto"
});

const useStyles = makeStyles({
  numbersFont: {
    fontSize: "1.75em",
    fontWeight: "300"
  },
  textNumbersFont: {
    fontWeight: "350"
  }
});

function Profile() {
  const classes = useStyles();

  return (
    <Content>
      <ProfileHeader />
      <Grid container spacing={2}>
        <Grid item md={4} sm={12} xs={12}>
          <Box mb="10px">
            <AskSomething />
          </Box>
          <Hidden smDown>
            <Box mb="10px">
              <WhoToFollow />
            </Box>
          </Hidden>
        </Grid>
        <Grid item md={8} sm={12} xs={12}>
          <Grid container direction="column" spacing={2}>
            {posts().map((post, index) => (
              <Grid key={index} item>
                <Post {...post} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Content>
  );
}

export default withTheme(theme)(Profile);
