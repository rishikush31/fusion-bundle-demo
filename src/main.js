// @flow
import App from 'fusion-react';
import Router from 'fusion-plugin-react-router';
import Styletron from 'fusion-plugin-styletron-react';
import Root from './root';

import LoggerPlugin from './plugins/logger/plugin';
import {LoggerToken} from './plugins/logger/token';

export default function main() {
  const app = new App(<Root />);
  app.register(LoggerToken, LoggerPlugin);
  app.register(Styletron);
  app.register(Router);
  return app;
}
