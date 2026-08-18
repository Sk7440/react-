import { useState } from "react";
import "./App.css";
import Product from "./Productcart";

function App() {
  const data = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGagEC2ndmSG0dIwHvo7rkNS459F_ZhGMhwezxqBNANA&s=10",
      name: "Awesome Gadget",
      paragraph:
        "This is a short and simple paragraph describing the amazing features of this product.",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQYNWcmY-FaRcA8ExEVQecCJGoZe5cxOerp7M1JyOwA&s=10",
      name: "BMW i8 Roadster",
      paragraph:
        "This is a short and simple paragraph describing the amazing features of this product.",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3j93ffxP4W5Zw6O1-62OI4LQo_foxuoe7hBjMWft57Q&s",
      name: "koenigsegg",
      paragraph:
        "This is a short and simple paragraph describing the amazing features of this product.",

    },
  ];
const {index,setindex} =useState(null)

function saveindex(idx) {
  setindex(idx)
  
}

  return (
    <>
      {data.map((ele, idx) => {
        return <>
        <div onClick={()=>{saveindex(idx)}}>

        <Product info ={ele} indexS={index} index ={idx} />
        </div>

        </>;
      })}
    </>
  );
}

export default App;
