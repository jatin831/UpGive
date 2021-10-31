import React, { useState } from 'react';
import './home.css';
import landingVector from "../../assets/landing.jpg";
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../reduxSlices/authSlice';
import LoginModal from '../Header/loginModals';

const Home = ({show, setShow, toggle})=>{
  const history = useHistory();
  const userData = useSelector(selectUserData);

  const getStarted = () => {
    if (userData.token) {
      history.push('/dashboard');
    } else {
      setShow(true);
    }
  }

  return (
    <>
      <div className="landing"> 
      <section id="hero">
        <div className="container pt-4">
          <div className="row">
            <div className="col-lg-6 pt-5 pt-lg-0 mb-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <div>
                <h2>Enhance your learning with</h2>
                <h1 style = {{color:"#333333"}}><strong>UpGive</strong></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.,<br/> 
                  Fuga provident eaque facere, sunt sint quis nostrum dolorum.</p>
                <div onClick={getStarted} className="btn-get-started scrollto">Get Started</div>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img aos-init aos-ani0 FloatImg" data-aos="fade-left">
              <img src={landingVector} className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </section>
      
    </div>
    </>
  );
}

export default Home;