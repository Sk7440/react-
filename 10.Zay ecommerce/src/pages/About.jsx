import Footer from "../Homecomponents/Footer";
import UncontrolledExample from "../Homecomponents/brands"
import ColorSchemesExample from "../Homecomponents/Navbar";
export default function About() {
  return (
    <>
    <ColorSchemesExample/>
      <div class="about-us-container">
        <div class="about-us-row">
          <div class="about-us-text">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div class="about-us-image">
            <img
              src="https://themewagon.github.io/zay-shop/assets/img/about-hero.svg"
              alt="About Us Hero"
            />
          </div>
        </div>
      </div>
      <div class="services-section">
        <h1 class="services-title">Our Services</h1>
        <p class="services-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod Lorem ipsum dolor sit amet.
        </p>

        <div class="services-grid">
          <div class="service-card">
            <i class="fa-solid fa-truck"></i>
            <h3>Delivery Services</h3>
          </div>
          <div class="service-card">
            <i class="fa-solid fa-arrows-rotate"></i>
            <h3>Shipping & Return</h3>
          </div>
          <div class="service-card">
            <i class="fa-solid fa-percent"></i>
            <h3>Promotion</h3>
          </div>
          <div class="service-card">
            <i class="fa-solid fa-user"></i>
            <h3>24 Hours Service</h3>
          </div>
        </div>
      </div>
     <UncontrolledExample/>
     <Footer/>
    </>
  );
}
