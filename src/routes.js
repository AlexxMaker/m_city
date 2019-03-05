import React  from 'react';
import Home from "./Components/Home/index"
import Layout from './Hoc/Layout'
import { Switch, Route } from 'react-router-dom'
import SignIn from './Components/SignIn'


//Admin routes
import Dashboard from './Components/Admin/Dashboard'

const Routes = (props) => {
  return (
      <Layout>
        <Switch>
          <Route exact component={Dashboard} path="/dashboard"/>
          <Route exact component={SignIn} path="/sign_in"/>
          <Route exact component={Home} path="/"/>
        </Switch>
      </Layout>
  );
}


export default Routes;
