import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

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
  },
  textField: {
    width: "100%",
    padding: 10
  },
  paper: {
    width: "100%",
    border: "1px solid #e6ecf0",
    marginTop: 10
  },
  text: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: "-15px"
  },
  action: {
    paddingLeft: 15,
    paddingRight: 5,
    marginTop: "-5px"
  }
});

const { Avatar, IconButton, Icon, Typography } = atoms;

function Post({ sharedBy, question, answer }) {
  const [hideQuestion, setHideQuestion] = useState(true);
  const classes = useStyles();

  const toggleQuestion = event => {
    setHideQuestion(prevHideQuestion => !prevHideQuestion);
  };

  return (
    <ListItem className={classes.root}>
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
          <Grid container spacing={2} wrap="nowrap">
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
                <IconButton onClick={toggleQuestion}>
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
      {!hideQuestion && (
        <Paper elevation="0" square className={classes.paper}>
          <Typography light className={classes.text}>
            Asking a question in relation to the answer above
          </Typography>
          <TextField
            id="filled-multiline-static"
            label="Ask something"
            multiline
            rows="2"
            placeholder="I want to ask you about..."
            className={classes.textField}
            margin="normal"
            variant="filled"
          />
          <Grid
            container
            justify="space-between"
            alignItems="center"
            className={classes.action}
          >
            <Grid item>
              <FormControlLabel
                control={
                  <Switch
                    value="checkedF"
                    inputProps={{ "aria-label": "ask anon" }}
                  />
                }
                label="Anon"
              />
            </Grid>
            <Grid item>
              <IconButton className={classes.askButton} aria-label="Ask">
                <Icon>send</Icon>
              </IconButton>
            </Grid>
          </Grid>
        </Paper>
      )}
    </ListItem>
  );
}

export default Post;
