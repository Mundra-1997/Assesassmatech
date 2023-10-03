import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import AddUser from './components/AddUser'
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/" element={<UserList/>} />
        <Route path="users/:userId" element={<UserProfile/>} />
        <Route path="users/addusers" element={<AddUser/>}/>
      </Routes>
    </Router>
    {/* <ToastContainer  /> */}
    </>
    
  );
}

export default App;
