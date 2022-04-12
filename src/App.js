import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
