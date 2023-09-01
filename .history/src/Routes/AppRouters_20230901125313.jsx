// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CatsList from '../component/CatList';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CatsList} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
