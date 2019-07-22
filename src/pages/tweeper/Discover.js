import React from "react";
import Grid from "@material-ui/core/Grid";
import { styled } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";

import Post from "../../components/tweeper/Post";
import WhoToFollow from "../../components/tweeper/WhoToFollow";
import Options from "../../components/tweeper/Options";
import theme from "../../theme/tweeper/theme";
import atoms from "../../components/atoms";
import molecules from "../../components/molecules";
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

const { Icon } = atoms;
const { InputAdornment } = molecules;

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

function Discover() {
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
            <Grid item>
              <Paper
                elevation={0}
                style={{ borderRadius: 0, paddingLeft: 8, paddingRight: 8 }}
              >
                <TextField
                  id="standard-full-width"
                  style={{}}
                  placeholder="Username"
                  fullWidth
                  margin="normal"
                  InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <Icon>search</Icon>
                      </InputAdornment>
                    )
                  }}
                />
              </Paper>
            </Grid>
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

export default withTheme(theme)(Discover);
