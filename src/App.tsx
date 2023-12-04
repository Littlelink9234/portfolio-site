import "./App.css";

import About from "./components/About/About.tsx";
import { FC } from "react";
import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Preloader from "./components/Preloader/Preloader.tsx";

interface AppProps {
  title: string;
}

const App: FC = () => {
  return (
    <>
      {/* <Preloader /> */}
      <Header
        linkNames={[
          "Home",
          "About",
          "Resume",
          "Works",
          "Testimonials",
          "Say Hello",
        ]}
      />
      <Hero />
      <About />
    </>
  );
};

export default App;
