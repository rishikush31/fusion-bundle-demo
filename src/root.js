// @flow
import React from 'react';
import {Route, Switch} from 'fusion-plugin-react-router';
import {split} from 'fusion-react';

import Home from './pages/home';

const About = split({
  load: () => import('./pages/about'),
  LoadingComponent: () => <div>Loading About…</div>,
  ErrorComponent: () => <div>Error loading About</div>,
});

const Contact = split({
  load: () => import('./pages/contact'),
  LoadingComponent: () => <div>Loading Contact…</div>,
  ErrorComponent: () => <div>Error loading Contact</div>,
});

const root = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default root;
