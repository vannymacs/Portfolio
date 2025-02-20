import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/hero.css";
import Hero from "./components/hero";
import About from "./components/about";
import "../src/App";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
