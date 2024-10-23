import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Login from "./components/Login"
import Roles from './components/Roles';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

const Layout = ({ children }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <div>
        <Sidebar sidebarToggle={sidebarToggle} />
        <div className="flex-1 h-full bg-[#fff]">
          <Navbar setSidebarToggle={setSidebarToggle} sidebarToggle={sidebarToggle}/>
      </div>
      <div className='flex-1 md:ml-64 h-full'>
        <Outlet />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/select-roles" element={<Roles />} />
        <Route path="/app" element={<Layout />} >
          <Route path="select-roles" element={<Roles />} />
        </ Route>
      </Routes>
    </Router>
  )
}

export default App
