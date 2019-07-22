import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import LeftDrawer from "../tweeper/LeftDrawer";
import atoms from "../atoms";
import molecules from "../molecules";
import { CuriousCatSvgIcon } from "./SvgIcons";

const { AppBar, Avatar, Badge, Icon, Toolbar } = atoms;
const { Tabs, Tab, ListItem, InputAdornment, Drawer } = molecules;

const SmallHeader = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <Fragment>
      <AppBar position="sticky">
        <Toolbar>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Icon onClick={toggleDrawer(true)} light>
                menu
              </Icon>
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

      <Drawer categoryText open={isDrawerOpen} onClose={toggleDrawer(false)}>
        {LeftDrawer()}
      </Drawer>
    </Fragment>
  );
};

export default SmallHeader;
