import { BrowserRouter, Route, Routes } from "react-router-dom";

//import Components
import Featured from "./components/Featured/Featured";

import Commercials from "./components/Commercials/Commercials";
import Fiction from "./components/Fiction/Fiction";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

import EmbeddedPlayer from "./components/Commercials/Embeddedplayer/Embeddedplayer";
import EmbeddedPlayerFiction from "./components/Fiction/EmbeddedplayerFiction/EmbeddedplayerFiction";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Featured />} />
        <Route path="/commercials" element={<Commercials />} />
        <Route path="/fiction" element={<Fiction />} />
        <Route path="/embeddedplayerfiction" element={<EmbeddedPlayerFiction />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/embeddedplayer" element={<EmbeddedPlayer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
