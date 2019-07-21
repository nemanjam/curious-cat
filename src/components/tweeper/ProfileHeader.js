import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import atoms from "../atoms";

const { Avatar, Icon, Typography, Button } = atoms;

const useStyles = makeStyles({
  root: { marginBottom: 15 },
  avatar: { marginBottom: 9, marginTop: 10 },
  numbersFont: {
    fontSize: "1.75em",
    fontWeight: "300"
  },
  textNumbersFont: {
    fontWeight: "350"
  },
  captionGrid: { width: "100%", textAlign: "center" }
});

function ProfileHeader() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid
        style={{ backgroundColor: "#657786" }}
        item
        container
        direction="column"
        alignItems="center"
      >
        <Grid item>
          <Avatar
            className={classes.avatar}
            ultraLarge
            bordered
            alt="My profile"
            src={
              "https://cc-media-foxit.fichub.com/image/fox-it-mondofox/e8c0f288-781d-4d0b-98ad-fd169782b53b/scene-sottacqua-per-i-sequel-di-avatar-maxw-654.jpg"
            }
          />
        </Grid>
        <Grid item>
          <Typography inverted primary inline gutterBottom>
            MyUsername
          </Typography>
          <Icon text style={{ color: "white", marginLeft: 5 }}>
            edit
          </Icon>
        </Grid>
        <Grid item>
          <Button variant="contained">Share</Button>
        </Grid>
        <Grid item className={classes.captionGrid}>
          <Box mt="5px" mb="15px">
            <Grid container justify="space-around">
              <Grid item>
                <Typography inverted className={classes.textNumbersFont}>
                  Answers
                </Typography>
                <Typography inverted className={classes.numbersFont}>
                  123
                </Typography>
              </Grid>
              <Grid item>
                <Typography inverted className={classes.textNumbersFont}>
                  Followers
                </Typography>
                <Typography inverted className={classes.numbersFont}>
                  123
                </Typography>
              </Grid>
              <Grid item>
                <Typography inverted className={classes.textNumbersFont}>
                  Following
                </Typography>
                <Typography inverted className={classes.numbersFont}>
                  123
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ProfileHeader;
