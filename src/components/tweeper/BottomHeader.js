import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import atoms from "../atoms";
import molecules from "../molecules";
import { CuriousCatSvgIcon } from "./SvgIcons";

const { AppBar, Avatar, Badge, Icon, Toolbar } = atoms;
const { Tabs, Tab, ListItem, InputAdornment } = molecules;

const useStyles = makeStyles({
  appBar: {
    top: "auto",
    bottom: 0
  },
  spaceEvenly: { flexGrow: 1 }
});

const BottomHeader = ({ page }) => {
  const classes = useStyles();

  const pages = ["social", "communities", "profile", "inbox", "notifications"];

  let active = pages.indexOf(page);
  active === -1 ? (active = 0) : (active = active);

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <div className={classes.spaceEvenly}>
          <Tabs variant="fullWidth" textColor="primary" value={active}>
            <Tab component={Link} to="/" icon={<Icon>public</Icon>} />

            <Tab component={Link} to="/communities" icon={<Icon>group</Icon>} />
            <Tab
              component={Link}
              to="/profile"
              icon={<Icon>account_circle</Icon>}
            />
            <Tab
              component={Link}
              to="/inbox"
              icon={
                <Badge number badgeContent={1}>
                  <Icon>mail</Icon>
                </Badge>
              }
            />
            <Tab
              component={Link}
              to="/notifications"
              icon={
                <Badge number badgeContent={2}>
                  <Icon>notifications</Icon>
                </Badge>
              }
            />
          </Tabs>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default BottomHeader;
