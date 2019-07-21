import React, { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Hidden from "@material-ui/core/Hidden";
import ListItemText from "@material-ui/core/ListItemText";
import atoms from "../atoms";
import molecules from "../molecules";

const { AppBar, Avatar, Badge, Icon, Toolbar } = atoms;
const { Tabs, Tab, ListItem, InputAdornment } = molecules;

const CuriousCatSvgIcon = fillColor => {
  return (
    <svg
      data-v-7e399e95=""
      aria-hidden="true"
      width="50"
      height="50"
      viewBox="0 0 80 80"
      focusable="false"
    >
      <path
        fill={fillColor}
        d="M39.13 0C31.07.2 23.25 2.88 16.7 7.7l-.65.5c-17.64 13.5-21.3 39.08-8.2 57.2 5 6.9 12 12.02 20 14.62-.1-.85.07-2.1-.03-3.58.7-13.03-3.3-22.05-10.54-31.1-5.3-6.55-6.14-13.98-1.6-13.97 2.54 0 9.87 2.6 12.84 4.54 1.38.9 3.06.7 6.16-.7 4.85-2.18 5.64-3.17 5.9-7.4.6-10.5 2.3-15.68 5.17-15.68 1.86 0 5.8 4.9 8.12 10.14 3.65 6.5 7.6 13.4 9.74 19.7 2.52 7.45 2.9 14.12 3.35 19.08.14 3.94.33 8.33.42 9.8 14.67-14.1 16.83-37.2 5.04-53.9C64.7 6.04 52.28-.3 39.14 0z"
      />
    </svg>
  );
};

const Header = () => {
  const [index, setIndex] = useState(0);
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid container alignItems="center" spacing={2}>
          <Grid item sm={2}>
            <ListItem>
              <Avatar
                alt="My profile"
                style={{ backgroundColor: "white", marginTop: 9 }}
              >
                <CuriousCatSvgIcon />
              </Avatar>
            </ListItem>
          </Grid>
          <Grid item sm={10}>
            <Tabs
              value={index}
              onChange={(e, val) => {
                console.log(index);
                setIndex(val);
              }}
            >
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
                label="Inbox"
                icon={
                  <Badge number badgeContent={1}>
                    <Icon>mail</Icon>
                  </Badge>
                }
              />
              <Tab
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
