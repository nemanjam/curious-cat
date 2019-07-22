import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Hidden from "@material-ui/core/Hidden";

import theme from "../../theme/tweeper/theme";
import withTheme from "./withTheme";
import Header from "../../components/tweeper/Header";
import SmallHeader from "../../components/tweeper/SmallHeader";
import BottomHeader from "../../components/tweeper/BottomHeader";

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
      {props.children}
    </Fragment>
  );
};

export default withTheme(theme)(Layout);
