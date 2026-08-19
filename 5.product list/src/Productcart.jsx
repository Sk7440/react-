import { useState } from "react";
import { GrAed } from "react-icons/gr";

function Product({ info, index, indexS }) {

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
        <button class="add-to-cart-btn">Add to Cart</button>


        </div>

      </div>
    </>
  );
}
export default Product;
