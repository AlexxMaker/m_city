import React  from 'react';
import Home from "./Components/Home/index"
import Layout from './Hoc/Layout'
import { Switch } from 'react-router-dom'
import SignIn from './Components/SignIn'
import PrivateRoute from './Components/authRoutes/privateRoutes'
import PublicRoute from './Components/authRoutes/publicRoutes'



//Admin routes
import Dashboard from './Components/Admin/Dashboard';
import AdminMatches from './Components/Admin/matches';
import AddEditMatch from './Components/Admin/matches/addEditMatch';
import AdminPlayers from './Components/Admin/players';
import AddEditPlayers from './Components/Admin/players/addEditPlayers';

const Routes = (props) => {

  return (
      <Layout>
        <Switch>
          <PrivateRoute {...props} path="/admin_players/add_players" exact component={AddEditPlayers}/>
          <PrivateRoute {...props} path="/admin_players/add_players/:id" exact component={AddEditPlayers}/>
          <PrivateRoute {...props} path="/admin_players" exact component={AdminPlayers}/>
          <PrivateRoute {...props} path="/admin_matches/edit_match" exact component={AddEditMatch}/>
          <PrivateRoute {...props} path="/admin_matches/edit_match/:id" exact component={AddEditMatch}/>
          <PrivateRoute {...props} path="/admin_matches" exact component={AdminMatches}/>
          <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
          <PublicRoute {...props} path="/sign_in" restricted={true} exact component={SignIn}/>
          <PublicRoute {...props} path="/" restricted={false} exact component={Home}/>
        </Switch>
      </Layout>
  );
}


export default Routes;
