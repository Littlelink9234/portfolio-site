import "./App.css";

import { FC, useEffect, useState } from "react";

import About from "./components/About/About.tsx";
import Contact from "./components/Contact/Contact.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import { ParallaxProvider } from "react-scroll-parallax";
import Preloader from "./components/Preloader/Preloader.tsx";
import Resume from "./components/Resume/Resume.tsx";
import Works from "./components/Works/Works.tsx";

interface AppProps {
  title: string;
}

const App: FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <div>
        {isLoading ? (
          <Preloader />
        ) : (
          <ParallaxProvider>
            <>
              <Header
                linkNames={["Home", "About", "Resume", "Works", "Say Hello"]}
              />
              <Hero />
              <About />
              <Resume />
              <Works />
              <Contact />
              <Footer />
            </>
          </ParallaxProvider>
        )}
      </div>
    </>
  );
};

export default App;
