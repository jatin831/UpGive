import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import CopyrightIcon from '@material-ui/icons/Copyright';

const Footer = () => {
    return (
        <div className="Footer mt-3 d-none d-md-block">
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
    )
}

export default Footer;