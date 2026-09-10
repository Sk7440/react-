import { BrowserRouter, Route, Routes } from "react-router-dom"
import Productcard from "./components/Product cart"
import Page from "./components/Detailpage"
import Navbar from "./components/Navbar"

export default function App() {
 
  return (
    <>
      <BrowserRouter>
      <Navbar/> 
    <Routes>
      <Route path="/" element={<Productcard/>}/>
      <Route path="/Detailpage/:id" element={<Page/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )

}