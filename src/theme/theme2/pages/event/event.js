import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Divider, Grid, Typography } from "@material-ui/core";
import React from "react";
import styles from "./event.module.css";

const imgUrl = [
  "https://scontent.xx.fbcdn.net/v/t1.0-9/83821452_100161464881975_9179838828163104768_n.jpg?_nc_cat=109&_nc_ohc=kZko6mqBMCIAX_ZyGAD&_nc_ht=scontent.xx&oh=556f1405040ff8e685037787552b4af6&oe=5E95740E",
  "https://scontent.xx.fbcdn.net/v/t1.0-9/84357702_100161708215284_6628528314745094144_n.jpg?_nc_cat=111&_nc_ohc=j0bhRaMn6QIAX-D2JrZ&_nc_ht=scontent.xx&oh=00c77acfe89ec5953a9b1689b85308cb&oe=5EDA3199"
];

const imgStyles = {
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%"
};

class EventPage extends React.Component {
  render() {
    return (
      <Grid
        container
        alignItems="center"
        direction="column"
        className={styles.event_page}
      >
        <Grid item sm={10} xs={10}>
          <Typography
            className={styles.title}
            variant="h4"
            align="center"
            gutterBottom
          >
            Events
          </Typography>
          <Divider className="divider" variant="fullWidth" />
        </Grid>
        <Grid
          item
          sm={3}
          xs={3}
          container
          justify="center"
          className={styles.event_body}
        >
          <Grid item sm={12} container>
            <Grid item sm={3}>
              <div className={styles.image_page}>
                <img alt="" src={imgUrl[1]} style={imgStyles} />
              </div>
            </Grid>
            <Grid item sm={9} container direction="column">
              <Grid>
                <Typography variant="h6" className={styles.shop_name}>
                  Foody
                </Typography>
              </Grid>
              <Grid>
                <Button className={styles.btn_like}>
                  <FontAwesomeIcon
                    icon={faFacebookSquare}
                    className={styles.icon}
                    size-={2}
                  ></FontAwesomeIcon>
                  <Typography className={styles.like}>Like Page</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container sm={12} className={styles.contain_event}>
            <Grid className={styles.event}>
              <Typography className={styles.event_content}>
                Foody does not have any upcoming events.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container sm={3} justify="center">
          <Button className={styles.btn_view}>
            <Typography
              align="center"
              variant="h6"
              className={styles.btn_content}
            >
              View Events On FaceBook
            </Typography>
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default EventPage;