import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
import Lista from './Components/Lista/Lista'
import reportWebVitals from './reportWebVitals';
import CatalogoProdutos from './Components/CatalogoProdutos/CatalogoProdutos';
import ToDoList from './Components/ToDoList/ToDoList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Lista />
    <CatalogoProdutos />
    <ToDoList/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
