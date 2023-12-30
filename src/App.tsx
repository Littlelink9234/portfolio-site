import "./App.css";

import About from "./components/About/About.tsx";
import Contact from "./components/Contact/Contact.tsx";
import { FC } from "react";
import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import { ParallaxProvider } from 'react-scroll-parallax';
import Preloader from "./components/Preloader/Preloader.tsx";
import Resume from "./components/Resume/Resume.tsx";
import Works from "./components/Works/Works.tsx";

interface AppProps {
  title: string;
}

const App: FC = () => {
  return (
    <ParallaxProvider>
      <>
        {/* <Preloader /> */}
        <Header linkNames={["Home", "About", "Resume", "Works", "Say Hello"]} />
        <Hero />
        <About />
        <Resume />
        <Works />
        <Contact />
        <Footer />
      </>
    </ParallaxProvider>
  );
};

export default App;
