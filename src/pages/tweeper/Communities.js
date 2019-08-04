import React from "react";
import Grid from "@material-ui/core/Grid";
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
import atoms from "../../components/atoms";
import molecules from "../../components/molecules";

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
      "https://aws.curiouscat.me/media/d91000fd-318a-4b9d-8dd3-a89a6f9c8d1f.jpg",
    title: "Confessions",
    members: "39.79K members",
    posts: "53.25K posts"
  },
  {
    img:
      "https://aws.curiouscat.me/media/32314557-fb71-4488-b0e1-84d0f2d8eb64.jpg",
    title: "Music",
    members: "39.79K members",
    posts: "53.25K posts"
  },
  {
    img: "https://curiouscat.me/static/communities_default_cover.jpg",
    title: "Looking for love ones",
    members: "39.79K members",
    posts: "53.25K posts"
  },
  {
    img: "https://curiouscat.me/static/communities_default_cover.jpg",
    title: "Looking for love ones",
    members: "39.79K members",
    posts: "53.25K posts"
  },
  {
    img: "https://curiouscat.me/static/communities_default_cover.jpg",
    title: "Looking for love ones",
    members: "39.79K members",
    posts: "53.25K posts"
  }
];

const { Icon } = atoms;
const { InputAdornment } = molecules;

const useStyles = makeStyles({
  title: {},
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  icons: {
    verticalAlign: "middle"
  }
});

function Communities({ width }) {
  const classes = useStyles();

  const getGridListCols = () => {
    return isWidthUp("sm", width) ? 1 : 2;
  };

  return (
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
                <Grid
                  wrap="nowrap"
                  container
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid item style={{ whiteSpace: "nowrap" }}>
                    <Icon className={classes.icons}>keyboard_arrow_up</Icon>
                    <span
                      style={{
                        textOverflow: "ellipsis",
                        overflow: "hidden"
                      }}
                    >
                      Top Communities
                    </span>
                  </Grid>
                  <Grid item style={{ whiteSpace: "nowrap" }}>
                    <Icon className={classes.icons}>search</Icon>
                    <Icon className={classes.icons}>schedule</Icon>
                    <Icon className={classes.icons}>toc</Icon>
                    <Icon className={classes.icons}>menu</Icon>
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
  );
}

export default withWidth()(Communities);
