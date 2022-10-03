import { BrowserRouter, Route, Routes } from "react-router-dom";

//import Components
import Featured from "./components/Featured/Featured";

import Commercials from "./components/Commercials/Commercials";

import CreativesList from "./components/Creativeslist/CreativesList";
import FictionAchmed from "./components/Creativeslist/Fictionachmed/FictionAchmed";
import FictionBlue from "./components/Creativeslist/Fictionblue/FictionBlue";
import FictionFolkert from "./components/Creativeslist/Fictionfolkert/FictionFolkert";
import FictionJoosje from "./components/Creativeslist/Fictionjoosje/FictionJoosje";
import SliderCreatives from "./components/Slidercreatives/SliderCreatives";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

import EmbeddedPlayer from "./components/Commercials/Embeddedplayer/Embeddedplayer";
import EmbeddedPlayerFiction from "./components/Creativeslist/EmbeddedplayerFiction/EmbeddedplayerFiction";

// import Fiction from "./components/Fiction/Fiction";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Featured />} />
        <Route path="/commercials" element={<Commercials />} />
        <Route path="/creativeslist" element={<CreativesList />} />
        <Route path="/fictionachmed" element={<FictionAchmed />} />
        <Route path="/fictionblue" element={<FictionBlue />} />
        <Route path="/fictionfolkert" element={<FictionFolkert />} />
        <Route path="/fictionjoosje" element={<FictionJoosje />} />
        <Route path="/slidercreatives" element={<SliderCreatives />} />

        {/* <Route path="/fiction" element={<Fiction />} /> */}
        <Route path="/embeddedplayerfiction" element={<EmbeddedPlayerFiction />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/embeddedplayer" element={<EmbeddedPlayer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
