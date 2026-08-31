import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Productcard from "./component/product";
import Productpage from "../pages/Productpage";
import Check from "./component/Check";

function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Productcard/>}/>
      <Route path="/Productpage/:id" element={<Productpage/>}/>
    </Routes>
    </BrowserRouter>

    {/* <Check/> */}
    </>
  )
}

export default App;
