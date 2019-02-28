import React  from 'react';
import Home from "./Components/Home/index"
import Layout from './Hoc/Layout'
import { Switch, Route } from 'react-router-dom'

const Routes = (props) => {
  return (
      <Layout>
        <Switch>
          <Route exact component={Home} path="/"/>
        </Switch>
      </Layout>
  );
}


export default Routes;
