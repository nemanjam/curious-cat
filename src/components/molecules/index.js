/*
const cache = {};
const req = require.context('./', false, /\.(js|tsx)$/);

req.keys().forEach(filename => {
  cache[filename.replace(/\.\/|\.js/g, '')] = req(filename).default;
});

export default cache;
*/

import Card from "./Card";
import CardActionArea from "./CardActionArea";
import CardActions from "./CardActions";
import CardContent from "./CardContent";
import CardMedia from "./CardMedia";
import Drawer from "./Drawer";
import InputAdornment from "./InputAdornment";
import List from "./List";
import ListItem from "./ListItem";
import ListItemIcon from "./ListItemIcon";
import ListItemText from "./ListItemText";
import Tab from "./Tab";
import Tabs from "./Tabs";

export default {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Drawer,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tab,
  Tabs
};
