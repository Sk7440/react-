import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="parent">
          <div className="zay-card">
            <h1>Our Brands</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
              optio aperiam maiores in nobis vero, nam veritatis commodi
              possimus ad rerum maxime pariatur!
            </p>
          </div>
          <div className="image">
            <img
              className="d-block w-100"
              src="https://themewagon.github.io/zay-shop/assets/img/brand_01.png"
              alt="First slide"
            />{" "}
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="parent">
          <div className="zay-card">
            <h1>Proident occaecat</h1>
            <h2>Aliquip ex ea commodo consequat</h2>
            <p>
              You are permitted to use this Zay CSS template for your commercial
              websites. You are not permitted to re-distribute the template ZIP
              file in any kind of template collection websites.
            </p>
          </div>
          <div className="image">
            <img
              className="d-block w-100"
              src="https://themewagon.github.io/zay-shop/assets/img/brand_02.png"
              alt="First slide"
            />{" "}
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="parent">
          <div className="zay-card">
            <h1>Repr in voluptate</h1>
            <h2>Ullamco laboris nisi ut</h2>
            <p>
              We bring you 100% free CSS templates for your websites. If you
              wish to support TemplateMo, please make a small contribution via
              PayPal or tell your friends about our website. Thank you
            </p>
          </div>
          <div className="image">
            <img
              className="d-block w-100"
              src="https://themewagon.github.io/zay-shop/assets/img/brand_03.png"
              alt="First slide"
            />{" "}
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
