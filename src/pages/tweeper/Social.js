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
import Options from "../../components/tweeper/Options";
import ProfileHeader from "../../components/tweeper/ProfileHeader";
import theme from "../../theme/tweeper/theme";
import withTheme from "./withTheme";

const posts = [
  {
    sharedBy: "MyUsername",
    question: {
      username: "CuriousCat",
      time: "10d",
      text:
        "Welcome to Curious Cat! We're happy to have you here 😻 Have fun and be nice!"
    },
    answer: {
      avatar:
        "https://pbs.twimg.com/profile_images/1096807971374448640/rVCDhxkG_200x200.png",
      username: "MyUsername",
      time: "11d",
      text:
        "In a way CSS is like Redux. You can learn the rules quickly. That may mislead you into thinking. Trade same",
      likedCount: "5"
    }
  },
  {
    answer: {
      avatar:
        "https://pbs.twimg.com/profile_images/1096807971374448640/rVCDhxkG_200x200.png",
      username: "MyUsername",
      time: "11d",
      text:
        "In a way CSS is like Redux. You can learn the rules quickly. That may mislead you into thinking. Trade same",
      likedCount: "5"
    }
  }
];

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

function Social() {
  const classes = useStyles();

  return (
    <Content>
      <Grid container spacing={2}>
        <Hidden smDown>
          <Grid item container direction="column" spacing={2} md={4}>
            <Grid item>
              <WhoToFollow />
            </Grid>
            <Grid item>
              <Options />
            </Grid>
          </Grid>
        </Hidden>
        <Grid item md={8} sm={12} xs={12}>
          <Grid container direction="column" spacing={2}>
            {posts.map((post, index) => (
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

export default withTheme(theme)(Social);
