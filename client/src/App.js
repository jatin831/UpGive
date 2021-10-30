import React from 'react';
import Home from './components/home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
const App =() => {
  return (
   <>
   <BrowserRouter>
    <Home/>
    </BrowserRouter>
   </> 
  )
}

export default App
