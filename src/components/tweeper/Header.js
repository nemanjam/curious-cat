import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Hidden from "@material-ui/core/Hidden";
import ListItemText from "@material-ui/core/ListItemText";
import atoms from "../atoms";
import molecules from "../molecules";

const { AppBar, Avatar, Badge, Icon, Toolbar } = atoms;
const { Tabs, Tab, ListItem, InputAdornment } = molecules;

const Header = () => (
  <AppBar position="sticky">
    <Toolbar>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={6} sm={10}>
          <Tabs value={0}>
            <Tab label="Social" icon={<Icon>public</Icon>} />
            <Tab label="Discover" icon={<Icon>search</Icon>} />
            <Tab label="Communities" icon={<Icon>group</Icon>} />
            <Tab label="Profile" icon={<Icon>account_circle</Icon>} />
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
        <Grid item xs={6} sm="auto">
          <ListItem>
            <Avatar
              alt="My profile"
              src="https://pbs.twimg.com/profile_images/1060539954361622533/-9ofKMvA_bigger.jpg"
            />
            <ListItemText primary="siriwatknp" />
          </ListItem>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default Header;
