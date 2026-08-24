import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Homecomponents/Home";
import About from "./pages/About";
import Shop from "./pages/shop";
import Contactus from "./pages/Contactus"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contactus/>} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
