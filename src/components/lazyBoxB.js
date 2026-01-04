import React from 'react';
import {useService} from 'fusion-react';
import {LoggerToken} from '../plugins/logger/token';

export default function LazyBoxB() {
  const logger = useService(LoggerToken);

  if (__NODE__) {
    logger.log({message: 'LazyBoxB SSR load', meta: {}, level: 'info'});
  }
  if (__BROWSER__) {
    logger.log({message: 'LazyBoxB client load', meta: {}, level: 'info'});
  }

  return <div style={{border: '1px solid green', padding: 10}}>
    Lazy Box B loaded!
  </div>;
}
