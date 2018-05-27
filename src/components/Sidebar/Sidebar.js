import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import cx from "classnames";
import {
  withStyles,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Hidden
} from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";
import * as actions from "./SidebarActions";

import sidebarStyle from "./SidebarStyle";

export class Sidebar extends React.Component {
  handleDrawerClose = () => {
    this.props.sideBarStateChange(false);
  };

  changeRoute(pathName) {
    this.props.history.push(pathName);
  }

  render() {
    const { classes, routes, location, sideBarOpen } = this.props;
    const activeRoute = routeName =>
      location.pathname.toLowerCase() === routeName.toLowerCase();
    const links = (
      <List className={classes.list}>
        {routes.map((prop, key) => {
          if (prop.redirect) return null;
          const itemActiveClasses = cx({
            [" " + classes.selectedFont]: activeRoute(prop.path)
          });
          return (
            <React.Fragment key={key}>
              <ListItem
                button
                className={classes.itemLink + classes.item}
                onClick={() => this.changeRoute(prop.path)}
              >
                <ListItemIcon className={classes.itemIcon}>
                  <prop.icon />
                </ListItemIcon>
                <ListItemText
                  primary={prop.sidebarName}
                  className={classes.itemText + itemActiveClasses}
                  disableTypography={true}
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          );
        })}
      </List>
    );

    const drawer = (
      <React.Fragment>
        <div className={classes.toolbar}>
          <div className={classes.container}>
            <Typography variant="title" className={classes.title}>
              Built Code Test
            </Typography>
          </div>
          <IconButton onClick={this.handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <div className={classes.sidebarWrapper}>{links}</div>
      </React.Fragment>
    );
    return (
      <React.Fragment>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            classes={{
              paper: cx(
                classes.drawerPaper,
                !sideBarOpen && classes.drawerPaperClose
              )
            }}
            open={sideBarOpen}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor="left"
            open={sideBarOpen}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </React.Fragment>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const { sideBarOpen } = state.sideBar;
  return {
    sideBarOpen
  };
};

const mapDispatchToProps = dispatch => ({
  sideBarStateChange: data => dispatch(actions.sideBarStateChange(data))
});

export default withStyles(sidebarStyle)(
  connect(mapStateToProps, mapDispatchToProps)(Sidebar)
);
