import React from "react";
import resume from "./images/resume.png";
import github from "./images/Github.svg";
import linkedin from "./images/Linkedin.svg";

const AboutMe = () => (
  <div>
    {" "}
    <h2>About Me</h2>
    <p className="AboutMe">
      I'm a third year Computer Science Student at the University of Windsor.
      Specializing in Software Engineering. I've worked with an array of
      different languages, including Java, JavaScript, C, Python, Bash, HTML,
      CSS, SQL. I'm familiar with the Windows, Linux and Ubuntu machine
      environments.
    </p>
    <p>
      {" "}
      I come from a math background, learning it from a young age through
      tutoring and now boasting a 91 overall average in all core math classes,
      as well as being on my way to recieving my minor in mathematics alongside
      the CS degree.
    </p>
    <p>
      If I'm not coding, you can find me on a basketball court or football
      field. Huge lions fan, and played football for four years at the high
      school level. My experience and love for team oriented sports, translates
      to my understanding working in team environments. I also bring a
      competitive nature through my sports background.
    </p>
    <p>
      Please check out my resume, github, and linkedin to learn more about me.
    </p>
    <a
      href="https://drive.google.com/file/d/193YKq-1auuvUkt9iFg2Eq4Ks8dcUrS9C/view?usp=sharing"
      target="_blank"
    >
    <img className="links" src={resume} height="50" width="50" />
    </a>
    <a
      href="https://www.linkedin.com/in/bilal-malik-15754b185/"
      target="_blank"
    >
      <img className="links" src={linkedin} height="50" width="50" />
    </a>
    <a href="https://github.com/bilalmalik4321" target="_blank">
      <img className="links" src={github} height="50" width="50" />
    </a>
  </div>
);

export default AboutMe;
