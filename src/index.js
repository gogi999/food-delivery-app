import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './redux/StateProvider';
import reducer, { initialState } from './redux/reducer';

render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
