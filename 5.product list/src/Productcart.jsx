import { useState } from "react";
import { GrAed } from "react-icons/gr";

function Product({ info }) {

  const [isLiked, setIsLiked] = useState(false)

  return (
    <>
  
      <div class="product-card">
        <img src={info.src} alt="Product Image" class="product-image" />
        <h2 class="product-title">{info.name}</h2>
        <p class="product-description">{info.paragraph}</p>

        <div className="wishlist">
        <button onClick={()=> setIsLiked(!isLiked)}>

        {isLiked ? <GrAed className="active" /> : <GrAed />}
        </button>


        </div>

      </div>
    </>
  );
}
export default Product;
