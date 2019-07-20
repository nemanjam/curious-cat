import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import { styled } from "@material-ui/core/styles";
import Header from "../../components/tweeper/Header";
import Tweet from "../../components/tweeper/Tweet";
import TrackWho from "../../components/tweeper/TrackWho";
import AskSomething from "../../components/tweeper/AskSomething";
import AccordingWhom from "../../components/tweeper/AccordingWhom";
import theme from "../../theme/tweeper/theme";
import withTheme from "./withTheme";
import atoms from "../../components/atoms";
import molecules from "../../components/molecules";

const { Avatar, Icon, Typography, Button } = atoms;
const { Tabs, Tab } = molecules;

const Content = styled("div")({
  maxWidth: 1000,
  padding: theme.spacing(4),
  margin: "auto"
});

const Feed = styled("div")({
  backgroundColor: "#fff"
});

function Profile() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Content>
        <Grid container sm={12} style={{ marginBottom: 15 }}>
          <Grid
            style={{ backgroundColor: "#ccd6dd" }}
            item
            container
            direction="column"
            alignItems="center"
          >
            <Grid item>
              <Avatar
                style={{ marginBottom: 9, marginTop: 10 }}
                ultraLarge
                bordered
                alt="My profile"
                src={
                  "https://cc-media-foxit.fichub.com/image/fox-it-mondofox/e8c0f288-781d-4d0b-98ad-fd169782b53b/scene-sottacqua-per-i-sequel-di-avatar-maxw-654.jpg"
                }
              />
            </Grid>
            <Grid item>
              <Typography component="h1" primary inline gutterBottom>
                MyUsername
              </Typography>
              <Icon text>edit</Icon>
            </Grid>
            <Grid item>
              <Button variant="contained" className={""}>
                Share
              </Button>
            </Grid>
            <Box
              item
              mt="5px"
              mb="15px"
              style={{ width: "100%", textAlign: "center" }}
            >
              <Grid container justify="space-around">
                <Grid item>
                  <Typography>Answers</Typography>
                  <Typography component="" primary>
                    123
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>Followers</Typography>
                  <Typography>123</Typography>
                </Grid>
                <Grid item>
                  <Typography>Following</Typography>
                  <Typography>123</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item sm={4}>
            <Box mb="10px">
              <AskSomething />
            </Box>
            <Box mb="10px">
              <TrackWho />
            </Box>
          </Grid>
          <Grid item sm={8}>
            <Feed>
              <Tweet />
            </Feed>
          </Grid>
        </Grid>
      </Content>
    </React.Fragment>
  );
}

export default withTheme(theme)(Profile);
