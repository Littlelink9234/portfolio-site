import "../../index.css";
import "./Hero.css";

import { Events, Link, scrollSpy } from "react-scroll";
import { FC, useEffect } from "react";
import {
  faFacebookSquare,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParallax } from "react-scroll-parallax";

/*
    hero
    ================================================== 
*/

const Hero: FC = () => {
  const { ref } = useParallax({ speed: -34 });

  // useEffect is used to perform side effects in functional components.
  // Here, it's used to register scroll events and update scrollSpy when the component mounts.
  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <section id="hero" className="s-hero target-section">
      <div className="s-hero__bg rellax" ref={ref}></div>
      <div className="row s-hero__content">
        <div className="column">
          <div className="s-hero__content-about">
            <h1>I'm Jonathan Doe.</h1>
            <h3>
              I'm a Manila based <span>graphic designer</span>,{" "}
              <span>illustrator</span> and <span>webdesigner</span> creating
              awesome and effective visual identities for companies of all sizes
              around the globe. Let's{" "}
              <a className="smoothscroll" href="#about">
                start scrolling
              </a>
              and learn more{" "}
              <a className="smoothscroll" href="#about">
                about me
              </a>
              .
            </h3>

            <div className="s-hero__content-social">
              <a href="#0">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
              <a href="#0">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#0">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="s-hero__scroll">
        <Link
          href="#about"
          className="s-hero__scroll-link smoothscroll"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={1300}
        >
          <span className="scroll-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z"></path>
            </svg>
          </span>
          <span className="scroll-text">Scroll Down</span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
