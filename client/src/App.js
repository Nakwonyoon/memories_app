import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from "./images/memories.png";

import { getPosts } from "./actions/posts";
import { useDispatch } from "react-redux";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";
import background from "./images/background.jpg";

const App = () => {
    const [currentId, setCurrentId] = useState(null); // [currentId, setCurrentId] = [null, null
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])


    
    return (
        <Container maxwidth="lg" style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            minWidth: '100vw',
        
        }}>
            <AppBar className={classes.appBar} position="static" color="inherit" style={{opacity: 0.7}}>
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image}src = {memories} alt="memories" height="60" />
            </AppBar>
            <Grow in> 
                <Container>
                    <Grid container justify = "space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId = {setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId = {currentId} setCurrentId = {setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>

        </Container>
    );
}

export default App;