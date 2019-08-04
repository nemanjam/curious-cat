import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

import InboxPost from "../../components/tweeper/InboxPost";
import WhoToFollow from "../../components/tweeper/WhoToFollow";
import Options from "../../components/tweeper/Options";

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
  );
}

export default Inbox;
