import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import TestForm from '../pages/TestForm';
import CreateKitnet from '../pages/CreateKitnet';
import SearchKitnet from '../pages/SearchKitnet';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/test" component={TestForm} />
      <Route path="/create" component={CreateKitnet} />
      <Route path="/search" component={SearchKitnet} />
    </Switch>
  );
};

export default Routes;
