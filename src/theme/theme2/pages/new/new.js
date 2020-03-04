import React, { Component } from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, Card, makeStyles, Avatar, CardHeader } from "@material-ui/core";
import styles from "./new.module.css";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundSize: "contain"
  }
}));

function NewsCard({ post, site }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar
              aria-label="recipe"
              className={classes.avatar}
              src={site.logo}
            />
          }
          title={site.title}
          subheader={post.createdAt}
        />
        <CardMedia
          className={classes.media}
          image={post.attachments.images[0]}
          title=""
        />
        <CardContent>
          <Typography variant="h6" color="textPrimary" component="p">
            {post.message && post.message}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary" variant="contained">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}

class NewPage extends Component {
  render() {
    const {
      isEdit,
      titleEdit,
      titleView,
      siteEdit,
      siteView,
      posts
    } = this.props;
    return (
      <Grid container style={{ marginBottom: "5rem" }}>
        <Grid
          item
          sm={12}
          xs={12}
          className={styles.title}
          style={isEdit ? titleEdit : titleView}
        >
          News
        </Grid>
        <Grid item sm={12} xs={12} container spacing={3}>
          {posts ? (
            isEdit ? (
              posts.map(
                (item, index) =>
                  item.attachments.media_type === "photo" && (
                    <Grid
                      container
                      item
                      sm={3}
                      xs={6}
                      key={index}
                      justify="center"
                    >
                      <NewsCard post={item} site={siteEdit} />
                    </Grid>
                  )
              )
            ) : (
              siteView.posts &&
              siteView.posts.map(
                (item, index) =>
                  item.attachments.media_type === "photo" && (
                    <Grid
                      container
                      item
                      sm={3}
                      xs={6}
                      key={index}
                      justify="center"
                    >
                      <NewsCard post={item} site={siteView} />
                    </Grid>
                  )
              )
            )
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  siteEdit: state.site.siteEdit,
  isEdit: state.site.isEdit,
  titleView: state.site.titleView,
  titleEdit: state.site.titleEdit,
  siteView: state.site.siteView,
  posts: state.post.posts
});

export default connect(mapStateToProps, null)(NewPage);
