import React, { Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import InboxDialog from "./InboxDialog";
import atoms from "../atoms";

const useStyles = makeStyles({
  root: {
    padding: "0.5rem 10px",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "#fff"
  },
  button: { marginLeft: "auto", marginTop: "0.5rem" },
  rightIcon: { marginLeft: 5 }
});

const { Avatar, IconButton, Icon, Typography } = atoms;

function InboxPost({ description, question }) {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  const classes = useStyles();

  return (
    <Fragment>
      <ListItem button onClick={handleClickOpen} className={classes.root}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Icon light text>
              brightness_high
            </Icon>{" "}
            <Typography light inline>
              {description}
            </Typography>
          </Grid>
          <Grid item>
            <Icon light text>
              more_vert
            </Icon>
          </Grid>
        </Grid>

        <Grid container spacing={3} wrap="nowrap">
          <Grid item>
            <Avatar medium alt="Avatar" src={question.avatar} />
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item xs={12}>
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
          </Grid>
        </Grid>
        <Button className={classes.button}>
          Answer <Icon className={classes.rightIcon}>keyboard_arrow_right</Icon>
        </Button>
      </ListItem>
      <InboxDialog
        open={open}
        onClose={handleClose}
        username={question.username}
        question={question.text}
      />
    </Fragment>
  );
}

export default InboxPost;
