export default function Categories() {
  let items = [
    {
      src: "https://themewagon.github.io/zay-shop/assets/img/category_img_01.jpg",
      name: "watches",
    },
    {
      src: "https://themewagon.github.io/zay-shop/assets/img/category_img_02.jpg",
      name: "Shoes",
    },
    {
      src: "https://themewagon.github.io/zay-shop/assets/img/category_img_03.jpg",
      name: "Accessories",
    },
  ];
  return (
    <>
      <section className="category-section">
  <div className="category-header">
    <h1>Categories of The Month</h1>
    <p>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
      officia deserunt mollit anim id est laborum.
    </p>
  </div>

  <div className="category-grid">
    {items.map((item) => (
      <div className="category-card" key={item.id}>
        <div className="cat-img">
          <img src={item.src} alt={item.name} />
        </div>
        <h3>{item.name}</h3>
        <button>Go Shop</button>
      </div>
    ))}
  </div>
</section>
    </>
  );
}
