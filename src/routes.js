import React  from 'react';
import Home from "./Components/Home/index"
import Layout from './Hoc/Layout'
import { Switch } from 'react-router-dom'
import SignIn from './Components/SignIn'
import PrivateRoute from './Components/authRoutes/privateRoutes'
import PublicRoute from './Components/authRoutes/publicRoutes'


//Admin routes
import Dashboard from './Components/Admin/Dashboard'

const Routes = (props) => {

  return (
      <Layout>
        <Switch>
          <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
          <PublicRoute {...props} path="/sign_in" restricted={true} exact component={SignIn}/>
          <PublicRoute {...props} path="/" restricted={false} exact component={Home}/>
        </Switch>
      </Layout>
  );
}


export default Routes;
