import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import CreateKitnet from '../pages/CreateKitnet';
import SearchKitnet from '../pages/SearchKitnet';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/create" component={CreateKitnet} />
      <Route path="/search" component={SearchKitnet} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default Routes;
