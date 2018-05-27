import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Avatar,
  Snackbar,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { capitalizeWord } from "utils/helper";
import { getUsers } from "./HomeActions";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  avatar: {
    backgroundColor: theme.palette.fullWhite,
    border: `0px solid ${theme.palette.faintblack}`,
    cursor: "pointer",
    objectFit: "cover",
    overflow: "hidden",
    borderColor: theme.palette.faintblack,
    borderWidth: "1px",
    borderStyle: "solid",
    width: "40px",
    height: "40px",
    marginRight: theme.spacing.unit
  }
});

class Home extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { classes, data, error } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Name</TableCell>
              <TableCell>City</TableCell>
              <TableCell>State</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((person, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                    <Avatar
                      alt="avatar"
                      src={person.picture.thumbnail}
                      className={classes.avatar}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {capitalizeWord(
                      `${person.name.title} ${person.name.first} ${
                        person.name.last
                      }`
                    )}
                  </TableCell>
                  <TableCell>{capitalizeWord(person.location.city)}</TableCell>
                  <TableCell>{capitalizeWord(person.location.state)}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={error !== ""}
          autoHideDuration={6000}
          message={<span id="message-id">{error}</span>}
        />
      </Paper>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array,
  error: PropTypes.string
};

const mapStateToProps = state => {
  const { data, error } = state.home;
  return {
    data,
    error
  };
};

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers())
});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Home)
);
