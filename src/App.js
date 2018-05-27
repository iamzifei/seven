import React from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "typeface-roboto";
import indexRoutes from "routes/index";

const theme = createMuiTheme({
  // overwrite the default theme
  // spacing unit is 8dp
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: "rgba(35, 50, 56, 0.54)"
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: "#fff"
      }
    }
  },
  palette: {
    primary: {
      light: "#0088BA",
      main: "#007FAD",
      dark: "#006C93"
    },
    secondary: {
      light: "#E6204C",
      main: "#D91E48",
      dark: "#BF1A40"
    },
    error: {
      light: "#E6204C",
      main: "#D91E48",
      dark: "#BF1A40"
    },
    text: {
      primay: "rgba(35, 50, 56, 1.0)",
      secondary: "rgba(35, 50, 56, 0.54)",
      disabled: "rgba(35, 50, 56, 0.38)"
    },
    // mono colors
    fullBlack: "rgba(35, 50, 56, 1.0)", // primary text color on light bg
    darkBlack: "rgba(35, 50, 56, 0.87)",
    lightBlack: "rgba(35, 50, 56, 0.54)", // secondary text color on light bg
    minBlack: "rgba(35, 50, 56, 0.38)", // disabled text color on light bg
    faintblack: "rgba(35, 50, 56, 0.12)", // used for border

    background: "#f6f7f7",
    white: "#fff",

    // alerts
    success: "#2ab573",
    checkpoint: "#e9a227",
    immediate: "#d91e48",

    // others
    green: "#2ab573",
    flow: "#007fad",
    human: "#9e3e97"
  }
});

function App(props) {
  return (
    <MuiThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <React.Fragment>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return (
              <Route path={prop.path} component={prop.component} key={key} />
            );
          })}
        </Switch>
      </React.Fragment>
    </MuiThemeProvider>
  );
}

export default withRouter(App);
