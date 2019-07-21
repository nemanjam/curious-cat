import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { Paper } from "@material-ui/core";
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

const { Typography, Icon } = atoms;

const useStyles = makeStyles({
  root: {
    padding: 10,
    borderRadius: 0,
    boxShadow: "0 0"
  },
  formControl: {
    margin: 5,
    minWidth: 120
  },
  svgIcons: {
    width: 14,
    height: 14
  }
});

function Options() {
  const classes = useStyles();

  const [values, setValues] = useState({
    age: "",
    name: "hai"
  });

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  }

  return (
    <Paper className={classes.root}>
      <Box>
        <Icon text>settings</Icon>
        <Typography inline secondary>
          Settings
        </Typography>
        <Icon text>contact_support</Icon>
        <Typography inline secondary>
          Quizzes
        </Typography>
        <Icon text>info</Icon>
        <Typography inline secondary>
          About us
        </Typography>
        <Icon text>warning</Icon>
        <Typography inline secondary>
          Safety
        </Typography>
      </Box>
      <Box>
        <Icon text>contact_support</Icon>
        <Typography inline secondary>
          Support
        </Typography>
        <CuriousCatSvgIcon className={classes.svgIcons} />
        <Typography inline secondary>
          CuriousCat
        </Typography>
        <TwitterSvgIcon className={classes.svgIcons} />
        <Typography inline secondary>
          Twitter
        </Typography>
        <FacebookSvgIcon className={classes.svgIcons} />
        <Typography inline secondary>
          Facebook
        </Typography>
      </Box>
      <Box>
        <AdvertisementSvgIcon className={classes.svgIcons} />
        <Typography inline secondary>
          Advertisment
        </Typography>
        <TosSvgIcon className={classes.svgIcons} />
        <Typography inline secondary>
          Terms of service
        </Typography>
      </Box>
      <Box>
        <Icon text>lock</Icon>
        <Typography inline secondary>
          Privacy Policy
        </Typography>
        <CookiesSvgIcon className={classes.svgIcons} />
        <Typography inline secondary>
          Cookie Policy
        </Typography>
      </Box>
      <Box style={{ display: "flex", alignItems: "center" }}>
        <FormControl className={classes.formControl}>
          <Select
            style={{ borderRadius: 0 }}
            value={values.age}
            onChange={handleChange}
            inputProps={{
              name: "language",
              id: "language"
            }}
          >
            <MenuItem value={10}>English</MenuItem>
            <MenuItem value={20}>Deutsch</MenuItem>
            <MenuItem value={30}>France</MenuItem>
          </Select>
        </FormControl>
        <Icon text>exit_to_app</Icon>
        <Typography inline secondary>
          Logout
        </Typography>
      </Box>
      <Box>
        <DarkThemeSvgIcon className={classes.svgIcons} />
        <Typography inline secondary>
          Enable dark theme
        </Typography>
      </Box>
      {/* <Typography>normal</Typography>
      <Typography primary>primary</Typography>
      <Typography secondary>secondary</Typography>
      <Typography tertiary>tertiary</Typography>
      <Typography bold>bold</Typography>
      <Typography link>link</Typography>
      <Typography inverted>inverted</Typography>
      <Typography linkInverted>linkInverted</Typography>
      <Typography tertiary light>
        <Icon>call_made</Icon> kljljljk
      </Typography> */}
    </Paper>
  );
}

export default Options;
