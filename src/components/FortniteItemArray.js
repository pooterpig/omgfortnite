import React from 'react';
import FortniteItem from './FortniteItem';
import GetItemShop from '../FortniteAPIManagement/GetItemShop';
import { Grid } from '@material-ui/core';
import LinearIndeterminate from './LinearIndeterminate';
import Refresh from './Refresh';

export default class FortniteItemArray extends React.Component {
    constructor(props) {
        super();
        this.state = {
            items: []
        };
        this.props = props;
    }

    getFortniteItems = async () => {
        try {
            const items = await GetItemShop();
            this.setState({items: items.data});
        } catch(error) {
            console.log(`An error occurred ${error}`);
        }
    }

    componentDidMount() {
        this.getFortniteItems();
    }

    handleRefresh = async () => {
        this.setState({ items: [] });

        this.getFortniteItems();
    }

    render() {
        return(
            <>
            <Refresh handleRefresh={this.handleRefresh} />
            <Grid container justify='center' spacing={4} style={{padding: 24}}>
            { this.state.items
                ? (
                this.state.items.map(entry => (
                <>
                    <Grid item xs={12} xl={3} sm={6} lg={4}>
                        <FortniteItem 
                        itemName={entry.item.name} 
                        itemRarity={entry.item.rarity} 
                        itemImage={entry.item.images.featured ? entry.item.images.featured : entry.item.images.background} 
                        itemCost={entry.store.cost}
                        rating={entry.item.ratings.avgStars}
                        itemType={entry.item.type}
                        />
                    </Grid>
                    {/* <Grid xs xl={7} /> */}
                </>
                )))
                : (
                <LinearIndeterminate />
                )}
            </Grid>
            </>
        )
    }
}