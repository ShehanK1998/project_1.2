 import React from 'react';
 import { Route, Routes} from 'react-router-dom';
 import {Box} from '@mui/material';
 import './App.css';
 import ExcerciseDetail from './components/pages/ExcerciseDetail';
 import Navbar from './components/Navbar';
 import Home from './components/pages/Home';
 import Footer from './components/Footer';
 
 
 const App = () => {
   return (
     <Box width = "400px">
        <Navbar/>
        <Routes>
            <Route path= "/" element = {<Home/>} />
            <Route path= "/excercise/:id" element = {<ExcerciseDetail/>} />

        </Routes>
        <Footer/>
     </Box>
   )
 }
 
 export default App