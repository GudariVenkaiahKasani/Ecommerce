import React from 'react';
import './App.css';

import './App.css'; 
import './index.css';  
import SignUp from './Components/LogIn/SignUp.tsx'; 
//import PlantComponent from './Components/Plants/PlantComponent.tsx'; 
//import PlantDisplayComponent from './Components/Plants/PlantDisplayComponent.tsx'; 
import HomeNavBar from './Components/Resuable/HomeNavBar.tsx'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Resuable/Home.tsx';
import Login from './Components/LogIn/Login.tsx';


function App() {
  return (
        
    <Router> 
      
      <Routes>
        <Route path="/signup" element={<SignUp />} />
         <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
       
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/plants" element={<PlantCompoonet />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
