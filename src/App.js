import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Projects" element={<Projects />} />
        </Routes>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
