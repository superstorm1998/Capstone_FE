import { Divider, Grid, Typography, CardMedia } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import styles from "./about.module.css";

class AboutPage extends React.Component {
  renderImage = () => {
    const { isEdit, siteEdit, siteView, newLogo } = this.props;
    if (isEdit) {
      if (newLogo && typeof newLogo === "object" && newLogo.size > 0) {
        return URL.createObjectURL(newLogo);
      } else return siteEdit.logo;
    }
    return siteView.logo;
  };

  render() {
    const {
      isEdit,
      titleEdit,
      bodyEdit,
      titleView,
      bodyView,
      siteEdit,
      siteView,
      fromHome,
      homeTitle,
    } = this.props;
    return (
      <Grid container justify="center" className={styles.about_page}>
        <Grid item sm={10} xs={10}>
          {!fromHome && (
            <>
              <Typography
                className={styles.title}
                variant="h4"
                align="center"
                gutterBottom
                style={{
                  fontFamily: isEdit
                    ? titleEdit.fontFamily
                    : titleView.fontFamily,
                  fontWeight: 500,
                  color: isEdit ? titleEdit.color : titleView.color,
                  textAlign: "center",
                  fontSize: 28,
                  paddingBottom: 20,
                }}
              >
                {fromHome ? homeTitle : "About"}
              </Typography>
              <Divider
                className="divider"
                variant="middle"
                style={{ marginBottom: 50 }}
              />
            </>
          )}
        </Grid>

        <Grid
          container
          item
          sm={3}
          xs={5}
          justify="center"
          style={{ display: fromHome ? "none" : "block" }}
        >
          <CardMedia component="img" alt="" image={this.renderImage()} />
        </Grid>

        <Grid
          container
          item
          sm={10}
          xs={10}
          justify="center"
          style={{ marginTop: !fromHome ? 50 : 0 }}
        >
          <Typography
            variant="body1"
            color="textPrimary"
            style={{
              fontFamily: isEdit ? bodyEdit.fontFamily : bodyView.fontFamily,
              fontWeight: 400,
              color: "#151515",
              textAlign: "center",
              fontSize: 24,
              paddingBottom: 20,
            }}
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
        {!fromHome && (
          <>
            <Grid
              container
              item
              sm={10}
              xs={10}
              justify="center"
              style={{ marginTop: !fromHome ? 50 : 0 }}
            >
              <Typography
                style={{
                  fontFamily: isEdit
                    ? bodyEdit.fontFamily
                    : bodyView.fontFamily,
                  fontWeight: 900,
                  color: "#151515",
                  textAlign: "center",
                  fontSize: 30,
                  paddingBottom: 10,
                }}
              >
                {isEdit
                  ? siteEdit && siteEdit.story && siteEdit.story.title
                  : siteView && siteView.story && siteView.story.title}
              </Typography>
            </Grid>
            <Grid
              container
              item
              sm={6}
              xs={10}
              justify="center"
              style={{ marginTop: !fromHome ? 50 : 0 }}
            >
              <Typography
                variant="body1"
                color="textPrimary"
                style={{
                  fontFamily: isEdit
                    ? bodyEdit.fontFamily
                    : bodyView.fontFamily,
                  fontWeight: 400,
                  color: "#151515",
                  // textAlign: "center",
                  fontSize: 20,
                  paddingBottom: 10,
                }}
              >
                {isEdit
                  ? siteEdit &&
                    siteEdit.story &&
                    siteEdit.story.composedText &&
                    siteEdit.story.composedText.map((text) => {
                      const originalText = text.split("\n");
                      return originalText.map((val) => (
                        <>
                          {val}
                          <br />
                        </>
                      ));
                    })
                  : siteView &&
                    siteView.story &&
                    siteEdit.story.composedText &&
                    siteEdit.story.composedText.map((text) => {
                      const originalText = text.split("\n");
                      return originalText.map((val) => (
                        <>
                          {val}
                          <br />
                        </>
                      ));
                    })}
              </Typography>
            </Grid>
          </>
        )}
      </Grid>
    );
  }
}
const mapStateToProps = (state) => ({
  siteEdit: state.site.siteEdit,
  siteView: state.site.siteView,
  isEdit: state.site.isEdit,
  titleEdit: state.site.titleEdit,
  bodyEdit: state.site.bodyEdit,
  titleView: state.site.titleView,
  bodyView: state.site.bodyView,
});

export default connect(mapStateToProps, null)(AboutPage);
