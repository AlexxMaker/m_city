import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { CityLogo } from '../UI/icons';

import { Link } from 'react-router-dom';

class Header extends Component {
    state = {  }
    render() {
        return (
            <AppBar position="fixed"
                    style={{
                        backgroundColor: '#98c5e5',
                        boxShadow: 'none',
                        padding: "10px 0",
                        borderBottom: '2px solid #00285e'
                    }}>

                <Toolbar style={{display: 'flex'}}>
                    
                    <div style={{flexGrow: 1}}>
                        <div className="header_logo">
                            <CityLogo link={true}
                                        linkTo="/"
                                        width="70px"
                                        height="70px"
                                        >
                            </CityLogo>
                        </div>
                    </div>

                    <Link to="/team">
                        <Button color='inherit'>The Team</Button>
                    </Link>

                    <Link to="/matches">
                        <Button color='inherit'>Matches</Button>
                    </Link>

                </Toolbar>

            </AppBar>
        );
    }
}

export default Header;