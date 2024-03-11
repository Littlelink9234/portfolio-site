import "../../index.css";
import "./Footer.css";

import { FC, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  faFacebookSquare,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/*  footer
    ================================================== 
*/

const Footer: FC = () => {
  useEffect(() => {
    backToTop();
  }, []);

  const backToTop = () => {
    const pxShow = 900;
    const goTopButton = document.querySelector(".ss-go-top");

    if (!goTopButton) return;

    // Show or hide the button
    if (window.scrollY >= pxShow) goTopButton.classList.add("link-is-visible");

    window.addEventListener("scroll", function () {
      if (window.scrollY >= pxShow) {
        if (!goTopButton.classList.contains("link-is-visible"))
          goTopButton.classList.add("link-is-visible");
      } else {
        goTopButton.classList.remove("link-is-visible");
      }
    });
  };

  return (
    <footer className="s-footer">
      <div className="row">
        <div className="column large-4 medium-6 w-1000-stack s-footer__social-block">
          <ul className="s-footer__social">
            <li>
              <a
                href="https://www.facebook.com/jason.carvalho.125"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/lead1290"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com/Littlelink9234"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jasoncarvalho1"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </div>

        <div className="column large-7 medium-6 w-1000-stack ss-copyright">
          <span>
            Design by <a href="https://www.styleshout.com/">StyleShout</a>
          </span>
        </div>
      </div>

      <div className="ss-go-top">
        <Link
          className="go-top"
          title="Back to Top"
          to="/"
          onClick={() => scroll.scrollToTop()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z" />
          </svg>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
