import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Box from "@material-ui/core/Box";
import atoms from "../atoms";

const useStyles = makeStyles({
  root: {
    padding: "1rem 10px",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  verticalBar: {
    height: "100%",
    width: 3,
    backgroundColor: "#657786"
  }
});

const { Avatar, IconButton, Icon, Typography } = atoms;

function Tweet() {
  const classes = useStyles();

  return (
    <ListItem button className={classes.root}>
      <Box mb="5px">
        <Grid container spacing={1}>
          <Grid item>
            <Box
              display="flex"
              height="100%"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Icon light text>
                cached
              </Icon>
            </Box>
          </Grid>
          <Grid item>
            <Typography bold inline>
              MyUsername
            </Typography>
          </Grid>
          <Grid item>
            <Typography>shared this post</Typography>
          </Grid>
        </Grid>
      </Box>

      <Box mb="2em">
        <Grid container spacing={2}>
          <Grid item>
            <div className={classes.verticalBar} />
          </Grid>
          <Grid item>
            <Typography bold inline>
              CuriousCat
            </Typography>{" "}
            <Typography light inline>
              ·
            </Typography>{" "}
            <Typography light inline>
              10d
            </Typography>
            <Typography>
              Welcome to Curious Cat! We're happy to have you here 😻 Have fun
              and be nice!
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={3} wrap="nowrap">
        <Grid item>
          <Avatar
            medium
            alt="Avatar"
            src="https://pbs.twimg.com/profile_images/1096807971374448640/rVCDhxkG_200x200.png"
          />
        </Grid>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography bold inline>
                MyUsername
              </Typography>{" "}
              <Typography light inline>
                ·
              </Typography>{" "}
              <Typography light inline>
                15d
              </Typography>
              <Typography>
                In a way CSS is like Redux. You can learn the rules quickly.
                That may mislead you into thinking. Trade same
              </Typography>
            </Grid>
            <Grid container item justify="space-around" xs={12}>
              <Box ml="-12px" display="inline-flex" alignItems="center">
                <IconButton>
                  <Icon light text>
                    mode_comment
                  </Icon>
                </IconButton>
                <Typography light inline>
                  24
                </Typography>
              </Box>
              <Box ml="32px" display="inline-flex" alignItems="center">
                <IconButton success>
                  <Icon light text>
                    cached
                  </Icon>
                </IconButton>
                <Typography light inline success>
                  122
                </Typography>
              </Box>
              <Box ml="32px" display="inline-flex" alignItems="center">
                <IconButton danger>
                  <Icon light text>
                    favorite_border
                  </Icon>
                </IconButton>
                <Typography light inline danger>
                  661
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ListItem>
  );
}

export default Tweet;
