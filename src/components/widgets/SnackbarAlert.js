import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function SnackbarAlert(props) {
    const classes = useStyles();    
    const [open, setOpen] = React.useState(props.status);    

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
        props.updateStatus(false);
    };

    return (
        <div className={classes.root}>

            <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
                {/* msgType ===> success, error, warning, info */}
                <Alert onClose={handleClose} severity={props.msgType}>
                    {props.msg}
                </Alert>

            </Snackbar>
        </div>
    );
}
