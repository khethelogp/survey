import React from 'react';
import { Button, CssBaseline, Paper, Link, Typography, Container } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import useStyles from './styles';


const Home = () => {
    const  classes = useStyles();

    return (
        <>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Paper className={classes.paper} elevation={10}>
                    <Typography component="h1" variant="h4">
                        Welcome 😀👋🏾
                    </Typography>

                    <Link component={RouterLink} to="/survey" > 
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            size="large"
                            className={classes.submit}
                        >
                            Fill Out Survey  
                        </Button>
                    </Link>

                    <Link component={RouterLink} to="/results" > 
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            size="large"
                            className={classes.submit}
                        >
                            View Survey Results  
                        </Button>
                    </Link>
                                
                </Paper>
            </Container>
        </>
    )
}

export default Home

