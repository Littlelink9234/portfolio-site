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
    //scrollSpy.update();

    moveHeader();
    mobileMenu();
    scrollSpy();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const moveHeader = () => {
    const hdr = document.querySelector(".s-header");
    const hero = document.querySelector("#hero");
    let triggerHeight;

    if (!(hdr && hero)) return;

    setTimeout(function () {
      triggerHeight = hero.clientHeight - 170;
    }, 300);

    window.addEventListener("scroll", function () {
      let loc = window.scrollY;

      if (loc > triggerHeight) {
        hdr.classList.add("sticky");
      } else {
        hdr.classList.remove("sticky");
      }

      if (loc > triggerHeight + 20) {
        hdr.classList.add("offset");
      } else {
        hdr.classList.remove("offset");
      }

      if (loc > triggerHeight + 150) {
        hdr.classList.add("scrolling");
      } else {
        hdr.classList.remove("scrolling");
      }
    });
  };

  const mobileMenu = () => {
    const toggleButton = document.querySelector(".s-header__menu-toggle");
    const headerNavWrap = document.querySelector(".s-header__nav-wrap");
    const siteBody = document.querySelector("body");

    if (!(toggleButton && headerNavWrap)) return;

    toggleButton.addEventListener("click", function (event) {
      event.preventDefault();
      toggleButton.classList.toggle("is-clicked");
      siteBody.classList.toggle("menu-is-open");
    });

    headerNavWrap.querySelectorAll(".s-header__nav a").forEach(function (link) {
      link.addEventListener("click", function (evt) {
        // at 800px and below
        if (window.matchMedia("(max-width: 800px)").matches) {
          toggleButton.classList.toggle("is-clicked");
          siteBody.classList.toggle("menu-is-open");
        }
      });
    });

    window.addEventListener("resize", function () {
      // above 800px
      if (window.matchMedia("(min-width: 801px)").matches) {
        if (siteBody.classList.contains("menu-is-open"))
          siteBody.classList.remove("menu-is-open");
        if (toggleButton.classList.contains("is-clicked"))
          toggleButton.classList.remove("is-clicked");
      }
    });
  };

  const scrollSpy = () => {
    const sections = document.querySelectorAll(".target-section");

    window.addEventListener("scroll", function () {
      // Get current scroll position
      let scrollY = window.scrollY;

      // Loop through sections to get height(including padding and border),
      // top and ID values for each
      sections.forEach(function (current) {
        const sectionHeight = current.clientHeight;
        const sectionTop = current.offsetTop - 200;
        const sectionId = current.getAttribute("id");

        /* If our current scroll position enters the space where current section
         * on screen is, add .current class to parent element(li) of the thecorresponding
         * navigation link, else remove it. To know which link is active, we use
         * sectionId variable we are getting while looping through sections as
         * an selector
         */
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(".s-header__nav a[href*=" + sectionId + "]")
            .parentNode.classList.add("current");
        } else {
          document
            .querySelector(".s-header__nav a[href*=" + sectionId + "]")
            .parentNode.classList.remove("current");
        }
      });
    });
  };

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
