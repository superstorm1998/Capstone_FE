import React from "react";
import { themes as themesConstant } from "../../constant/constant";
import { connect } from "react-redux";
import {
  updateSiteId,
  setSiteView,
  setEditOff,
  clearSiteView,
  closeSnackBar,
  updateSitepath,
  getSiteBySitepath
} from "../../actions";
import { Grid } from "@material-ui/core";
import { withRouter } from "react-router-dom";

class PreViewSite extends React.Component {
  state = {
    sitepath: ""
  };

  async componentDidMount() {
    const {
      updateSitepath,
      setSiteView,
      setEditOff,
      clearSiteView,
      closeSnackBar,
      getSiteBySitepath
    } = this.props;
    closeSnackBar();
    clearSiteView();
    setEditOff();
    const sitepath = await this.props.location.pathname.split("/")[1];
    this.setState({
      sitepath: sitepath
    });
    await updateSitepath(this.state.sitepath);
    const data = await getSiteBySitepath(this.state.sitepath);
    if (data) {
      const fontTitle = {
        fontFamily: data.fontTitle,
        color: data.color
      };
      const fontBody = {
        fontFamily: data.fontBody
      };
      await setSiteView(data, fontTitle, fontBody);
    }
  }

  render() {
    const { siteView } = this.props;
    clearSiteView();
    if (siteView) {
      if (!siteView.isPublish) {
        return (
          <Grid container justify="center">
            <h1 style={{ color: "red" }}>Site is currently not published</h1>
          </Grid>
        );
      }
      return themesConstant.find(e => e.name === siteView.theme.name).component;
    }
    return (
      <Grid container justify="center">
        <h1 style={{ color: "red" }}>404 Not Found</h1>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  siteView: state.site.siteView
});

const mapDispatchToProps = dispatch => ({
  updateSiteId: id => dispatch(updateSiteId(id)),
  setSiteView: (site, title, body) => dispatch(setSiteView(site, title, body)),
  setEditOff: () => dispatch(setEditOff()),
  clearSiteView: () => dispatch(clearSiteView()),
  closeSnackBar: () => dispatch(closeSnackBar()),
  updateSitepath: () => dispatch(updateSitepath()),
  getSiteBySitepath: sitepath => dispatch(getSiteBySitepath(sitepath))
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PreViewSite)
);
