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
  button: { marginLeft: "auto", marginTop: "1em" },
  rightIcon: { marginLeft: 5 }
});

const { Avatar, IconButton, Icon, Typography } = atoms;

function Notification({ username, time, avatar, text }) {
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  return (
    <Fragment>
      <ListItem button className={classes.root}>
        <Grid container justify="space-between">
          <Grid item>
            <Typography bold inline>
              {username}
            </Typography>
            {" liked your post "}
            <Typography light inline>
              ·
            </Typography>{" "}
            <Typography light inline>
              {time}
            </Typography>
          </Grid>
          <Grid item>
            <Icon light text>
              close
            </Icon>
          </Grid>
        </Grid>

        <Grid container spacing={3} wrap="nowrap">
          <Grid item>
            <Avatar medium alt="Avatar" src={avatar} />
          </Grid>
          <Grid item>
            <Typography>{text}</Typography>
          </Grid>
        </Grid>
      </ListItem>
    </Fragment>
  );
}

export default Notification;
