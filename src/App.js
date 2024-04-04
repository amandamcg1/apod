import './App.css'
import Homepage from "./components/Homepage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Supermoon from "./components/Supermoon";
import Greenflash from "./components/Greenflash";
import Moonandflash from "./components/Moonandflash";
import Folklore from "./components/Folklore";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/supermoon" element={<Supermoon />} />
          <Route path="/greenflash" element={<Greenflash />} />
          <Route path="/moonandflash" element={<Moonandflash />} />
          <Route path="/folklore" element={<Folklore />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
