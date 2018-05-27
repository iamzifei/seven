// ##############################
// // // Sidebar styles
// #############################

import { drawerWidth } from "layouts/mainStyle";

const sidebarStyle = theme => ({
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  list: {
    marginTop: "0",
    paddingLeft: "0",
    paddingTop: "0",
    paddingBottom: "0",
    marginBottom: "0"
  },
  item: {
    position: "relative",
    display: "block",
    textDecoration: "none"
  },
  itemLink: {
    color: theme.palette.lightBlack
  },
  itemText: {
    color: theme.palette.lightBlack,
    fontSize: "14px"
  },
  selectedFont: {
    color: theme.palette.fullBlack,
    fontWeight: "bold"
  },
  container: {
    display: "flex",
    flexDirection: "row",
    width: drawerWidth
  },
  title: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    textAlign: "left",
    textTransform: "capitalize",
    textColor: theme.palette.fullBlack,
    color: theme.palette.darkBlack,
    marginLeft: theme.spacing.unit * 3
  }
});

export default sidebarStyle;
