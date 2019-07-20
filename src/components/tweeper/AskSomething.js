import React from "react";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import atoms from "../atoms";

const { Typography, Icon } = atoms;

const useStyles = makeStyles(theme => ({
  root: { borderRadius: 0, boxShadow: "0px 0px" },
  textField: {
    width: "100%"
  },
  askButton: { marginLeft: "auto" },
  cardContent: { paddingBottom: 0 },
  cardActions: { paddingLeft: 25, paddingRight: 15 }
}));

function AskSomething() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <TextField
          id="filled-multiline-static"
          label="Ask something"
          multiline
          rows="4"
          placeholder="I want to ask you about..."
          className={classes.textField}
          margin="normal"
          variant="filled"
        />
      </CardContent>
      <CardActions className={classes.cardActions}>
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
      </CardActions>
    </Card>
  );
}

export default AskSomething;
