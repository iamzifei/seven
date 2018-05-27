import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import cx from "classnames";
import { Switch, Redirect, Route } from "react-router-dom";
import {
  withStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { Sidebar, OverLayLoader } from "components";
import appRoutes from "routes/app";
import * as actions from "components/Sidebar/SidebarActions";

import { mainStyle } from "./mainStyle";
class App extends React.Component {
  componentDidUpdate() {
    this.refs.mainPanel.scrollTop = 0;
  }

  handleDrawerOpen = () => {
    this.props.sideBarStateChange(true);
  };

  render() {
    const { classes, sideBarOpen, pageLoading, ...rest } = this.props;
    const { pathname } = this.props.history.location;
    const navbarName = appRoutes.find(route => route.path === pathname)
      ? appRoutes.find(route => route.path === pathname).navbarName
      : "Admin UI";
    const switchRoutes = (
      <Switch>
        {appRoutes.map((prop, key) => {
          if (prop.redirect)
            return <Redirect from={prop.path} to={prop.to} key={key} />;
          return (
            <Route
              exact
              path={prop.path}
              component={prop.component}
              key={key}
            />
          );
        })}
      </Switch>
    );
    return (
      <div className={classes.wrapper}>
        {pageLoading ? <OverLayLoader /> : null}
        <AppBar
          position="absolute"
          className={cx(classes.appBar, sideBarOpen && classes.appBarShift)}
        >
          <Toolbar disableGutters={!sideBarOpen}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              className={cx(classes.menuButton, sideBarOpen && classes.hide)}
            >
              <Menu />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              {navbarName}
            </Typography>
          </Toolbar>
        </AppBar>
        <Sidebar routes={appRoutes} {...rest} />
        <main className={classes.content} ref="mainPanel">
          <div className={classes.toolbar} />
          {switchRoutes}
        </main>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const { sideBarOpen } = state.sideBar;
  const { pageLoading } = state.loader;
  return {
    sideBarOpen,
    pageLoading
  };
};

const mapDispatchToProps = dispatch => ({
  sideBarStateChange: data => dispatch(actions.sideBarStateChange(data))
});

export default withStyles(mainStyle)(
  connect(mapStateToProps, mapDispatchToProps)(App)
);
