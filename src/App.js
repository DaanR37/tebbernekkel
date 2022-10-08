import { BrowserRouter, Route, Routes } from "react-router-dom";

///import Components
import HomePage from "./components/Homepage/HomePage";

///Commercials
import Featured from "./components/Featured/Featured";
import EmbeddedPlayerFeatured from "./components/Featured/Embeddedplayerfeatured/EmbeddedPlayerFeatured";

import CreativesList from "./components/Creativeslist/CreativesList";
import SliderCreatives from "./components/Slidercreatives/SliderCreatives";

import FictionAchmed from "./components/Creativeslist/Fictionachmed/FictionAchmed";
import EmbeddedPlayerAchmed from "./components/Creativeslist/Fictionachmed/Embeddedplayerachmed/EmbeddedPlayerAchmed";

import FictionBlue from "./components/Creativeslist/Fictionblue/FictionBlue";
import EmbeddedPlayerBlue from "./components/Creativeslist/Fictionblue/Embeddedplayerblue/EmbeddedPlayerBlue";

import FictionFolkert from "./components/Creativeslist/Fictionfolkert/FictionFolkert";
import EmbeddedPlayerFolkert from "./components/Creativeslist/Fictionfolkert/Embeddedplayerfolkert/EmbeddedPlayerFolkert";

import FictionJoosje from "./components/Creativeslist/Fictionjoosje/FictionJoosje";
import EmbeddedPlayerJoosje from "./components/Creativeslist/Fictionjoosje/Embeddedplayerjoosje/EmbeddedPlayerJoosje";

import Awards from "./components/Awards/Awards";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/featured" element={<Featured />} />
        <Route path="/embeddedplayerfeatured" element={<EmbeddedPlayerFeatured />} />

        <Route path="/creativeslist" element={<CreativesList />} />

        <Route path="/fictionachmed" element={<FictionAchmed />} />
        <Route path="/embeddedplayerachmed" element={<EmbeddedPlayerAchmed />} />

        <Route path="/fictionblue" element={<FictionBlue />} />
        <Route path="/embeddedplayerblue" element={<EmbeddedPlayerBlue />} />

        <Route path="/fictionfolkert" element={<FictionFolkert />} />
        <Route path="/embeddedplayerfolkert" element={<EmbeddedPlayerFolkert />} />

        <Route path="/fictionjoosje" element={<FictionJoosje />} />
        <Route path="/embeddedplayerjoosje" element={<EmbeddedPlayerJoosje />} />

        <Route path="/slidercreatives" element={<SliderCreatives />} />

        <Route path="/awards" element={<Awards />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
