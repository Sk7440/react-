import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Custom styling file

function FeaturedProducts() {
  const products = [
    {
      src: "https://themewagon.github.io/zay-shop/assets/img/feature_prod_01.jpg",
      name: "Gym Weight",
      price: "$240.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.",
    },
    {
      src: "https://themewagon.github.io/zay-shop/assets/img/feature_prod_02.jpg",
      name: "Cloud Nike Shoes",
      price: "$480.00",
      description:
        "Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.",
    },
    {
      src: "https://themewagon.github.io/zay-shop/assets/img/feature_prod_03.jpg",
      name: "Summer Addides Shoes",
      price: "$360.00",
      description:
        "Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.",
    },
  ];

  return (
    <>
   <section className="featured-section">
  {/* Header Section */}
  <h1 className="featured-title">Featured Product</h1>
  <p className="featured-description">
    Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident.
  </p>

  {/* Grid Layout */}
  <div className="product-grid">
    {products.map((ele, index) => (
      <div key={ele.id || index} className="product-card">
        {/* Image Container */}
        <div className="product-image-wrapper">
          <img 
            src={ele.src} 
            alt={ele.name} 
            className="product-image" 
          />
        </div>

        {/* Card Body */}
        <div className="product-card-body">
          <div className="product-card-header">
            <span className="product-price">{ele.price}</span>
          </div>

          <h3 className="product-name">{ele.name}</h3>

          <p className="product-desc">{ele.description}</p>
            <span className="product-reviews">Reviews (48)</span>

        </div>
      </div>
    ))}
  </div>
</section>
    </>
  );
}

export default FeaturedProducts;
