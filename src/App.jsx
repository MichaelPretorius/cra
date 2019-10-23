/* eslint-disable react/button-has-type */
import React from 'react';
import { ModalProvider } from 'styled-react-modal';
// import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import { signInWithGoogle } from './firebase';
import ModalButton from './ModalButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={signInWithGoogle}>Sign in with google</button>
        <ModalProvider>
          <ModalButton />
        </ModalProvider>
      </header>
    </div>
  );
}

export default App;
