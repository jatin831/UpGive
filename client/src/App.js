import React from 'react';
import Home from './components/home';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dashboard from './components/Header/dashboard';
import { useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { AUTOLOGIN } from './reduxSlices/authSlice';
import { Switch, Route } from 'react-redux-dom';

const App =() => {
  const dispatch = useDispatch();
  // const userData = useSelector()

  useEffect(()=>{
    dispatch(AUTOLOGIN());

    // axios.get("http://localhost:5000/user/getFriends",{
    //   params:{
    //     userId:"617ce19ca08f2465fa748cbf"
    //   }
    // }).then(res=>{
    //   console.log(res);
    // })
    // .catch(err=>{
    //   console.log(err);
    // })

    // axios.post("http://localhost:5000/user/addFriend",{
    //   friendsEmail:"jatinbajaj2001@gmail.com",
    //   userId: "617ce19ca08f2465fa748cbf"
    // }).then(res=>{
    //   console.log(res);
    // })
    // .catch(err=>{
    //   console.log(err);
    // })
  })

  return (
   <>
    {
      
    }
    <Switch>
      <Dashboard/>
    </Switch>
   </> 
  )
}

export default App
