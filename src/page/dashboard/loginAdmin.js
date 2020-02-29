import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { InputBase, Paper, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { loginAdmin } from "../../actions";
import PreDashBoardPage from "./index";

const useStyles = theme => ({
  root: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 150,
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
});

class LoginPageAdmin extends Component {

  handleLogin = async (user, pass) => {
    const { username, password, loginAdmin } = this.props;
    await loginAdmin({ user, pass });
    if (username && password) {
      return <PreDashBoardPage />;
    }
  };

  componentDidMount() {

  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>

        <Paper component="form" className={classes.root}>
          <InputBase id="usernameInput"
            className={classes.input}
            placeholder="username"
          />
          <InputBase id="passwordInput"
            className={classes.input}
            placeholder="password"
            type="password"
          />
          <Button color="primary" aria-label="login" onClick={() => this.handleLogin(document.getElementById('usernameInput').value, document.getElementById('passwordInput').value)} >Login</Button>
        </Paper>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  username: state.admin.username,
  password: state.admin.password,
});

const mapDispatchToProps = dispatch => ({
  loginAdmin: (username, password) => dispatch(loginAdmin(username, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(LoginPageAdmin));
