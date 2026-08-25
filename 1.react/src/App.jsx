import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/detail/:sultan" element={<Detail />} />
        </Routes>
      </BrowserRouter>

      {/* <Hero/>
    <About/>
    <Footer/> */}
    </>
  );
}

export default App;
