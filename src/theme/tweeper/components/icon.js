export default ({ attach, ICON, theme }) => {
  const root = {
    [attach(ICON.text)]: {
      fontSize: 15,
    },
    [attach(ICON.light)]: {
      color: theme.palette.text.secondary // '#657786',
    },
  };
  return {
    MuiSvgIcon: {
      root,
    },
    MuiIcon: {
      root,
    },
  };
};
