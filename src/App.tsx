import "./App.css";

import { FC } from "react";
import Header from "./components/Header.tsx";

interface AppProps {
  title: string;
}

const App: FC<AppProps> = (title) => {
  return <Header linkNames={["Home", "About", "Resume"]} />;
};

export default App;
