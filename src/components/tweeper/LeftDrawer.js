import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import atoms from "../atoms";
import {
  CuriousCatSvgIcon,
  DarkThemeSvgIcon,
  TwitterSvgIcon,
  FacebookSvgIcon,
  AdvertisementSvgIcon,
  TosSvgIcon,
  CookiesSvgIcon
} from "./SvgIcons";

const { Icon } = atoms;

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

const LeftDrawer = () => {
  const classes = useStyles();

  return (
    <div className={classes.list} role="presentation">
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <CuriousCatSvgIcon /> : <TwitterSvgIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default LeftDrawer;
