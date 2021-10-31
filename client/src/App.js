import React from 'react';
import Home from './components/Home/home';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dashboard from './components/Dashboard/dashboard';
import { useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import { useDispatch, useSelector } from 'react-redux';
import { AUTOLOGIN } from './reduxSlices/authSlice';
import { Switch, Route, Redirect } from 'react-router-dom';
import { selectUserData } from './reduxSlices/authSlice';

const App =() => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  useEffect(()=>{
    dispatch(AUTOLOGIN());

    axios.get("http://localhost:5000/user/getFriends",{
      params:{
        userId:"617cc0b8b998f18d6814c439"
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
  }, [])

  return (
   <>
    <Header />
    {
      userData.loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
          <CircularProgress size={80} />
        </div>
      ) : userData.token ? (
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Redirect to="/"/>
          </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={Home}/>
          <Redirect to="/"/>
        </Switch>
      )
    }
    <Footer />
   </> 
  )
}

export default App
