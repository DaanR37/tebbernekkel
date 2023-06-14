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

import FictionDamien from "./components/Creativeslist/Fictiondamien/FictionDamien";
import EmbeddedPlayerDamien from "./components/Creativeslist/Fictiondamien/Embeddedplayerdamien/EmbeddedPlayerDamien";

import FictionFolkert from "./components/Creativeslist/Fictionfolkert/FictionFolkert";
import EmbeddedPlayerFolkert from "./components/Creativeslist/Fictionfolkert/Embeddedplayerfolkert/EmbeddedPlayerFolkert";

import FictionJoosje from "./components/Creativeslist/Fictionjoosje/FictionJoosje";
import EmbeddedPlayerJoosje from "./components/Creativeslist/Fictionjoosje/Embeddedplayerjoosje/EmbeddedPlayerJoosje";

import FictionMariaBodil from "./components/Creativeslist/Fictionmariabodil/FictionMariaBodil";
import EmbeddedPlayerMariaBodil from "./components/Creativeslist/Fictionmariabodil/Embeddedplayermariabodil/EmbeddedPlayerMariaBodil";

import FictionShay from "./components/Creativeslist/Fictionshay/FictionShay";
import EmbeddedPlayerShay from "./components/Creativeslist/Fictionshay/Embeddedplayershay/EmbeddedPlayerShay";

import FictionSimon from "./components/Creativeslist/Fictionsimon/FictionSimon";
import EmbeddedPlayerSimon from "./components/Creativeslist/Fictionsimon/Embeddedplayersimon/EmbeddedPlayerSimon";

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

        <Route path="/fictiondamien" element={<FictionDamien />} />
        <Route path="/embeddedplayerdamien" element={<EmbeddedPlayerDamien />} />

        <Route path="/fictionfolkert" element={<FictionFolkert />} />
        <Route path="/embeddedplayerfolkert" element={<EmbeddedPlayerFolkert />} />

        <Route path="/fictionjoosje" element={<FictionJoosje />} />
        <Route path="/embeddedplayerjoosje" element={<EmbeddedPlayerJoosje />} />

        <Route path="/fictionmariabodil" element={<FictionMariaBodil />} />
        <Route path="/embeddedplayermariabodil" element={<EmbeddedPlayerMariaBodil />} />

        <Route path="/fictionshay" element={<FictionShay />} />
        <Route path="/embeddedplayershay" element={<EmbeddedPlayerShay />} />

        <Route path="/fictionsimon" element={<FictionSimon />} />
        <Route path="/embeddedplayersimon" element={<EmbeddedPlayerSimon />} />

        <Route path="/slidercreatives" element={<SliderCreatives />} />

        <Route path="/awards" element={<Awards />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
