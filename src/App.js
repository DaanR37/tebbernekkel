import { BrowserRouter, Route, Routes } from "react-router-dom";

//import Components
import Header from "./components/Header/Header";
import Featured from "./components/Featured/Featured";
import Commercials from "./components/Commercials/Commercials";
import Fiction from "./components/Fiction/Fiction";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import EmbeddedPlayer from "./components/Commercials/Embeddedplayer/Embeddedplayer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Featured />} />
        <Route path="/commercials" element={<Commercials />} />
        <Route path="/fiction" element={<Fiction />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/embeddedplayer" element={<EmbeddedPlayer />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
