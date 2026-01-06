// @flow
import App from 'fusion-react';
import Router from 'fusion-plugin-react-router';
import Styletron from 'fusion-plugin-styletron-react';
import root from './root.js';

import LoggerPlugin from './plugins/logger/plugin';
import {LoggerToken} from './plugins/logger/token';

export default () => {
  const app = new App(root);
  app.register(LoggerToken, LoggerPlugin);
  app.register(Styletron);
  app.register(Router);
  return app;
};
