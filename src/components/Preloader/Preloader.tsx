import "../../index.css";
import "./Preloader.css";

import { FC } from "react";

/* 
    preloader
    ================================================== 
*/

const Preloader: FC = () => {
  return (
    <div id="preloader">
      <div id="loader"></div>
    </div>
  );
};

export default Preloader;
