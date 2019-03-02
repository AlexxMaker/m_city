import React from 'react';
import Featured from './Featured'
import Matches from '../Home/Matches'
import MeetPlayers from './MeetPlayers'

const Home = () => {
    return (
        <div className='bck_blue'>
            <Featured />
            <Matches />
            <MeetPlayers />
        </div>
    );
}

export default Home;