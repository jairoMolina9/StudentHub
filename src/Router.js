import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import App from './App';
import Feed from './Feed';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/feed/:id" component={Feed} />
    </Switch>
  </BrowserRouter>

)

export default Router;