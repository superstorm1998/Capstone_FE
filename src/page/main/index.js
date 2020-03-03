import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getUserPages, getUserSites, closeSnackBar } from "../../actions";
import MainPage from "./main";

class PreMainPage extends Component {
  getUserPages = async () => {
    const { accessToken, userId, getUserPages } = this.props;
    await getUserPages({ accessToken, userId });
  };

  getAllUserSites = async () => {
    const { accessToken, userId, getUserSites } = this.props;
    await getUserSites(userId, accessToken);
  };

  async componentDidMount() {
    const { isLogin, closeSnackBar } = this.props;
    closeSnackBar();
    if (isLogin) {
      await this.getUserPages();
      await this.getAllUserSites();
    }
  }

  render() {
    const { isLogin } = this.props;
    if (!isLogin) {
      return <Redirect to="/" />;
    }
    return <MainPage />;
  }
}

const mapStateToProps = state => ({
  isLogin: state.user.isLogin,
  accessToken: state.user.accessToken,
  userId: state.user.profile.id
});

const mapDispatchToProps = dispatch => ({
  getUserPages: ({ accessToken, userId }) =>
    dispatch(getUserPages({ accessToken, userId })),
  getUserSites: (id, accessToken) => dispatch(getUserSites(id, accessToken)),
  closeSnackBar: () => dispatch(closeSnackBar())
});

export default connect(mapStateToProps, mapDispatchToProps)(PreMainPage);
