import { BrowserRouter, Route, Routes } from "react-router-dom";

/// Homepage
import HomePage from "./components/Homepage/HomePage";

/// Featured & Formats
import Featured from "./components/Featured/Featured";
import EmbeddedPlayerFeatured from "./components/Featured/Embeddedplayerfeatured/EmbeddedPlayerFeatured";

/// Directorslist
import DirectorsList from "./components/Directorslist/DirectorsList";

import FictionAchmed from "./components/Directorslist/Fictionachmed/FictionAchmed";
import EmbeddedPlayerAchmed from "./components/Directorslist/Fictionachmed/Embeddedplayerachmed/EmbeddedPlayerAchmed";

import FictionBlue from "./components/Directorslist/Fictionblue/FictionBlue";
import EmbeddedPlayerBlue from "./components/Directorslist/Fictionblue/Embeddedplayerblue/EmbeddedPlayerBlue";

import FictionDamien from "./components/Directorslist/Fictiondamien/FictionDamien";
import EmbeddedPlayerDamien from "./components/Directorslist/Fictiondamien/Embeddedplayerdamien/EmbeddedPlayerDamien";

import FictionJoosje from "./components/Directorslist/Fictionjoosje/FictionJoosje";
import EmbeddedPlayerJoosje from "./components/Directorslist/Fictionjoosje/Embeddedplayerjoosje/EmbeddedPlayerJoosje";

import FictionMariaBodil from "./components/Directorslist/Fictionmariabodil/FictionMariaBodil";
import EmbeddedPlayerMariaBodil from "./components/Directorslist/Fictionmariabodil/Embeddedplayermariabodil/EmbeddedPlayerMariaBodil";

import FictionShay from "./components/Directorslist/Fictionshay/FictionShay";
import EmbeddedPlayerShay from "./components/Directorslist/Fictionshay/Embeddedplayershay/EmbeddedPlayerShay";

import FictionSimon from "./components/Directorslist/Fictionsimon/FictionSimon";
import EmbeddedPlayerSimon from "./components/Directorslist/Fictionsimon/Embeddedplayersimon/EmbeddedPlayerSimon";

import FictionBram from "./components/Directorslist/Fictionbram/FictionBram";
import EmbeddedPlayerBram from "./components/Directorslist/Fictionbram/Embeddedplayerbram/EmbeddedPlayerBram";

/// Awards & Contact
import Awards from "./components/Awards/Awards";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/featured" element={<Featured />} />
        <Route path="/embeddedplayerfeatured" element={<EmbeddedPlayerFeatured />} />

        <Route path="/directorslist" element={<DirectorsList />} />

        <Route path="/fictionachmed" element={<FictionAchmed />} />
        <Route path="/embeddedplayerachmed" element={<EmbeddedPlayerAchmed />} />

        <Route path="/fictionblue" element={<FictionBlue />} />
        <Route path="/embeddedplayerblue" element={<EmbeddedPlayerBlue />} />

        <Route path="/fictiondamien" element={<FictionDamien />} />
        <Route path="/embeddedplayerdamien" element={<EmbeddedPlayerDamien />} />

        <Route path="/fictionjoosje" element={<FictionJoosje />} />
        <Route path="/embeddedplayerjoosje" element={<EmbeddedPlayerJoosje />} />

        <Route path="/fictionmariabodil" element={<FictionMariaBodil />} />
        <Route path="/embeddedplayermariabodil" element={<EmbeddedPlayerMariaBodil />} />

        <Route path="/fictionshay" element={<FictionShay />} />
        <Route path="/embeddedplayershay" element={<EmbeddedPlayerShay />} />

        <Route path="/fictionsimon" element={<FictionSimon />} />
        <Route path="/embeddedplayersimon" element={<EmbeddedPlayerSimon />} />

        <Route path="/fictionbram" element={<FictionBram />} />
        <Route path="/embeddedplayerbram" element={<EmbeddedPlayerBram />} />

        <Route path="/awards" element={<Awards />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
