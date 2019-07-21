/*
const cache = {};
const req = require.context('./', false, /\.(js|tsx)$/);

req.keys().forEach(filename => {
  cache[filename.replace(/\.\/|\.js/g, '')] = req(filename).default;
});

export default cache;
*/

import AppBar from "./AppBar";
import Avatar from "./Avatar";
import Badge from "./Badge";
import Button from "./Button";
import Chip from "./Chip";
import Divider from "./Divider";
import Icon from "./Icon";
import IconButton from "./IconButton";
import Toolbar from "./Toolbar";
import Typography from "./Typography";

export default {
  AppBar,
  Avatar,
  Badge,
  Button,
  Chip,
  Divider,
  Icon,
  IconButton,
  Toolbar,
  Typography
};
