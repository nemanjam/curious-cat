import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
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

const { Icon, Divider } = atoms;

const useStyles = makeStyles({
  listItem: {
    paddingTop: 10,
    paddingBottom: 10
  },
  list: {
    width: "auto",
    paddingTop: 53
  },
  svgIcons: {
    width: 20,
    height: 20,
    color: "#657786"
  }
});

const LeftDrawer = () => {
  const classes = useStyles();

  return (
    <div className={classes.list} role="presentation">
      <List>
        <ListItem className={classes.listItem} button>
          <ListItemIcon>
            <Icon light>settings</Icon>
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem} button>
          <ListItemIcon>
            <Icon light>contact_support</Icon>
          </ListItemIcon>
          <ListItemText primary="Quizzes" />
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem} button>
          <ListItemIcon>
            <Icon light>info</Icon>
          </ListItemIcon>
          <ListItemText primary="About us" />
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem} button>
          <ListItemIcon>
            <Icon light>warning</Icon>
          </ListItemIcon>
          <ListItemText primary="Safety" />
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem} button>
          <ListItemIcon>
            <Icon light>contact_support</Icon>
          </ListItemIcon>
          <ListItemText primary="Support" />
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem} button>
          <ListItemIcon>
            <CuriousCatSvgIcon className={classes.svgIcons} />
          </ListItemIcon>
          <ListItemText primary="Curious Cat" />
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem} button>
          <ListItemIcon>
            <TwitterSvgIcon className={classes.svgIcons} />
          </ListItemIcon>
          <ListItemText primary="Twitter" />
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem} button>
          <ListItemIcon>
            <FacebookSvgIcon className={classes.svgIcons} />
          </ListItemIcon>
          <ListItemText primary="Facebook" />
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem} button>
          <ListItemIcon>
            <AdvertisementSvgIcon className={classes.svgIcons} />
          </ListItemIcon>
          <ListItemText primary="Advertisment" />
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem} button>
          <ListItemIcon>
            <TosSvgIcon className={classes.svgIcons} />
          </ListItemIcon>
          <ListItemText primary="Terms Of Service" />
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem} button>
          <ListItemIcon>
            <Icon light>lock</Icon>
          </ListItemIcon>
          <ListItemText primary="Privacy Policy" />
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem} button>
          <ListItemIcon>
            <CookiesSvgIcon className={classes.svgIcons} />
          </ListItemIcon>
          <ListItemText primary="Cookie Policy" />
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem} button>
          <ListItemIcon>
            <DarkThemeSvgIcon className={classes.svgIcons} />
          </ListItemIcon>
          <ListItemText primary="Enable dark theme" />
        </ListItem>
        <Divider />
      </List>
    </div>
  );
};

export default LeftDrawer;
