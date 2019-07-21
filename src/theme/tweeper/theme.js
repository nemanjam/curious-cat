import variables from "./variables";

import MuiAppBar from "./components/appBar";
import MuiAvatar from "./components/avatar";
import MuiBadge from "./components/badge";
import MuiButton from "./components/button";
import MuiCssBaseline from "./components/cssBaseline";
import MuiDivider from "./components/divider";
import MuiIcon from "./components/icon";
import MuiIconButton from "./components/iconButton";
import MuiInput from "./components/input";
import MuiList from "./components/list";
import MuiTabs from "./components/tabs";
import MuiTouchRipple from "./components/touchRipple";
import MuiTypography from "./components/typography";

const overrides = {
  ...MuiAppBar(variables),
  ...MuiAvatar(variables),
  ...MuiBadge(variables),
  ...MuiButton(variables),
  ...MuiCssBaseline(variables),
  ...MuiDivider(variables),
  ...MuiIcon(variables),
  ...MuiIconButton(variables),
  ...MuiInput(variables),
  ...MuiList(variables),
  ...MuiTabs(variables),
  ...MuiTouchRipple(variables),
  ...MuiTypography(variables)
};
/*
const req = require.context("./components", false, /.js$/);

let overrides = {};

req.keys().forEach(filename => {
  overrides = {
    ...overrides,
    ...req(filename).default(variables)
  };
});

console.log(overrides1);
console.log(overrides);
*/
export default {
  ...variables.theme,
  overrides
};
