import React from 'react';
import {useService} from 'fusion-react';
import {LoggerToken} from '../plugins/logger/token';

export default function Contact() {
  const logger = useService(LoggerToken);

  if (__NODE__) {
    logger.log({message: 'Contact SSR render', meta: {}, level: 'info'});
  }
  if (__BROWSER__) {
    logger.log({message: 'Contact client render', meta: {}, level: 'info'});
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>ℹ️ Contact Page</h1>
      <p style={styles.text}>
        This is the Contact page. You can add your Contact details, address or mobile number too.
      </p>
    </div>
  );
}


const styles = {
  container: {
    padding: 30,
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center', // center everything
  },
  heading: {
    marginBottom: 20,
    color: '#222',
  },
  text: {
    fontSize: 16,
    color: '#555',
  },
};

