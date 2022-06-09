import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Input from "./Pages/input";
import Home from "./Pages/Home";
import Navbar from "./Navbar";
import "./App.css";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/input" element={<Input />} />

        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;
