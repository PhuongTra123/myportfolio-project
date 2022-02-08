import React from 'react';

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>learning process</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>HTML</h3>
            <p>
              HTML is a text file containing specific syntax, file and naming conventions that show the computer and the
              web server that it is in HTML and should be read as such. By applying these HTML conventions to a text
              file in virtually any text editor, a user can write and design a basic webpage, and then upload it to the
              internet.
            </p>
          </div>
        </div>

        {/* ---- */}

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>CSS</h3>
            <p>
              CSS is used to define styles for your web pages, including the design, layout and variations in display
              for different devices and screen sizes. CSS describes how HTML elements are to be displayed on screen,
              paper, or in other media CSS saves a lot of work. It can control the layout of multiple web pages all at
              once
            </p>
          </div>
        </div>

        {/* ---------- */}

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Javascript</h3>
            <p>
              JavaScript is a scripting language that enables you to create dynamically updating content, control
              multimedia, animate images, and pretty much everything else. JavaScript is the Programming Language for
              the Web. JavaScript can update and change both HTML and CSS. JavaScript can calculate, manipulate and
              validate data.
            </p>
          </div>
        </div>

        {/* ----- */}

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Reactjs</h3>
            <p>
              ReactJS offers graceful solutions to some of front-end programming’s most persistent issues, allowing you
              to build dynamic and interactive web apps with ease. It’s fast, scalable, flexible, powerful, and has a
              robust developer community that’s rapidly growing.
            </p>
          </div>
        </div>

        {/* --- */}

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Bootstrap</h3>
            <p>
              Learn about Bootstrap’s grid system to construct complex layouts. Then, style and populate your site using
              Bootstrap’s utility classes and components. With Bootstrap, HTML, some familiarity with CSS, and
              JavaScript, you’ll be making websites in no time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
