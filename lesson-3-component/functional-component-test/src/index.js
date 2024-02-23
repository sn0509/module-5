import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import ClassComponentTest from './ClassComponentTest';
import MyComponent from './props/MyComponent';
import MyComponent2 from './state/MyComponent2';
import Login from './login.jsx/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      {/* <ClassComponentTest/> */} 
      {/* <MyComponent/> */}
      {/* <MyComponent2/> */}
      <Login/>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
