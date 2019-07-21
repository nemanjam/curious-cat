import React from "react";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { makeStyles } from "@material-ui/core/styles";
import atoms from "../atoms";
import { Grid } from "@material-ui/core";

const { Avatar, Typography, Icon } = atoms;

const twitterList = [
  {
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    primary: "Yeoman",
    secondary: "@whatsup yeo"
  },
  {
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    primary: "GGWP",
    secondary: "@goodgamewellplay"
  },
  {
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    primary: "Sawasdee",
    secondary: "@helloTH"
  }
];

const useStyles = makeStyles({
  root: {},
  refreshIcon: { marginTop: 4 }
});

function WhoToFollow() {
  const classes = useStyles();

  return (
    <List
      subheader={
        <ListSubheader component="div">
          <Grid container justify="space-between">
            <span>Who to follow </span>
            <Icon light text className={classes.refreshIcon}>
              cached
            </Icon>
          </Grid>
        </ListSubheader>
      }
    >
      {twitterList.map(({ image, primary, secondary }) => (
        <React.Fragment key={primary}>
          <ListItem button>
            <Avatar alt="Avatar" link src={image} />
            <ListItemText primary={primary} secondary={secondary} />
            <Button variant="outlined" color="primary">
              Follow
            </Button>
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
}

export default WhoToFollow;
