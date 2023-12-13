import "../../index.css";
import "./Header.css";

import { FC } from "react";

interface NavLinkProps {
  linkNames: string[];
}

/* 
    header
    ================================================== 
*/

const Header: FC<NavLinkProps> = ({ linkNames }) => {
  return (
    <header className="s-header">
      <div className="row s-header__nav-wrap">
        <nav className="s-header__nav">
          <ul>
            <li className="current">
              <a className="smoothscroll" href="#hero">
                {linkNames[0]}
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                {linkNames[1]}
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                {linkNames[2]}
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                {linkNames[3]}
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                {linkNames[4]}
              </a>
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
