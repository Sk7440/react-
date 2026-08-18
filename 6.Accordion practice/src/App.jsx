import { useState } from "react";
import Accordion from "./Accordioncart";
import "./App.css";

function App() {
  const data = [
    {
      heading: "what is your problem",
      answer: "bijli nai aandi ",
    },
    {
      heading: "what is my problem",
      answer: "hum ny gareebi dekhi h  ",
    },
    {
      heading: "what is nation  problem",
      answer: "Yeh b meri ghalti h ",
    },
  ];
  const [index, setindex] = useState(null);
  function clic(idx) {
    if (index == idx) {
      setindex(null);
    } else {
      setindex(idx);
    }
  }
  return (
    <>
      {data.map((ele, idx) => {
        return (
          <>
            <div onClick={() => clic(idx)}>
              <Accordion stateIndex={index} info={ele} idx={idx} />
            </div>
          </>
        );
      })}
    </>
  );
}

export default App;
