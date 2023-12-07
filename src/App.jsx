import React, { useEffect, useState } from 'react'
import Axios from "axios";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import UserProfile from './UserForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import "./App.css";
import "./HomePage.css"
import HomePage from './HomePage';
const App = () => {
  const [data, setData] = useState("");

  const getData = async()=>{
    const response = await Axios.get("http://localhost:8000/api");
    setData(response.data);
  }


  useEffect(()=>{
    getData()
  },[]);

  return (
  <Router>
    <Routes>
        <Route path="/signin" element={<LoginForm />} />
        <Route path="/signup" element={<RegistrationForm />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/" element={<HomePage />} />
      
    </Routes>
  </Router>
  );
}

export default App

