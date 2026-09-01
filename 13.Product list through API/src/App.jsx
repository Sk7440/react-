import { BrowserRouter, Route, Routes } from "react-router-dom"
import Productcard from "./components/Product cart"
import Page from "./components/Detailpage"

export default function App() {
 
  return (
    <>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Productcard/>}/>
      <Route path="/Detailpage/:id" element={<Page/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )

}