import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Hidden from "@material-ui/core/Hidden";
import { styled } from "@material-ui/core/styles";

import theme from "../../theme/tweeper/theme";
import withTheme from "./withTheme";
import Header from "../../components/tweeper/Header";
import SmallHeader from "../../components/tweeper/SmallHeader";
import BottomHeader from "../../components/tweeper/BottomHeader";

const Content = styled("div")({
  maxWidth: 1000,
  padding: theme.spacing(4),
  margin: "auto"
});

const Layout = props => {
  return (
    <Fragment>
      <CssBaseline />
      <Hidden smDown>
        <Header page={props.page} />
      </Hidden>
      <Hidden mdUp>
        <SmallHeader />
      </Hidden>
      <Hidden mdUp>
        <BottomHeader page={props.page} />
      </Hidden>
      <Content>{props.children}</Content>
    </Fragment>
  );
};

export default withTheme(theme)(Layout);
