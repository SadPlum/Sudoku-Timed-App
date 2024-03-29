import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Heading from "./components/Heading";
import Frontpage from "./pages/Frontpage";
import Gamepage from "./pages/Gamepage";
import Errorpage from "./pages/Errorpage";
import PlayNewGamePage from "./components/playGamePage/PlayNewGamePage";
import PlayGamePage from "./components/playGamePage/PlayGamePage";

function App() {
  const [game, setGame] = useState(null);
  return (
    <Router>
      <div className="wrapper">
        <Heading />
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route
            path="/openpage/:difficulty/:difficultyNums"
            element={<Gamepage />}
          />
          <Route
            path="/privategame/:difficulty/:difficultyNums/"
            element={<PlayNewGamePage />}
          />
          <Route
            path="/public/:_id/"
            element={<PlayGamePage publicGame={true} />}
          />
          <Route
            path="/game/:_id/"
            element={<PlayGamePage publicGame={false} />}
          />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
