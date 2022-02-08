import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';
const Services = () => {
  return (
    <div id="services" className="services">
        <h1>my services</h1>
        <p>These are the services that I hope to develop in the near future.</p>
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
                  <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/></div>
                <h3>Web Design</h3>
                <p>I hope to approach each project individually and always focus on the result.</p>
              </div>
            </div>
            {/*  */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x"/></div>
                <h3>Web Development</h3>
                <p>My clients website will be build with an new proven technologies.</p>
              </div>
            </div>
            {/*  */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFacebookF} size="2x"/></div>
                <h3>Facebook Ads SMM</h3>
                <p>My potential clients will see the services or product on Facebook</p>
              </div>
            </div>
            {/*  */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faGoogle} size="2x"/></div>
                <h3>Google Ads</h3>
                <p>My clients service or product will appear at the Google search.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
