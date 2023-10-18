import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import './index.css';
import {  ThemeProvider } from '@mui/material';
import { darkTheme } from 'theme';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={darkTheme}>
         <BrowserRouter basename="/PhoneBook_final">
          <App />
          </BrowserRouter>
       </ThemeProvider>
    </PersistGate>
      </Provider>
    
  </React.StrictMode>
);
