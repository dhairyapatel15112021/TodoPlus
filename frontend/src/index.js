import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import Signin from './Components/Signin/Signin';
import { Signup } from './Components/Signup/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
const ourRouter = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      { path : "",element : <Home/>},
      { path : "signin",element : <Signin/>},
      { path : "signup",element : <Signup/>},
    ]
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={ourRouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
