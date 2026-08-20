import { useState } from "react";
import { GrAed } from "react-icons/gr";
 function Product({ info }) {

  const [isLiked, setIsLiked] = useState(false)

  return (
    <>
  
      <div className="product-card">
        <img src={info.src} alt="Product Image" className="product-image" />
        <h2 className="product-title">{info.name}</h2>
        <p className="product-description">{info.paragraph}</p>

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
