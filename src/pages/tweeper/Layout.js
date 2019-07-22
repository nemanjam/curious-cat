import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import theme from "../../theme/tweeper/theme";
import withTheme from "./withTheme";
import Header from "../../components/tweeper/Header";

const Layout = props => {
  return (
    <Fragment>
      <CssBaseline />
      <Header page={props.page} />
      {props.children}
    </Fragment>
  );
};

export default withTheme(theme)(Layout);
