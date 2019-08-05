import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import atoms from "../atoms";
import molecules from "../molecules";
import { CuriousCatSvgIcon } from "./SvgIcons";

const { AppBar, Avatar, Badge, Icon, Toolbar } = atoms;
const { Tabs, Tab, ListItem, InputAdornment } = molecules;

const useStyles = makeStyles(theme => ({
  svgLogo: {
    color: theme.palette.text.secondary
  },
}));

const Header = ({ page }) => {
  const classes = useStyles();

  const pages = [
    "social",
    "discover",
    "communities",
    "profile",
    "inbox",
    "notifications"
  ];

  let active = pages.indexOf(page);
  active === -1 ? (active = 0) : (active = active);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid container alignItems="center" spacing={2}>
          <Grid item sm={2}>
            <Avatar
              alt="My profile"
              style={{ backgroundColor: "white", marginTop: 9 }}
            >
              <CuriousCatSvgIcon className={classes.svgLogo} />
            </Avatar>
          </Grid>
          <Grid item sm={10}>
            <Tabs value={active} textColor="primary">
              <Tab
                component={Link}
                to="/"
                label="Social"
                icon={<Icon>public</Icon>}
              />
              <Tab
                component={Link}
                to="/discover"
                label="Discover"
                icon={<Icon>search</Icon>}
              />
              <Tab
                component={Link}
                to="/communities"
                label="Communities"
                icon={<Icon>group</Icon>}
              />
              <Tab
                component={Link}
                to="/profile"
                label="Profile"
                icon={<Icon>account_circle</Icon>}
              />
              <Tab
                component={Link}
                to="/inbox"
                label="Inbox"
                icon={
                  <Badge number badgeContent={1}>
                    <Icon>mail</Icon>
                  </Badge>
                }
              />
              <Tab
                component={Link}
                to="/notifications"
                label="Notifications"
                icon={
                  <Badge number badgeContent={2}>
                    <Icon>notifications</Icon>
                  </Badge>
                }
              />
            </Tabs>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
