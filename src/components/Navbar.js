import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.secondary
    },
    titleText: {
        flexGrow: 1,
        position: 'absolute',
        left: "50%",
        // top: '10%',
        transform: "translate(-50%)",
        color: theme.text.primary,
        // fontFamily: 'Burbank Big Condensed'
    }
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Typography className={classes.titleText} variant='h4'>
                    FOrtTNite
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    );
}