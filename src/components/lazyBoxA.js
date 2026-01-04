import React from 'react';
import {useService} from 'fusion-react';
import {LoggerToken} from '../plugins/logger/token';

export default function LazyBoxA() {
  const logger = useService(LoggerToken);

  if (__NODE__) {
    logger.log({message: 'LazyBoxA SSR load', meta: {}, level: 'info'});
  }
  if (__BROWSER__) {
    logger.log({message: 'LazyBoxA client load', meta: {}, level: 'info'});
  }

  return <div style={{border: '1px solid blue', padding: 10}}>
    Lazy Box A loaded!
  </div>;
}
