import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

import WhoToFollow from "../../components/tweeper/WhoToFollow";
import Options from "../../components/tweeper/Options";
import Notification from "../../components/tweeper/Notification";

const posts = [
  {
    avatar: "https://cats.curiouscat.me/2018/7/1.jpg",
    username: "MyUsername",
    text: "What is your favorite fruit?",
    time: "11s"
  }
];

const useStyles = makeStyles({
  numbersFont: {
    fontSize: "1.75em",
    fontWeight: "300"
  },
  textNumbersFont: {
    fontWeight: "350"
  }
});

function Notifications() {
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
          {posts.map((post, index) => (
            <Grid key={index} item>
              <Notification {...post} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Notifications;
