import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  getAllPost,
  getAllThemes,
  getSiteById,
  setSiteEdit,
  setEditOn
} from "../../actions";
import EditPage from "./edit";
import WebFont from "webfontloader";
class PreEditPage extends React.Component {
  componentDidMount() {
    const { isLogin, setEditOn } = this.props;
    if (isLogin) {
      this.getAllThemes();
      setEditOn();
    }
  }

  getAllThemes = async () => {
    const { getAllThemes } = this.props;
    await getAllThemes();
  };

  render() {
    const { isLogin, siteEdit, isEdit } = this.props;
    if (!isLogin) {
      return <Redirect to="/" />;
    } else if (siteEdit && isEdit) {
      WebFont.load({
        google: {
          families: [siteEdit.fontTitle, siteEdit.fontBody]
        }
      });
      return <EditPage />;
    } else return <></>;
  }
}

const mapStateToProps = state => ({
  isLogin: state.user.isLogin,
  currentEditId: state.site.currentEditId,
  siteEdit: state.site.siteEdit,
  posts: state.post.posts,
  isEdit: state.site.isEdit
});

const mapDispatchToProps = dispatch => ({
  getAllThemes: () => dispatch(getAllThemes()),
  getSiteById: id => dispatch(getSiteById(id)),
  setSiteEdit: (site, titleStyle, bodyStyle) =>
    dispatch(setSiteEdit(site, titleStyle, bodyStyle)),
  getAllPost: posts => dispatch(getAllPost(posts)),
  setEditOn: () => dispatch(setEditOn())
});

export default connect(mapStateToProps, mapDispatchToProps)(PreEditPage);
