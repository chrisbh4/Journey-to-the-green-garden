// import logo from './logo.svg';
import './App.css';
import React from "react";
import { Route, Link } from "react-router-dom";

import {Routes} from "react-router-dom";
import { useState } from 'react/cjs/react.production.min';
import ApiTest from './components';


function App() {
  function Home() {
    return <h2> Inside Home</h2>;
  }

  function About() {
    return <h2>About</h2>;
  }

  function Users() {
    return <h2>Users</h2>;
  }


//   const [data, setData]= useState('')

// async function apiCall(){
//   const res = await fetch('https://api.interview.rlliquidators.com')
//   const data = await res.json();
//   console.log("data")
//   setData(data)
//   return data
// }


  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/api">API</Link>
            </li>
          </ul>
        </nav>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About/>} />
            <Route path='/users' element={<Users/>} />
            <Route path='api' element={<ApiTest/>} />
        </Routes>
      </div>
    </>
  );
}






export default App;
