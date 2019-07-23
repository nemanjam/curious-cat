import React from "react";
import Grid from "@material-ui/core/Grid";
import { styled } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";

import WhoToFollow from "../../components/tweeper/WhoToFollow";
import Options from "../../components/tweeper/Options";
import theme from "../../theme/tweeper/theme";
import atoms from "../../components/atoms";
import molecules from "../../components/molecules";
import withTheme from "./withTheme";

const tileData = [
  {
    img:
      "https://aws.curiouscat.me/media/1fdf699f-8a4e-4162-bc9a-1c5b4bda475f.jpg",
    title: "Question Exchange",
    members: "39.79K members",
    posts: "53.25K posts"
  },
  {
    img:
      "https://aws.curiouscat.me/media/1fdf699f-8a4e-4162-bc9a-1c5b4bda475f.jpg",
    title: "Question Exchange",
    members: "39.79K members",
    posts: "53.25K posts"
  },
  {
    img:
      "https://aws.curiouscat.me/media/1fdf699f-8a4e-4162-bc9a-1c5b4bda475f.jpg",
    title: "Question Exchange",
    members: "39.79K members",
    posts: "53.25K posts"
  },
  {
    img:
      "https://aws.curiouscat.me/media/1fdf699f-8a4e-4162-bc9a-1c5b4bda475f.jpg",
    title: "Question Exchange",
    members: "39.79K members",
    posts: "53.25K posts"
  },
  {
    img:
      "https://aws.curiouscat.me/media/1fdf699f-8a4e-4162-bc9a-1c5b4bda475f.jpg",
    title: "Question Exchange",
    members: "39.79K members",
    posts: "53.25K posts"
  },
  {
    img:
      "https://aws.curiouscat.me/media/1fdf699f-8a4e-4162-bc9a-1c5b4bda475f.jpg",
    title: "Question Exchange",
    members: "39.79K members",
    posts: "53.25K posts"
  }
];

const { Icon } = atoms;
const { InputAdornment } = molecules;

const Content = styled("div")({
  maxWidth: 1000,
  padding: theme.spacing(4),
  margin: "auto"
});

const useStyles = makeStyles({
  title: {},
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  }
});

function Communities({ width }) {
  const classes = useStyles();

  const getGridListCols = () => {
    if (isWidthUp("sm", width)) return 1;
    else return 2;
  };

  return (
    <Content>
      <Grid container spacing={2}>
        <Hidden smDown>
          <Grid item container direction="column" spacing={2} md={4}>
            <Grid item>
              <WhoToFollow />
            </Grid>
            <Grid item>
              <Options />
            </Grid>
          </Grid>
        </Hidden>
        <Grid item md={8} sm={12} xs={12}>
          <GridList cellHeight={180} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
              <ListSubheader component="div" style={{ padding: 0 }}>
                <Paper elevation={0} style={{ borderRadius: 0, padding: 10 }}>
                  <Grid container justify="space-between" alignContent="center">
                    <Grid item>
                      <Icon>search</Icon>
                      <span>Top Communities</span>
                    </Grid>
                    <Grid item>
                      <Icon>search</Icon>
                      <Icon>search</Icon>
                      <Icon>search</Icon>
                      <Icon>menu</Icon>
                    </Grid>
                  </Grid>
                </Paper>
              </ListSubheader>
            </GridListTile>
            {tileData.map(tile => (
              <GridListTile key={tile.img} cols={getGridListCols()}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                  title={tile.title}
                  subtitle={
                    <Grid container justify="space-between">
                      <Grid item>{tile.members}</Grid>
                      <Grid item>{tile.posts}</Grid>
                    </Grid>
                  }
                  classes={{
                    root: classes.titleBar,
                    title: classes.title
                  }}
                />
              </GridListTile>
            ))}
          </GridList>
        </Grid>
      </Grid>
    </Content>
  );
}

export default withTheme(theme)(withWidth()(Communities));
