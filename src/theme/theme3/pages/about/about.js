import { Grid, Typography, Divider } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import styles from "./about.module.css";

class AboutPage extends React.Component {
  render() {
    const {
      isEdit,
      titleEdit,
      bodyEdit,
      titleView,
      bodyView,
      siteEdit,
      siteView,
      showTitle
    } = this.props;
    return (
      <Grid container justify="center" className={styles.about_page}>
        {showTitle ? (
          <Grid item sm={10} xs={10}>
            <Typography
              className={styles.title}
              variant="h4"
              align="center"
              gutterBottom
              style={(isEdit ? titleEdit : titleView, { color: "white" })}
            >
              About
            </Typography>
            <Divider style={{ backgroundColor: "white" }} variant="fullWidth" />
          </Grid>
        ) : (
          <></>
        )}
        <Grid container item sm={10} xs={10} justify="center">
          <Typography
            variant="body1"
            color="textPrimary"
            style={(isEdit ? bodyEdit : bodyView, { color: "white" })}
            className={styles.about}
          >
            {isEdit
              ? siteEdit && siteEdit.about
                ? siteEdit.about
                : "Welcome to our website! Take a look around and feel free to contact us for more information."
              : siteView && siteView.about
              ? siteView.about
              : "Welcome to our website! Take a look around and feel free to contact us for more information."}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}
const mapStateToProps = state => ({
  siteEdit: state.site.siteEdit,
  siteView: state.site.siteView,
  isEdit: state.site.isEdit,
  titleEdit: state.site.titleEdit,
  bodyEdit: state.site.bodyEdit,
  titleView: state.site.titleView,
  bodyView: state.site.bodyView
});

export default connect(mapStateToProps, null)(AboutPage);
