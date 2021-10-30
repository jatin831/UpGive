import React from 'react';
import Home from './components/Home/home';
import { useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { AUTOLOGIN } from './reduxSlices/authSlice';

const App =() => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(AUTOLOGIN());

    axios.get("http://localhost:5000/user/getFriends",{
      params:{
        userId:"617ce19ca08f2465fa748cbf"
      }
    }).then(res=>{
      console.log(res);
    })
    .catch(err=>{
      console.log(err);
    })

    axios.post("http://localhost:5000/user/addFriend",{
      friendsEmail:"jatinbajaj2001@gmail.com",
      userId: "617ce19ca08f2465fa748cbf"
    }).then(res=>{
      console.log(res);
    })
    .catch(err=>{
      console.log(err);
    })
  })

  return (
   <>
   <BrowserRouter>
    <Home/>
    </BrowserRouter>
   </> 
  )
}

export default App
