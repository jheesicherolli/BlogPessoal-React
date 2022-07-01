import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//ReactDom= biblioteca
//render = metódo que vem da biblioteca ReactDom, ele renderiza tudo em tela
ReactDOM.render(
<React.StrictMode>
<App /> 
</React.StrictMode>,
document.getElementById('root')
);
//App é um componenter, é como se fosse uma tag html, vem do app.tsx
//root é uma div localizada no index.html
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//index.tsx é o reponsável por fazer a aplicação funcionar
