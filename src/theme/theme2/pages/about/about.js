import React from "react";
import { Divider, Grid, Typography } from "@material-ui/core";
import styles from "./about.module.css";

class AboutPage extends React.Component {
  render() {
    return (
      <Grid container justify="center" className={styles.about_page}>
        <Grid item sm={10} xs={10}>
          <Typography
            className={styles.title}
            variant="h4"
            align="center"
            gutterBottom
          >
            About
          </Typography>
          <Divider className="divider" variant="middle" />
        </Grid>
        <Grid container item sm={10} xs={10} justify="flex-start">
          <Typography variant="body1" color="textPrimary">
            Welcome to our website!
            <br />
            Take a look around and feel free to contact us for more information.
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default AboutPage;