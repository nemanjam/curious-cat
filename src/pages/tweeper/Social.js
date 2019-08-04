import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

import Post from "../../components/tweeper/Post";
import WhoToFollow from "../../components/tweeper/WhoToFollow";
import Options from "../../components/tweeper/Options";
import { posts } from "./data";

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
          {posts().map((post, index) => (
            <Grid key={index} item>
              <Post {...post} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Social;
