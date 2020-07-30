import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { CardActionArea, CardActions, CardContent, CardMedia, Typography, Card, Grid } from '@material-ui/core';
import vbucks from './vbucks.png';
import star from './star.png';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.secondary,
    },
    media: {
        height: 0,
        paddingTop: '100%', // 16:9,
        marginTop:'30'
    },
    vbucks: {
        height: 25,
    },
    itemName: {
        color: theme.text.primary,
        fontWeight: 'light',
        fontSize: 30
    },
    itemInfo: {
        color: theme.text.secondary,
        fontWeight: 'light',
        fontSize: 20
    },
    gold: {
        color: 'gold'
    },
    purple: {
        color: 'purple'
    },
    blue: {
        color: 'blue'
    },
    green: {
        color: green[500]
    },
    gray: {
        color: 'gray'
    }
});

class FortniteItem extends React.Component {
    constructor(props) {
        super();
        this.props = props;
    };

    render() {
        const { classes } = this.props;

        const itemColorPicker = (itemRarity) => {
            switch(itemRarity) {
                case 'legendary':
                    return classes.gold;
                    break;
                case 'epic':
                    return classes.purple;
                    break;
                case 'rare':
                    return classes.blue;
                    break;
                case 'uncommon':
                    return classes.green;
                    break;
                case 'common':
                    return classes.gray;
                    break;
                default:
                    return;                
            };
        }

        return (
        <Card className={classes.root} >
            <CardActionArea onClick={() => console.log('oof')}>
                <CardMedia
                    className={classes.media}
                    image={this.props.itemImage}
                    // image='https://i.dlpng.com/static/png/6877748_preview.png'
                    title={this.props.itemName}
                />
            </CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.itemName}>
                {this.props.itemName}
                </Typography>
                <div>
                    <Grid container spacing={1}>
                        <Grid item xs={12} xl={12} sm={12} md={12} lg={12}>
                            <Typography variant="body2" color="textSecondary" component="p" className={classes.itemInfo} style={{fontWeight: 500}}>
                                {`${this.props.itemType[0].toUpperCase()}${this.props.itemType.substring(1)}`}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} xl={12} sm={12} md={12} lg={12}>
                            <Typography variant="body2" color="textSecondary" component="p" className={itemColorPicker(this.props.itemRarity)} style={{fontWeight: 500}}>
                                {`${this.props.itemRarity[0].toUpperCase()}${this.props.itemRarity.substring(1)}`}
                            </Typography>
                        </Grid>
                        <Grid item xs={2} xl={1} sm={1} md={1} lg={1}>
                            <img src={vbucks} alt='vbucks' className={classes.vbucks} />
                        </Grid>
                        <Grid item xs={10} xl={11} sm={11} md={11} lg={11}>
                            <Typography className={classes.itemInfo}>
                                {this.props.itemCost}
                            </Typography>
                        </Grid>
                        <Grid item xs={2} xl={1} sm={1} md={1} lg={1}>
                            <img src={star} alt='ratings' className={classes.vbucks} />
                        </Grid>
                        <Grid item xs={10} xl={11} sm={11} md={11} lg={11}>
                            <Typography className={classes.itemInfo} style={{marginTop: 2}}>
                                {this.props.rating}/5
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </CardContent>

            <CardActions>
            </CardActions>
        </Card>
        );
    }
}

export default withStyles(styles)(FortniteItem);