import React from "react";
import { themes as themesConstant } from "../../constant/constant";
import { connect } from "react-redux";
import { updateSiteId, getSiteById, setSiteView } from "../../actions";

class ViewSite extends React.Component {
  render() {
    const { themes, siteEdit } = this.props;
    const themeName = themes && themes.find(e => e._id === siteEdit.themeId);
    const theme =
      themeName && themesConstant.find(e => e.name === themeName.name);
    return <>{theme && theme.component}</>;
  }
}

const mapStateToProps = state => ({
  themes: state.theme.data,
  siteEdit: state.site.siteEdit
});

const mapDispatchToProps = dispatch => ({
  updateSiteId: id => dispatch(updateSiteId(id)),
  getSiteById: id => dispatch(getSiteById(id)),
  setSiteView: () => dispatch(setSiteView())
});
export default connect(mapStateToProps, mapDispatchToProps)(ViewSite);
