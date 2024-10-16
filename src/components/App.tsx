import { useState } from "react";
import "../App.css"; // Instead of 'src/App.css'
import { shoot } from "./List.ts";
import LifeCycle from "./LifeCycle.tsx";
import Ref from "./Ref.tsx";
import Reducer_code from "./Reducer_code.tsx";
import State_code from "./State_code.tsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Correctly import Routes

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Reducer">Reducer</Link>
            </li>
            <li>
              <Link to="/State">useState</Link>
            </li>
            <li>
              <Link to="/Ref">useRef</Link>
            </li>
            <li>
              <Link to="/LifeCycle">LifeCycle</Link>
            </li>
          </ul>
        </nav>

        {/* Use Routes instead of Switch */}
        <Routes>
          <Route path="/Reducer" element={<Reducer_code />} />
          <Route path="/State" element={<State_code />} />
          <Route path="/Ref" element={<Ref />} />
          <Route path="/LifeCycle" element={<LifeCycle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
