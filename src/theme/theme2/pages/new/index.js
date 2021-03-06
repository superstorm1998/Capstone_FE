import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setNavItemActive,
  setNavItemInActive,
  getDataByPageNumber,
  setPostsToSiteView,
} from "../../../../actions";
import NewPage from "./new";

class PreNewPage extends Component {
  componentDidMount() {
    const {
      siteView,
      isEdit,
      setNavItemActive,
      setNavItemInActive,
    } = this.props;
    this.setDataToSite();
    if (siteView && !isEdit) {
      if (siteView.navItems) {
        const navItem = siteView.navItems.find((e) => e.original === "news");
        if (!navItem.isActive) {
          setNavItemInActive();
        } else {
          setNavItemActive();
        }
      }
    }
  }

  setDataToSite = async () => {
    const {
      getDataByPageNumber,
      setPostToSiteView,
      isEdit,
      siteView,
    } = this.props;

    if (!isEdit) {
      const data = await getDataByPageNumber({
        sitePath: siteView.sitePath,
        page: "news",
      });
      data && setPostToSiteView(data);
    }
  };

  render() {
    return (
      <NewPage postView={this.props.location && this.props.location.postView} />
    );
  }
}

const mapStateToProps = (state) => ({
  siteView: state.site.siteView,
  isEdit: state.site.isEdit,
});

const mapDispatchToProps = (dispatch) => ({
  setNavItemInActive: () => dispatch(setNavItemInActive()),
  setNavItemActive: () => dispatch(setNavItemActive()),
  getDataByPageNumber: ({ sitePath, page, siteId }) =>
    dispatch(getDataByPageNumber({ sitePath, page, siteId })),
  setPostToSiteView: (posts) => dispatch(setPostsToSiteView(posts)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PreNewPage);
