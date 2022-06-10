import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from './assets/css/global';
import store from './store/store';
import { Provider as ReduxProvider } from 'react-redux'
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const paypalOptions = {
  'client-id': 'AXjbLvGCxbG3sSSP_c6R29qRSC3DQ-dZV-dayCtFP3gSq6vjW4xjV72RoVv-CDB9OvBG3rArvlG9ntoQ',
  currency: 'BRL'
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PayPalScriptProvider options={paypalOptions}>
        <BrowserRouter>
          <GlobalStyle />
          <App />
          <ToastContainer />
        </BrowserRouter>
      </PayPalScriptProvider>
    </ReduxProvider>
  </React.StrictMode>
);