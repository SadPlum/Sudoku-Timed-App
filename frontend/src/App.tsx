import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Heading from "./components/Heading";
import Frontpage from "./pages/Frontpage";
import Gamepage from "./pages/Gamepage";
import Errorpage from "./pages/Errorpage";

function App() {
  const [game, setGame] = useState(null);
  return (
    <Router>
      <Heading />
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/gamepage" element={<Gamepage />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
  );
}

export default App;
