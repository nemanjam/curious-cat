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
    alignItems: "flex-start",
    //marginBottom: "10px",
    backgroundColor: "#fff"
  },
  verticalBar: {
    height: "100%",
    width: 3,
    backgroundColor: "#657786"
  }
});

const { Avatar, IconButton, Icon, Typography } = atoms;

function Tweet({ sharedBy, question, answer }) {
  const classes = useStyles();

  return (
    <ListItem button className={classes.root}>
      {sharedBy && (
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
                {sharedBy}
              </Typography>
            </Grid>
            <Grid item>
              <Typography>shared this post</Typography>
            </Grid>
          </Grid>
        </Box>
      )}
      {question && (
        <Box mb="2em">
          <Grid container spacing={2}>
            <Grid item>
              <div className={classes.verticalBar} />
            </Grid>
            <Grid item>
              <Typography bold inline>
                {question.username}
              </Typography>{" "}
              <Typography light inline>
                ·
              </Typography>{" "}
              <Typography light inline>
                {question.time}
              </Typography>
              <Typography>{question.text}</Typography>
            </Grid>
          </Grid>
        </Box>
      )}
      <Grid container spacing={3} wrap="nowrap">
        <Grid item>
          <Avatar medium alt="Avatar" src={answer.avatar} />
        </Grid>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography bold inline>
                {answer.username}
              </Typography>{" "}
              <Typography light inline>
                ·
              </Typography>{" "}
              <Typography light inline>
                {answer.time}
              </Typography>
              <Typography>{answer.text}</Typography>
            </Grid>
            <Grid container item justify="space-around" xs={12}>
              <Box ml="-12px" display="inline-flex" alignItems="center">
                <IconButton>
                  <Icon light text>
                    mode_comment
                  </Icon>
                </IconButton>
              </Box>
              <Box ml="32px" display="inline-flex" alignItems="center">
                <IconButton success>
                  <Icon light text>
                    cached
                  </Icon>
                </IconButton>
              </Box>
              <Box ml="32px" display="inline-flex" alignItems="center">
                <IconButton danger>
                  <Icon light text>
                    favorite_border
                  </Icon>
                </IconButton>
                <Typography light inline danger>
                  {answer.likedCount}
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
