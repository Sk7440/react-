import { useState } from "react";
import "../App.css";
import Product from "./Productcart";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Productcard() {
  const data = [
    {
      id: 1,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3j93ffxP4W5Zw6O1-62OI4LQo_foxuoe7hBjMWft57Q&s",
      name: "koenigsegg",
      paragraph:
        "This is a short and simple paragraph describing the amazing features of this product.",
    },
    {
      id: 2,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmpHQW22TV584UPyY3z1fh0qsQai_QbC071h5s8qYteQ&s=10",
      name: "Porsche",
      paragraph:
        "This is a short and simple paragraph describing the amazing features of this product.",
    },
    {
      id: 3,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMGeNgZFHxTUGVD2ZsbDdlRi2_jrOgSn-vWOT6izsMPw&s=10",
      name: "bhugatti",
      paragraph:
        "This is a short and simple paragraph describing the amazing features of this product.",
    },
  ];
  const [count, setcount] = useState(0);
  const [index, setIndex] = useState(null);
  function ind(idx) {
    setIndex(idx);
  }
  function increment() {
    setcount(count + 1);
  }
  return (
    <>
      <Navbar countS={count} />

      {data.map((ele, idx) => {
        return (
          <>
            <div key={idx} className="parent">
              <Product info={ele} index={idx} />
              <button
                className="add-to-cart-btn"
                onClick={() => increment(ind(idx))}
              >
                {index == idx ? "Added to cart" : "Add to Cart"}
              </button>
              <Link to={`/Productpage/${ele.id}`}>
              <button className="add-to-cart-btn">See details</button>
              </Link>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Productcard;
