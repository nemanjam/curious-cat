import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import { styled } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../components/tweeper/Header";
import Tweet from "../../components/tweeper/Tweet";
import TrackWho from "../../components/tweeper/TrackWho";
import AskSomething from "../../components/tweeper/AskSomething";
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
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Content>
        <Grid container spacing={2}>
          <Grid item sm={4}>
            <Box mb="10px">
              <TrackWho />
            </Box>
          </Grid>
          <Grid item sm={8}>
            <Grid container direction="column" spacing={2}>
              {posts.map((post, index) => (
                <Grid key={index} item>
                  <Tweet {...post} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Content>
    </React.Fragment>
  );
}

export default withTheme(theme)(Social);
