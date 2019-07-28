import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { styled } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

import Header from "../../components/tweeper/Header";
import InboxPost from "../../components/tweeper/InboxPost";
import WhoToFollow from "../../components/tweeper/WhoToFollow";
import Options from "../../components/tweeper/Options";
import theme from "../../theme/tweeper/theme";
import withTheme from "./withTheme";

const posts = [
  {
    description: "Daily Question",
    question: {
      avatar: "https://cats.curiouscat.me/2018/7/1.jpg",
      username: "Anon",
      text: "Which character and which movie would you like to have played?",
      time: "24h"
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

function Inbox() {
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
                <InboxPost {...post} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Content>
  );
}

export default withTheme(theme)(Inbox);
