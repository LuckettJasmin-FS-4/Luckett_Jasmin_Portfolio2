import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";

import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import Settings from "./pages/Settings.jsx";
import Detail from "./pages/Detail.jsx";
import Overview from "./pages/Overview.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/Overview" element={<Overview />} />
      </Routes>
    </>
  );
}

export default App;