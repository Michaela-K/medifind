import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import App from './App';
import Navbar from "./components/Nav";
import JobsList from "./components/JobsList";
import NewJob from "./components/NewJob";
import { JobsContextProvider } from '../src/context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <JobsContextProvider>
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes> 
        <Route path="/" element={<App/>} />
        <Route path="/newjob" element={<NewJob/>}  />
        <Route path="/jobsList" element={<JobsList/>}  />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </JobsContextProvider>
);

