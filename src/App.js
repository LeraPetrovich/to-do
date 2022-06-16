import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Input from "./Pages/input";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Input />} />
        <Route path="/register" element={<Register />} />
        <Route path="/todo" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;
