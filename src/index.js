import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import { createStore } from 'redux';
import { CartProvider } from './context/cart';
 import combineReducer from './redux/combineReducer';
 const store = createStore(combineReducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//user auth cart provider from contextapi and used store for provider
<Provider store={store}>
<AuthProvider>
  <CartProvider>
  <BrowserRouter>
     <App />
     </BrowserRouter> 
  </CartProvider>  
  </AuthProvider>
</Provider>
   
 
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
