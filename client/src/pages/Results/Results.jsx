import React, { useState, useEffect } from 'react'
import { Button, Container, CssBaseline, Grid, Link, Paper, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import Axios from "axios";

import useStyles from './styles';


const Results = () => {
    const classes = useStyles();

    const [results, setResults] = useState([]);

    useEffect(() => {
        Axios.get("https://lifestyle-survey.herokuapp.com/results")
        .then((response) => {
            setResults(response.data);
        })
        
    }, [])

    console.log(results);

    // Calculating the average age using array.reduce()
    const averageAge = results.reduce((total, next) => total + next.age, 0)/ results.length;
    
    /* const maxAge = results.reduce((acc, curr) => {
        if(acc.age > curr.age) {
            return acc.age;
        }else  {
            return curr.age;
        }
    }, 0); */
    
    // Calculating the max age using the array.reduce() to get all ages in the array
    const ages = results.reduce((acc, curr) => {
        if(acc.age > curr.age) {
            acc.push(acc.age);
        }else  {
            acc.push(curr.age);
        }

        return acc
    }, []);

    // console.log(ages)
    const maxAge = Math.max(...ages);
    const minAge = Math.min(...ages);


    // Percentage of people who like Pizza
    const pizzaFilter = results.filter(item => item.favoriteFood.includes("Pizza"));
    const percentPizza = (pizzaFilter.length / results.length) * 100;
    
    // Percentage of people who like Pastsa
    const pastaFilter = results.filter(item => item.favoriteFood.includes("Pasta"));
    const percentPasta = (pastaFilter.length / results.length) * 100;

    // Percentage of people who like Pastsa
    const papnWorsFilter = results.filter(item => item.favoriteFood.includes("Pap and Wors"));
    const percentPapnWors = (papnWorsFilter.length / results.length) * 100;

    //People who like to eat out average
    const eatOutPeople = results.reduce((total, next) => total + next.eatOut, 0)/ results.length;
    // console.log(eatOutPeople);

    // People who watch movies average
    const moviesPeople = results.reduce((total, next) => total + next.movies, 0)/ results.length;

    // People who watch TV average
    const televisionPeople = results.reduce((total, next) => total + next.television, 0)/ results.length;

    //People who listen to the radio average
    const radioPeople = results.reduce((total, next) => total + next.listenToRadio, 0)/ results.length;

    
    return (
        <>
            <Container  className={classes.container} sx={{ py: 4 }} maxWidth="m">
                <Grid container spacing={2}>
                    <CssBaseline />
                    <Grid item xs={12}>
                        <Container maxWidth="md">
                            <Typography variant="h3" align="center">
                                Survey Results
                            </Typography>
                            <Paper className={classes.paper} elevation={10}>
                            <Grid container spacing={3}>
                                    {/* Personal Details Results */}

                                    <Grid item xs={6}>
                                        <Typography>Total number of surveys:</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>{results.length}</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>Average age: </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>{Math.round(averageAge * 10) / 10}</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>Oldest person who participated in survey </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>{maxAge}</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>Youngest person who participated in survey </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>{minAge}</Typography>
                                    </Grid>

                                    <Grid item xs={12} className={classes.devider}/>

                                
                                    {/* Survey Results */}
                                    <Grid item xs={6}>
                                        <Typography>Percentage of people who like Pizza: </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>{Math.round(percentPizza * 10)/10} %</Typography>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Typography>Percentage of people who like Pasta: </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>{Math.round(percentPasta * 10) /10} %</Typography>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Typography>Percentage of people who like Pap & Wors: </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>{Math.round(percentPapnWors *10) /10} %</Typography>
                                    </Grid>

                                    <Grid item xs={12} className={classes.devider}/>

                                    {/* Survey Results */}
                                    <Grid item xs={6} >
                                        <Typography>People like to eat out:</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>{Math.round(eatOutPeople*10) /10}</Typography>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Typography>People like to watch movies:</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>{Math.round(moviesPeople*10) /10}</Typography>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Typography>People like to watch TV:</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>{Math.round(televisionPeople*10) /10}</Typography>
                                    </Grid>
                            
                                    <Grid item xs={6}>
                                        <Typography>People like to listen to the radio:</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>{Math.round(radioPeople*10) /10}</Typography>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Link component={RouterLink} to="/" > 
                                            <Button 
                                                color="primary"
                                                size="large"
                                                variant="contained"
                                                fullWidth
                                                className={classes.submit}
                                            >
                                                OK
                                            </Button>
                                        </Link>
                                    </Grid>

                            </Grid>
            
                            
                                
                            </Paper>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Results
