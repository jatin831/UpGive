import React from 'react';
import './home.css';
import Header from './Comp/header';
import landingVector from "../assets/landing.jpg";
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import CopyrightIcon from '@material-ui/icons/Copyright';

const Home = ()=>{
    return (
        <div className="landing">
            <Header/> 
        <section id="hero">
          <div className="container pt-4">
            <div className="row">
              <div className="col-lg-6 pt-5 pt-lg-0 mb-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <div>
                  <h2>Enhance your learning with</h2>
                  <h1 style = {{color:"#333333"}}><strong>UpGive</strong></h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.,<br/> 
                    Fuga provident eaque facere, sunt sint quis nostrum dolorum.</p>
                  <a href="#about" className="btn-get-started scrollto">Get Started</a>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 hero-img aos-init aos-ani0 FloatImg" data-aos="fade-left">
                <img src={landingVector} className="img-fluid animated" alt="" />
              </div>
            </div>
          </div>
        </section>
        <div className="Footer mt-3">
          <div className="row p-0 m-0">
              <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start px-0 py-2">
                  <div className="Footer_Copyright pe-2 pe-md-4 ms-0 ms-md-5 fw-bold" style = {{color:"white"}}>
                    <CopyrightIcon style={{fontSize: "16px", marginTop: "-5px", color:"white"}}/> UpGive 2021
                  </div>
                  <div className="ms-0 ms-md-4 ps-2 ps-md-0" style = {{color:"white"}}>
                    upgive731@gmail.com
                  </div>
              </div>
              <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end py-2">
                <span className="px-2">
                  <FacebookIcon style = {{color:"white"}}/>
                </span>
                <span className="px-2 ">
                  <InstagramIcon style = {{color:"white"}}/>
                </span>
                <span className="px-2">  
                  <TwitterIcon style = {{color:"white"}}/>
                </span>
                <span className="px-2">
                  <MailOutlineIcon style = {{color:"white"}}/>
                </span>
              </div>
          </div>
        </div>
      </div>
    );
}

export default Home;