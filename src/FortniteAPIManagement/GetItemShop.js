import axios from 'axios';
// const axios = require('axios');
const config = require('./config.json');

export default async function GetItemShop() {
    try {
        const fortniteResponse = await axios.get(`${config.api.invoke}`, {
            headers: {
                Authorization: config.api.key
            }
        });

        return fortniteResponse.data
    } catch(error) {
        console.log(error);
    }
}