import "../../index.css";
import "./Header.css";

import { Events, Link, scrollSpy } from "react-scroll";
import { FC, useEffect } from "react";

interface NavLinkProps {
  linkNames: string[];
}

/* 
    header
    ================================================== 
*/

const Header: FC<NavLinkProps> = ({ linkNames }) => {
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
    <header className="s-header">
      <div className="row s-header__nav-wrap">
        <nav className="s-header__nav">
          <ul>
            <li className="current">
              <Link
                activeClass="active"
                className="hero"
                to="hero"
                spy={true}
                smooth={true}
                duration={1400}
                href="#hero"
              >
                {linkNames[0]}
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="about"
                to="about"
                spy={true}
                smooth={true}
                duration={1400}
                href="#about"
              >
                {linkNames[1]}
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="resume"
                to="resume"
                spy={true}
                smooth={true}
                duration={1400}
                href="#resume"
              >
                {linkNames[2]}
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="portfolio"
                to="portfolio"
                spy={true}
                smooth={true}
                duration={1400}
                href="#portfolio"
              >
                {linkNames[3]}
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="contact"
                to="contact"
                spy={true}
                smooth={true}
                duration={1400}
                href="#contact"
              >
                {linkNames[4]}
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <a className="s-header__menu-toggle" href="#0" title="Menu">
        <span className="s-header__menu-icon"></span>
      </a>
    </header>
  );
};

export default Header;
