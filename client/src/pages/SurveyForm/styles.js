import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    dialogWrapper:{
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5),
    },
    paper: {
        margin: theme.spacing(6,0),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
    },
    table: {
        marginTop: theme.spacing(3),
        '& thead th': {
            fontWeight: '600',
            color: '#fff',
            backgroundColor: '#555'
            // backgroundColor: theme.palette.primary.light
        },
        '& tbody td': {
            fontWeight: '300',
        },
    },
    submit: {
        margin: theme.spacing(3, 0),
    },
    formWrapper: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(8)
    },
    errors: {
        margin: '5px 5px',
        color: 'red',
        fontWeight: '200'
    },
    foodLabel: {
        marginLeft: '10px',
    },
    tblRow: {
        width: '100%',
        backgroundColor: 'red' 
    }
    
}));
