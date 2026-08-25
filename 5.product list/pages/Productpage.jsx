import { useParams } from "react-router-dom";

export default function Productpage() {
  const data = [
    {
      id: 1,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3j93ffxP4W5Zw6O1-62OI4LQo_foxuoe7hBjMWft57Q&s",
      name: "koenigsegg",
      paragraph:
        "This is a short and simple paragraph describing the amazing features of this product.",
      price: "$99k",
      speed: "415km/h",
      torque: "1,500 Nm at 5,100 rpm.",
      transmission: "9-speed Koenigsegg Light Speed Transmission (LSTT)",
      dragcoefficient: "0.278 Cd (Absolut version)",
      Power: "1,280 hp on standard gasoline; up to 1,600 hp on E85 biofuel",
      Engine: "5.0L twin-turbocharged V8 with a flat-plane crankshaft",
      Electric:
        "700 hp and 900 Nm of torque from its electric motors powered by an 800V battery",
    },
    {
      id: 2,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmpHQW22TV584UPyY3z1fh0qsQai_QbC071h5s8qYteQ&s=10",
      name: "Porsche",
      paragraph:
        "This is a short and simple paragraph describing the amazing features of this product.",
      price: "$99k",
      speed: "415km/h",
      torque: "1,500 Nm at 5,100 rpm.",
      transmission: "9-speed Koenigsegg Light Speed Transmission (LSTT)",
      dragcoefficient: "0.278 Cd (Absolut version)",
      Power: "1,280 hp on standard gasoline; up to 1,600 hp on E85 biofuel",
      Engine: "5.0L twin-turbocharged V8 with a flat-plane crankshaft",
      Electric:
        "700 hp and 900 Nm of torque from its electric motors powered by an 800V battery",
    },
    {
      id: 3,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMGeNgZFHxTUGVD2ZsbDdlRi2_jrOgSn-vWOT6izsMPw&s=10",
      name: "bhugatti",
      paragraph:
        "This is a short and simple paragraph describing the amazing features of this product.",
      price: "$99k",
      speed: "415km/h",
      torque: "1,500 Nm at 5,100 rpm.",
      transmission: "9-speed Koenigsegg Light Speed Transmission (LSTT)",
      dragcoefficient: "0.278 Cd (Absolut version)",
      Power: "1,280 hp on standard gasoline; up to 1,600 hp on E85 biofuel",
      Engine: "5.0L twin-turbocharged V8 with a flat-plane crankshaft",
      Electric:
        "700 hp and 900 Nm of torque from its electric motors powered by an 800V battery",
    },
  ];
  const params = useParams();
  let data1 = data.find((ele) => {
    return ele.id == params.id;
  });
  return (
    <>
      <div className="card">
        <div className="image-wrapper">
          <img src={data1.src} alt={data1.name} loading="lazy" />
        </div>

        <div className="card-content">
          <h2 className="title">{data1.name}</h2>
          <p className="description">{data1.paragraph}</p>

          <hr className="divider" />

          <h3 className="section-title">Specifications</h3>
          <dl className="specs-grid">
            <div className="spec-item">
              <dt>Top Speed</dt>
              <dd>{data1.speed}</dd>
            </div>
            <div className="spec-item">
              <dt>Torque</dt>
              <dd>{data1.torque}</dd>
            </div>
            <div className="spec-item">
              <dt>Transmission</dt>
              <dd>{data1.transmission}</dd>
            </div>
            <div className="spec-item">
              <dt>Electric</dt>
              <dd>{data1.Electric}</dd>
            </div>
            <div className="spec-item">
              <dt>Engine</dt>
              <dd>{data1.Engine}</dd>
            </div>
            <div className="spec-item">
              <dt>Drag Coeff.</dt>
              <dd>{data1.dragcoefficient}</dd>
            </div>
            <div className="spec-item">
              <dt>Power</dt>
              <dd>{data1.Power}</dd>
            </div>
            <div className="spec-item highlight">
              <dt>Price</dt>
              <dd>{data1.price}</dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}
