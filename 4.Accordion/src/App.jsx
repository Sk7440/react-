import { useState } from "react";
import { AccordionCard } from "./AccordionCard";
import "./App.css";

function App() {
  const data = [
    {
      heading: "Can I customize the styling?",
      paragraph:
        "Yes! Every aspect including colors, shadows, border-radius, and icons can be easily adjusted using standard CSS variables or properties.",
    },
    {
      heading: " Does it require any JavaScript?",
      paragraph:
        " Not at all. The open and close behavior is entirely handled by the browser, making it lightweight and lightning-fast.",
    },
  ];

  const [index, setIndex] = useState(null);

  function handleClick(idx) {
    if (index == idx) {
      setIndex(null);
    } else {
      setIndex(idx);
    }
  }
  

  return (
    <>
      {data.map((ele, idx) => {
        return (
          <div onClick={() => handleClick(idx)}>
            <AccordionCard indexS={index} idx={idx} info={ele} />
          </div>
        );
      })}
    </>
  );
}

export default App;
