import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="parent">
          <div className="zay-card">
            <h1>Zay eCommerce</h1>
            <h2>Tiny and Perfect eCommerce Template</h2>
            <p>
              Zay Shop is an eCommerce HTML5 CSS template with latest version of
              Bootstrap 5 (beta 1). This template is 100% free provided by
              TemplateMo website. Image credits go to Freepik Stories, Unsplash
              and Icons 8.
            </p>
          </div>
          <div className="image">
            <img
              className="d-block w-100"
              src="https://themewagon.github.io/zay-shop/assets/img/banner_img_01.jpg"
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
              src="https://themewagon.github.io/zay-shop/assets/img/banner_img_02.jpg"
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
              src="https://themewagon.github.io/zay-shop/assets/img/banner_img_03.jpg"
              alt="First slide"
            />{" "}
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
