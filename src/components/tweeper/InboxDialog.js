import React, { Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import atoms from "../atoms";

const useStyles = makeStyles({
  root: {},
  textField: { width: "100%", marginTop: "2em", marginBottom: "1em" },
  div: {
    padding: "1em",
    border: "1px solid #e6ecf0"
  }
});

const { IconButton, Icon, Typography } = atoms;

function InboxDialog({ open, onClose, username, question }) {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      aria-labelledby="form-dialog-title"
    >
      <DialogContent>
        <div className={classes.div}>
          <Typography bold inline>
            {username}
          </Typography>{" "}
          <Typography light inline>
            asked
          </Typography>
          <Typography light className={classes.text}>
            {question}
          </Typography>
        </div>
        <TextField
          id="filled-multiline-static"
          multiline
          rows="3"
          placeholder="Write reply"
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
            <Grid item container alignContent="center">
              <Icon>camera_alt</Icon>
              <span>Add image</span>
              <Icon>gif</Icon>
              <span>Add GIF</span>
            </Grid>
          </Grid>
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

            <IconButton className={classes.askButton} aria-label="Ask">
              <Icon>send</Icon>
            </IconButton>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

export default InboxDialog;
