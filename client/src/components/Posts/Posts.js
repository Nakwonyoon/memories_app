import React from "react";
import { useSelector as UseSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from "./styles";
import { Grid, CircularProgress } from "@material-ui/core";


const Posts = ({ setCurrentId }) => {
    const posts = UseSelector((state) => state.posts);
    const classes = useStyles();

    return (
      !posts.length ? <CircularProgress /> : (
        <Grid className={classes.container} container alignItems="strech" spacing={3}>
            {posts.map ((post) => (
                <Grid key={post._id} item xs={12} sm={6}>
                    <Post post={post} setCurrentId={setCurrentId} />
                </Grid>
            ) )}
        </Grid>
      )
    );
}

export default Posts;