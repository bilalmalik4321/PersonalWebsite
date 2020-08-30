import React from "react";
import winhacks from "./winhacks.mp4";
import mediplus from "./mediplus.mp4";
import malikhospital from "./MalikHospital.mp4";
import StaySafeKeepSpace from "./StaySafeKeepSpace.mp4";
import "./App.css";

const Project = () =>(
<div>
    <h2>Projects</h2>
    <link rel="stylesheet" href="/css/video-react.css" />
    <br />
    <a
            className="Project-Header"
            href="http://winhacks.ca"
            target="_blank"
            rel="noopener"
    >
            <h3>Winhacks</h3>
            <video id="background-video" width="420" height="340" loop autoPlay muted>
              <source src={winhacks} type="video/mp4" />
              <source src={winhacks} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </a>
          <p>
            This website was built for the winhacks organization, the group that
            puts together the University of Windsor's very own hackathon. The
            website to date, has recieved 400 applications and counting, as well
            the approval of the major league hacking group, that saw this
            website as a clear amplifier to the goals that were going to be met
            and exceeded by the team. I personally worked to setup the github
            organization and repositories, as well as helped develop in the
            front end working with; <b>HTML5</b>, <b>CSS</b>, and{" "}
            <b>JavaScript</b>.
          </p>
          <br />
          <a
            className="Project-Header"
            href=""
            target="_blank"
            rel="noopener"
    >
            <h3>StaySafeKeepSpace</h3>
            <video id="background-video" width="420" height="340" loop autoPlay muted>
              <source src={StaySafeKeepSpace} type="video/mp4" />
              <source src={StaySafeKeepSpace} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </a>
          <p>
            This website was built for helping front line health care workers; 
            by donating personal protective equipment. This was built during a 
            hackathon. The website is responsive, built in <b>react</b> and works with
            a <b>firetore</b> database in the backend. It follows through steps on a form,
            to figure out; who you are, what you'll be donating, and from where.
            An email will be then sent when a hospital has confirmed usage of the
            equipment with a specific date and time of pickup.
          </p>
          <br />
          <a
            className="Project-Header"
            href="http://malik11y.myweb.cs.uwindsor.ca/60334/project2/index.php"
            target="_blank"
            rel="noopener"
          >
            <h3>Mediplus</h3>
            <video id="background-video" width="420" height="340" loop autoPlay muted>
              <source src={mediplus} type="video/mp4" />
              <source src={mediplus} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </a>
          <p>
            This website was built for the world wide web class. Featuring fully
            functional forms for sign in and sign up, storing data in a{" "}
            <b>MySQL</b> database built in <b>SQL</b>, and communicating the
            forms information to the database in <b>PHP</b>.
          </p>
          <br />
          <a
            className="Project-Header"
            href="http://malik11y.myweb.cs.uwindsor.ca/60334/project/main.html"
            target="_blank"
            rel="noopener"
          >
            <h3>Malik Hospital</h3>
            <video id="background-video" width="420" height="340" loop autoPlay muted>
              <source src={malikhospital} type="video/mp4" />
              <source src={malikhospital} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </a>
          <p>
            This website was built for fun, and my first experience in full stack.
            Featuring fully functional forms for sign in and sign up, storing
            data in a <b>MySQL</b> database built in <b>SQL</b>, and
            communicating the forms information to the database in <b>PHP</b>.{" "}
            <b>AJAX</b> was utilized to create dynamic responsive searching, by
            having <b>JSON</b> stored projects in the browser on load time.
          </p>
</div>
);

export default Project;