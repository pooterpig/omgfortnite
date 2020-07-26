import React from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.secondary,
        margin: theme.spacing(3),
        marginBottom: 0,
    }
}));

export default function Refresh(props) {
    const classes = useStyles();

    return (
        <div>
            <Button
                className={classes.root}
                variant="contained"
                color="secondary"
                startIcon={<RefreshIcon />}
                onClick={props.handleRefresh}
            >
                Refresh
            </Button>
        </div>
    )
}