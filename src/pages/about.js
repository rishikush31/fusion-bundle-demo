// src/pages/about.js
import React from 'react';
import { useService } from 'fusion-react';
import { LoggerToken } from '../plugins/logger/token';

export default function About() {
  const logger = useService(LoggerToken);

  // SSR logging
  if (__NODE__ && logger && typeof logger.log === 'function') {
    logger.log({ message: 'About SSR render', meta: {}, level: 'info' });
  }

  // Client logging
  if (__BROWSER__ && logger && typeof logger.log === 'function') {
    logger.log({ message: 'About client render', meta: {}, level: 'info' });
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>ℹ️ About Page</h1>
      <p style={styles.text}>
        This is the About page. You can describe your app, team, or project here.
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
