import { BrowserRouter, Route, Routes } from "react-router-dom";

//import Components
import Header from "./components/Header/Header";
import Featured from "./components/Featured/Featured";
import Commercials from "./components/Commercials/Commercials";
import Fiction from "./components/Fiction/Fiction";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import EmbeddedPlayer from "./components/Commercials/Embeddedplayer/Embeddedplayer";
import EmbeddedPlayerFiction from "./components/Fiction/EmbeddedplayerFiction/EmbeddedplayerFiction";
import Earth from "./components/Contact/Earth/Earth";
import Topsection from "./components/Contact/Topsection/Topsection";
import Moon from "./components/About/Moon/Moon";
import TopsectionAwards from "./components/About/TopsectionAwards/TopsectionAwards";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Featured />} />
        <Route path="/commercials" element={<Commercials />} />
        <Route path="/fiction" element={<Fiction />} />
        <Route path="/embeddedplayerfiction" element={<EmbeddedPlayerFiction />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/embeddedplayer" element={<EmbeddedPlayer />}/>
        <Route path="/earth" element={<Earth />}/>
        <Route path="/topsection" element={<Topsection />} />
        <Route path="/moon" element={<Moon />} />
        <Route path="/topsectionawards" element={<TopsectionAwards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
