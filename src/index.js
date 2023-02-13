import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Welcome from "./pages/Welcome"
import NoPages from "./pages/NoPages"
import ClassDetails from "./pages/ClassDetails"
import Home from './pages/Home';
import Login from './pages/Login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/classDetails/:id" element={<ClassDetails/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="*" element={ <NoPages/> } />
        </Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
