// import React from 'react';
// import { Typography } from '@material-ui/core';

// export default function TimeUntilRefresh(props) {
//     const calculateTimeLeft = () => {
//         const now = new Date();

//         console.log(now);
//     }
// }

const calculateTimeLeft = () => {
    let refresh = new Date();
    refresh.setHours(17, 0, 0, 0);
    refresh.setDate(refresh.getDate() + 1);

    // console.log(now.getMonth());
    // const refreshToday = new Date(`${Date.getMonth()`)

    // if (now)
    let difference = refresh - new Date();
    
    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    }

    return timeLefta;
}
calculateTimeLeft();