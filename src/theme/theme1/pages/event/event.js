import { Grid } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import EventComponent from "../../../component/eventComponent";

class Theme1Event extends React.Component {
  render() {
    const {
      isEdit,
      titleEdit,
      titleView,
      fromHome,
      homeTitle,
      homeList,
      siteEdit,
      siteView,
    } = this.props;
    const useStyles = () => ({
      changableTitle: {
        fontFamily: isEdit ? titleEdit.fontFamily : titleView.fontFamily,
        fontWeight: 300,
        color: "#535353",
        textAlign: "center",
        fontSize: 30,
        paddingBottom: 20,
        textTransform: "uppercase",
      },
      changableFirst: {
        fontFamily: isEdit ? titleEdit.fontFamily : titleView.fontFamily,
        fontWeight: 300,
        color: "#535353",
        textAlign: "center",
        fontSize: 30,
        textDecoration: "underline",
        textDecorationColor: isEdit ? titleEdit.color : titleView.color,
      },
    });
    const classes = useStyles();

    return (
      <Grid container style={{ minHeight: "50vh" }}>
        <Grid item xs={12}>
          <p style={classes.changableTitle}>
            {fromHome
              ? homeTitle
              : isEdit
              ? siteEdit &&
                siteEdit.navItems.map((item) => {
                  if (item.original === "event") {
                    return item.name;
                  } else return "";
                })
              : siteView &&
                siteView.navItems.map((item) => {
                  if (item.original === "event") {
                    return item.name;
                  } else return "";
                })}
          </p>
        </Grid>
        <Grid item xs={12}>
          <EventComponent
            altType
            key={
              this.props.isEdit
                ? this.props.siteEdit.limitEvent
                : this.props.siteView.limitEvent
            }
            homeList={
              fromHome && homeList
                ? homeList
                : isEdit
                ? siteEdit.events
                : siteView.events
            }
            siteInfo={siteView && siteView.sitePath}
            fromHome={fromHome}
            pageCount={Math.ceil(
              (fromHome && homeList
                ? homeList.length
                : siteEdit
                ? siteEdit.events
                  ? siteEdit.events.length
                  : 0
                : siteView.events
                ? siteView.events.length
                : 0) /
                (this.props.isEdit
                  ? this.props.siteEdit.limitEvent
                  : this.props.siteView.limitEvent)
            )}
          />
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  siteEdit: state.site.siteEdit,
  isEdit: state.site.isEdit,
  siteView: state.site.siteView,
  titleEdit: state.site.titleEdit,
  titleView: state.site.titleView,
  bodyEdit: state.site.bodyEdit,
  bodyView: state.site.bodyView,
});

export default connect(mapStateToProps, null)(Theme1Event);
