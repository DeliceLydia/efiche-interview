import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login"
import Roles from './components/Roles';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/select-roles" element={<Roles />}/>
      </Routes>
    </Router>
  )
}

export default App
