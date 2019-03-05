import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import { firebase } from '../../../firebase';



const AdminNav = (props) => {

    const links = [
        {
            title: 'Matches',
            linkTo: '/admin_matches'
        },

        {
            title: 'Add Match',
            linkTo: '/admin_matches/edit_match'
        },

        {
            title: 'Players',
            linkTo: '/admin_players'
        },

        {
            title: 'Add Players',
            linkTo: '/admin_players/add_player'
        }

    ];

    const style = {
        color: 'white',
        fontWeight: '300',
        borderBottom: '1px solid #353535'
    }

    const renderItems = () => (
        links.map((link, i) => (
            <Link key={i} to={link.linkTo}>
                <ListItem button style={style}>{link.title}</ListItem>
            </Link>
        ))
    );

  
    const logoutHandler = () => {
        firebase.auth().signOut().then(()=>{
            console.log('USER LOGGED OUT')
        },(error)=>{
            console.log('ERROR LOGGING OUT')
        } )
    }

    return (
        <div>
            {renderItems()}
            <ListItem button style={style} onClick={()=> logoutHandler()}>
                Log Out
            </ListItem>
        </div>
    );
}

export default AdminNav;