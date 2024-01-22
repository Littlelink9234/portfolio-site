import "../../index.css";
import "./About.css";

import { FC } from "react";

/* 
    about
    ================================================== 
 */
const About: FC = () => {
  return (
    <section id="about" className="s-about target-section">
      <div className="row">
        <div className="column large-3 tab-12">
          <img
            className="s-about__pic"
            src="images/avatar/profile_image.jpg"
            alt=""
          />
        </div>
        <div className="column large-9 tab-12 s-about__content">
          <h3>About Me</h3>

          <p>
            Ever since I was young I was always eager to learn about technology.
            I started playing video games at a young age and that furthered my
            interests in pursuing a career in the tech world. I began working on
            the hardware side fixing computers as a PC technician and decided to
            engage in software development in college. After graduating school,
            I worked for various companies as a Software Developer learning
            different kinds of architectures and software designs. I am
            fascinated by the issues technology has solved and that pushes me to
            be a part of that community. Hopefully I can make the world a better
            place by helping others with technology.
          </p>

          <hr />

          <div className="row s-about__content-bottom">
            <div className="column w-1000-stack">
              <h3>Contact Details</h3>

              <p>
                Jason Carvalho <br />
                Bayside, NY USA <br />
                <a href="mailto:jason.carvalho1@gmail.com">
                  jason.carvalho1@gmail.com
                </a>
              </p>
            </div>
            <div className="column w-1000-stack">
              <a href="#0" className="btn btn--download">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z"></path>
                  <path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z"></path>
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
