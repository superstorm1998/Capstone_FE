import React from "react";
import { themes as themesConstant } from "../../constant/constant";
import { connect } from "react-redux";
import {
  updateSiteId,
  getSiteById,
  setSiteView,
  showLoading,
  closeLoading
} from "../../actions";
import { Grid } from "@material-ui/core";

class PreViewSite extends React.Component {
  state = {
    currentSiteId: ""
  };

  async componentDidMount() {
    const {
      updateSiteId,
      getSiteById,
      setSiteView,
      showLoading,
      closeLoading
    } = this.props;
    showLoading();
    const currentSiteId = await this.props.location.pathname.split("/")[1];
    this.setState({
      currentSiteId: currentSiteId
    });

    await updateSiteId(this.state.currentSiteId);
    const data = await getSiteById(this.state.currentSiteId);
    const fontTitle = {
      fontFamily: data.fontTitle,
      color: data.color
    };
    const fontBody = {
      fontFamily: data.fontBody
    };
    await setSiteView(data, fontTitle, fontBody);
    closeLoading();
  }

  render() {
    const { siteView } = this.props;
    if (siteView) {
      if (!siteView.isPublish) {
        return (
          <Grid container justify="center">
            <h1 style={{ color: "red" }}>404 Not Found</h1>
          </Grid>
        );
      }
      return themesConstant.find(e => e.name === siteView.theme.name).component;
    }
    return <></>;
  }
}

const mapStateToProps = state => ({
  siteId: state.site.currentId,
  siteView: state.site.siteView
});

const mapDispatchToProps = dispatch => ({
  updateSiteId: id => dispatch(updateSiteId(id)),
  getSiteById: id => dispatch(getSiteById(id)),
  setSiteView: (site, title, body) => dispatch(setSiteView(site, title, body)),
  closeLoading: () => dispatch(closeLoading()),
  showLoading: () => dispatch(showLoading())
});
export default connect(mapStateToProps, mapDispatchToProps)(PreViewSite);