import UncontrolledExample from "../Homecomponents/brands";
import Footer from "../Homecomponents/Footer";
import ColorSchemesExample from "../Homecomponents/Navbar";

export default function Shop() {
  let data = [
    {
      src: "https://themewagon.github.io/zay-shop/assets/img/shop_01.jpg",
      name: "Oupidatat nonM/L/X/XL",
      price: "$250.00",
    },
    {
      src: "https://themewagon.github.io/zay-shop/assets/img/shop_02.jpg",
      name: "Oupidatat nonM/L/X/XL",
      price: "$250.00",
    },
    {
      src: "https://themewagon.github.io/zay-shop/assets/img/shop_03.jpg",
      name: "Oupidatat nonM/L/X/XL",
      price: "$250.00",
    },
    {
      src: "https://themewagon.github.io/zay-shop/assets/img/shop_04.jpg",
      name: "Oupidatat nonM/L/X/XL",
      price: "$250.00",
    },
    {
      src: "https://themewagon.github.io/zay-shop/assets/img/shop_05.jpg",
      name: "Oupidatat nonM/L/X/XL",
      price: "$250.00",
    },
    {
      src: "https://themewagon.github.io/zay-shop/assets/img/shop_06.jpg",
      name: "Oupidatat nonM/L/X/XL",
      price: "$250.00",
    },
    {
      src: "https://themewagon.github.io/zay-shop/assets/img/shop_07.jpg",
      name: "Oupidatat nonM/L/X/XL",
      price: "$250.00",
    },
    {
      src: "https://themewagon.github.io/zay-shop/assets/img/shop_08.jpg",
      name: "Oupidatat nonM/L/X/XL",
      price: "$250.00",
    },
    {
      src: "https://themewagon.github.io/zay-shop/assets/img/shop_09.jpg",
      name: "Oupidatat nonM/L/X/XL",
      price: "$250.00",
    },
  ];
  return (
    <>
      <ColorSchemesExample />
      <div className="card-parent">
        {data.map((ele) => {
          return (
            <>
              <div className="card">
                <div className="card-image-wrapper">
                  <img src={ele.src} alt={ele.name} className="card-image" />
                </div>
                <div className="card-content">
                  <h4 className="card-title">{ele.name}</h4>
                  <div className="card-rating">★ ★ ★ ☆ ☆</div>
                  <span className="card-price">{ele.price}</span>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <UncontrolledExample />
      <Footer />
    </>
  );
}
