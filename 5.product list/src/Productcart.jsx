import { GrAed } from "react-icons/gr";

function Product({ info, index, indexS }) {
  return (
    <>
      <div class="product-card">
        <img src={info.src} alt="Product Image" class="product-image" />
        <h2 class="product-title">{info.name}</h2>
        <p class="product-description">{info.paragraph}</p>

        <div className="wishlist">
        {index == indexS ? <GrAed class="active" /> : <GrAed />}

        </div>

        <button class="add-to-cart-btn">Add to Cart</button>
      </div>
    </>
  );
}
export default Product;
