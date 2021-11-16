import React from 'react';
import { CssBaseline,  Typography, Paper, Button, Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Radio,  Checkbox } from '@material-ui/core';
import { Container, Grid } from '@material-ui/core';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import TextField from '../../components/FormsUI/TextField';
import DateTimePicker from '../../components/FormsUI/DateTimePicker';
import useStyles from './styles';

const INITIAL_FORM_STATE = {
    firstName: '',
    lastName: '',
    phone: '',
    surveyDate: '',
    age: '',
    favoriteFood: [],
    eatOut: '',
    movies: '',
    television: '',
    listenToRadio: ''
};

const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    phone: Yup.number().integer().typeError('Please enter a valid phone number').required('Required'),
    surveyDate: Yup.date().required('Required'),
    age: Yup.number().integer().typeError('Please enter a valid age').required('Required'),
    favoriteFood: Yup.array().min(1).required('Choose atleast one favorite food'),
    eatOut: Yup.string().required("Eat out option is required"),
    movies: Yup.string().required("Movies option is required"),
    television: Yup.string().required("Televison option is required"),
    listenToRadio: Yup.string().required("Radio option is required"),
    
})

const SurveyForm = () => {
    const classes = useStyles();

    const handleSubmit = (values, props) => {
        console.log(values);
    }

    return (
        <Grid container>
            <CssBaseline />
            <Grid item xs={12}>
                <Container maxWidth="md">
                <Typography variant="h3" align="center">
                    Take Our Survey
                </Typography>
                <Paper className={classes.paper} elevation={10}>
                    <div className={classes.formWrapper}>
                        <Formik 
                            initialValues={{
                                ...INITIAL_FORM_STATE
                            }}
                            validationSchema={FORM_VALIDATION}
                            onSubmit={handleSubmit}
                            /* onSubmit={values => {
                                console.log(values)
                            }} */
                        >
                            {(props) => (
                                <Form>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Typography variant="h6">
                                                Personal details
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <TextField 
                                                name="firstName"
                                                label="First Name"
                                            />    
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <TextField 
                                                name="lastName"
                                                label="Last Name"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField 
                                                name="phone"
                                                label="Contact Number"
                                                />
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <DateTimePicker 
                                                name="surveyDate"
                                                label="Date"
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <TextField 
                                                name="age"
                                                label="Age"
                                                />
                                        </Grid>

                                        {/* Favorite Food Section*/}
                                        <Grid item xs={12} >
                                            <Typography variant="h6">
                                                What is your favourite food? (You can choose more than 1 answer)
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12}>    
                                            <div role="group" aria-labelledby="checkbox-group">
                                                <div>
                                                    <Field as={Checkbox} type="checkbox" name="favoriteFood" value="Pizza" />
                                                    <label className={classes.foodLabel}>
                                                        Pizza
                                                    </label>
                                                </div>
                                                
                                                <div>
                                                    <Field as={Checkbox} type="checkbox" name="favoriteFood" value="Pasta" />
                                                    <label className={classes.foodLabel}>
                                                        Pasta
                                                    </label>
                                                </div>

                                                <div>
                                                    <Field as={Checkbox} type="checkbox" name="favoriteFood" value="Pap and Wors" />
                                                    <label className={classes.foodLabel}>
                                                        Pap and Wors
                                                    </label>
                                                </div>

                                                <div>
                                                    <Field as={Checkbox} type="checkbox" name="favoriteFood" value="Chicken stir fry" />
                                                    <label className={classes.foodLabel}>
                                                        Chicken stir fry
                                                    </label>
                                                </div>
                                                    
                                                <div>
                                                    <Field as={Checkbox} type="checkbox" name="favoriteFood" value="Beef stir fry" />
                                                    <label className={classes.foodLabel}>
                                                    Beef stir fry
                                                    </label>
                                                </div>

                                                <div>
                                                    <Field as={Checkbox} type="checkbox" name="favoriteFood" value="Other" />
                                                    <label className={classes.foodLabel}>
                                                        Other
                                                    </label>
                                                </div>

                                                <div>
                                                    <h4 className={classes.errors}>
                                                        <ErrorMessage name="favoriteFood" />
                                                    </h4>
                                                </div>
                                            </div>
                                        </Grid>

                                        {/* Hobbies Section */}
                                        <Grid item xs={12}>
                                            <Typography variant="h6">
                                                On a scale of 1 to 5 indicate whether you strongly agree to strongly disagree
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TableContainer component={Paper} sx={{ width: '100%', overflow: 'hidden' }} elevation={5}>
                                                {/* <Table sx={{ minWidth: 650 }} aria-label="simple table"> */}
                                                <Table stickyHeader aria-label="sticky table" className={classes.table}>
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell>{}</TableCell>
                                                            <TableCell align="center">Strongly Agree (1)</TableCell>
                                                            <TableCell align="center">Agree (2)</TableCell>
                                                            <TableCell align="center">Neutral (3)</TableCell>
                                                            <TableCell align="center">Disagree (4)</TableCell>
                                                            <TableCell align="center">Strongly Disagree (5)</TableCell>
                                                        </TableRow>
                                                    </TableHead>

                                                    <TableBody>
                                                        <TableRow>
                                                            <TableCell align="center">I like to eat out</TableCell>
                                                                <TableCell align="center">
                                                                    <Field as={Radio} type="radio" name="eatOut" value="1" />
                                                                </TableCell>
                                                        
                                                                <TableCell align="center">
                                                                    <Field as={Radio} type="radio" name="eatOut" value="2" />
                                                                </TableCell>

                                                                <TableCell align="center">
                                                                    <Field as={Radio} type="radio" name="eatOut" value="3" />
                                                                </TableCell>
                                                            
                                                                <TableCell align="center">
                                                                    <Field as={Radio} type="radio" name="eatOut" value="4" />
                                                                </TableCell>

                                                                <TableCell align="center">
                                                                    <Field as={Radio} type="radio" name="eatOut" value="5" />
                                                                </TableCell> 
                                                        </TableRow>
                                                        
                                                        <TableRow>
                                                            <TableCell align="center">I like to watch movies</TableCell>
                                                                <TableCell align="center">
                                                                    <Field as={Radio} type="radio" name="movies" value="1" />
                                                                </TableCell>
                                                        
                                                                <TableCell align="center">
                                                                    <Field as={Radio} type="radio" name="movies" value="2" />
                                                                </TableCell>

                                                                <TableCell align="center">
                                                                    <Field as={Radio} type="radio" name="movies" value="3" />
                                                                </TableCell>
                                                            
                                                                <TableCell align="center">
                                                                    <Field as={Radio} type="radio" name="movies" value="4" />
                                                                </TableCell>

                                                                <TableCell align="center">
                                                                    <Field as={Radio} type="radio" name="movies" value="5" />
                                                                </TableCell> 
                                                        </TableRow>
                                                        
                                                        <TableRow>
                                                            <TableCell align="center">I like to watch TV</TableCell>
                                                                <TableCell align="center">
                                                                    <Field as={Radio} type="radio" name="television" value="1" />
                                                                </TableCell>
                                                        
                                                                <TableCell align="center">
                                                                    <Field as={Radio} type="radio" name="television" value="2" />
                                                                </TableCell>

                                                                <TableCell align="center">
                                                                    <Field as={Radio} type="radio" name="television" value="3" />
                                                                </TableCell>
                                                            
                                                                <TableCell align="center">
                                                                    <Field as={Radio} type="radio" name="television" value="4" />
                                                                </TableCell>

                                                                <TableCell align="center">
                                                                    <Field as={Radio} type="radio" name="television" value="5" />
                                                                </TableCell> 
                                                        </TableRow>

                                                        <TableRow>
                                                            <TableCell align="center">I like to listen to the radio</TableCell>
                                                                <TableCell align="center">
                                                                    <Field as={Radio}  type="radio" name="listenToRadio" value="1" />
                                                                </TableCell>
                                                        
                                                                <TableCell align="center">
                                                                    <Field as={Radio} type="radio" name="listenToRadio" value="2" />
                                                                </TableCell>

                                                                <TableCell align="center">
                                                                    <Field as={Radio} type="radio" name="listenToRadio" value="3" />
                                                                </TableCell>
                                                            
                                                                <TableCell align="center">
                                                                    <Field as={Radio} type="radio" name="listenToRadio" value="4" />
                                                                </TableCell>

                                                                <TableCell align="center">
                                                                    <Field as={Radio} type="radio" name="listenToRadio" value="5" />
                                                                </TableCell> 
                                                        </TableRow>
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>

                                    
                                            {/*  <div>Eat Out: {props.values.eatOut}</div>
                                            <div>Watch Movies: {props.values.movies}</div>
                                            <div>Watch TV: {props.values.television}</div>
                                            <div>Listen To Radio: {props.values.listenToRadio}</div> */}

                                            <div>
                                                <h4 className={classes.errors}>
                                                    <ErrorMessage name="eatOut" />
                                                </h4>
                                                <h4 className={classes.errors}>
                                                    <ErrorMessage name="movies" />
                                                </h4>
                                                <h4 className={classes.errors}>
                                                    <ErrorMessage name="television" />
                                                </h4>
                                                <h4 className={classes.errors}>
                                                    <ErrorMessage name="listenToRadio" />
                                                </h4>
                                            </div>
                                        </Grid>

                                        <Grid item xs={12} >
                                            <Button 
                                                variant="contained"
                                                color="primary"
                                                size="large"
                                                fullWidth
                                                type="submit" 
                                            >
                                                Submit form
                                            </Button>
                                        </Grid>
                                        
                                    </Grid>
                                </Form>
                            )}
                        </Formik>

                    </div>
                    </Paper>
                </Container>
            </Grid>

        </Grid>
    )
}

export default SurveyForm;
