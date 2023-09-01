// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CatList from './components/CatList';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CatList} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
