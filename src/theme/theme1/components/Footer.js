import React from "react";
import { connect } from "react-redux";
import { Grid, IconButton } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faWhatsapp,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {
  render() {
    const {
      isEdit,
      siteEdit,
      siteView,
      youtube,
      instagram,
      whatsapp,
      bodyEdit,
      bodyView,
    } = this.props;

    return (
      <Grid
        container
        style={{
          backgroundColor: "#121212",
          marginTop: 100,
          height: 200,
          postion: "absolute",
          bottom: 0,
        }}
      >
        <Grid container item xs={12} justify="center">
          <IconButton
            aria-label=""
            color="primary"
            href={isEdit ? siteEdit.url : siteView.url}
          >
            <FontAwesomeIcon icon={faFacebook} color="white" size="1x" />
          </IconButton>
        </Grid>
        <Grid container item xs={12} justify="center">
          <p
            style={{
              color: "white",
              fontFamily: isEdit ? bodyEdit.fontFamily : bodyView.fontFamily,
            }}
          >
            @{isEdit ? siteEdit.title : siteView.title}
          </p>
        </Grid>

        <Grid container item direction="row" justify="center" xs={12}>
          <Grid
            item
            style={
              isEdit
                ? whatsapp
                  ? null
                  : { display: "none" }
                : siteView.whatsapp
                ? null
                : { display: "none" }
            }
          >
            <IconButton
              aria-label=""
              color="primary"
              href={`https://wa.me/${isEdit ? whatsapp : siteView.whatsapp}`}
            >
              <FontAwesomeIcon icon={faWhatsapp} color="white" size="1x" />
            </IconButton>
          </Grid>

          <Grid
            item
            style={
              isEdit
                ? instagram
                  ? null
                  : { display: "none" }
                : siteView.instagram
                ? null
                : { display: "none" }
            }
          >
            <IconButton
              aria-label=""
              color="primary"
              href={`https://instagram.com/${
                isEdit ? instagram : siteView.instagram
              }`}
            >
              <FontAwesomeIcon icon={faInstagram} color="white" size="1x" />
            </IconButton>
          </Grid>

          <Grid
            item
            style={
              isEdit
                ? youtube
                  ? null
                  : { display: "none" }
                : siteView.youtube
                ? null
                : { display: "none" }
            }
          >
            <IconButton
              aria-label=""
              color="primary"
              href={isEdit ? youtube : siteView.youtube}
            >
              <FontAwesomeIcon icon={faYoutube} color="white" size="1x" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  isEdit: state.site.isEdit,
  siteView: state.site.siteView,
  siteEdit: state.site.siteEdit,
  youtube: state.site.youtube,
  instagram: state.site.instagram,
  whatsapp: state.site.whatsapp,
  bodyEdit: state.site.bodyEdit,
  bodyView: state.site.bodyView,
});

export default connect(mapStateToProps, null)(Footer);
