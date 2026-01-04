// src/pages/home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'fusion-plugin-react-router';
import { useService, split } from 'fusion-react';
import { LoggerToken } from '../plugins/logger/token';

const LazyBoxA = split({
  load: () => import('../components/lazyBoxA'),
  LoadingComponent: () => <div style={styles.loading}>Loading Box A…</div>,
  ErrorComponent: () => <div style={styles.error}>Failed loading Box A</div>,
});

const LazyBoxB = split({
  load: () => import('../components/lazyBoxB'),
  LoadingComponent: () => <div style={styles.loading}>Loading Box B…</div>,
  ErrorComponent: () => <div style={styles.error}>Failed loading Box B</div>,
});

export default function Home() {
  const logger = useService(LoggerToken);
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);

  // SSR + client logging
  useEffect(() => {
    if (__NODE__) {
      if (logger && typeof logger.log === 'function')
        logger.log({ message: 'Home SSR render', meta: {}, level: 'info' });
    } else if (__BROWSER__) {
      logger && logger.log?.({ message: 'Home mounted (client)', level: 'info' });
    }
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🏠 Home Page</h1>

      <div style={styles.buttons}>
        <button
          style={styles.button}
          onClick={() => setShowA((prev) => !prev)}
        >
          {showA ? 'Hide' : 'Load'} Box A
        </button>
        <button
          style={styles.button}
          onClick={() => setShowB((prev) => !prev)}
        >
          {showB ? 'Hide' : 'Load'} Box B
        </button>
      </div>

      <div style={styles.lazyContainer}>
        {showA && <LazyBoxA />}
        {showB && <LazyBoxB />}
      </div>

      <div style={styles.nav}>
        <Link to="/about" style={styles.link}>About</Link> |{' '}
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: 30,
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',          // <-- center everything horizontally
  },
  heading: {
    marginBottom: 20,
    color: '#222',
    textAlign: 'center',          // <-- center the heading specifically
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',     // <-- center buttons
    gap: 15,
    marginBottom: 20,
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    backgroundColor: '#0070f3',
    color: '#fff',
    borderRadius: 5,
    cursor: 'pointer',
    fontSize: 16,
  },
  lazyContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',         // <-- center lazy components
    gap: 20,
  },
  nav: {
    marginTop: 30,
    fontSize: 16,
  },
  link: {
    color: '#0070f3',
    textDecoration: 'none',
  },
  loading: {
    padding: 20,
    border: '1px solid #ccc',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    color: '#555',
    textAlign: 'center',          // <-- center text in loading
  },
  error: {
    padding: 20,
    border: '1px solid #ff4d4f',
    borderRadius: 5,
    backgroundColor: '#fff1f0',
    color: '#ff4d4f',
    textAlign: 'center',          // <-- center text in error
  },
};
