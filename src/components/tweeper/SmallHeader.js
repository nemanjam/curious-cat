import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import atoms from "../atoms";
import molecules from "../molecules";
import { CuriousCatSvgIcon } from "./SvgIcons";

const { AppBar, Avatar, Badge, Icon, Toolbar } = atoms;
const { Tabs, Tab, ListItem, InputAdornment } = molecules;

const SmallHeader = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid container justify="space-between" alignItems="center" spacing={2}>
          <Grid item>
            <Icon light>menu</Icon>
          </Grid>
          <Grid item>
            <Link to="/">
              <Avatar
                alt="My profile"
                style={{ backgroundColor: "white", marginTop: 9 }}
              >
                <CuriousCatSvgIcon style={{ color: "#657786" }} />
              </Avatar>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/discover">
              <Icon light>search</Icon>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default SmallHeader;
