import React from 'react';
import author from '../me.jpg';

const AboutMe = () => {
  return (
    <div id="about" className="container py-5 ">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            Welcome to my website. My name is Tran Thi Phuong Tra, currently a final year student at HUFLIT. Although I
            studied languages in university, during that time, because of my passion for web programming, I actively
            studied it. Up to now, I have had nearly 1 year of research in the field of Frontend developer. I have
            learned about programming languages like Javascript, Reactjs and have learned the basics of these languages.
            In addition, I also learned about HTML, CSS, related knowledge such as Bootstrap, Bithub,... I hope I will
            have the opportunity to join this company to improve my skills and improve my skills, make a contribution to
            the company. Sincerely thank!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
