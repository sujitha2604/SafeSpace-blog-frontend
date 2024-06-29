import React from "react";
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/home/single/Single";
import Write from "./pages/home/write/Write";
import Settings from "./pages/home/settings/Settings";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Routes,
  Link
}
from "react-router-dom";
function App() {
  const user=false;
  return (
    <Router>
    <TopBar/>
    <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/register" element={user?<Home/>:<Register/>} />
          <Route path="/login" element={user?<Home/>:<Login/>} />
          <Route path="/write" element={user?<Write/>:<Register/>} />
          <Route path="/settings" element={user?<Settings/>:<Register/>} />
          <Route path="/post/:postId" element={<Single/>} />

        </Routes>
         
    </Router>
  );
}

export default App;
