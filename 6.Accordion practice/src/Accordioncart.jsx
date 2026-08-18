import {SlArrowDown} from "react-icons/sl";
import {SlArrowUp} from "react-icons/sl";
function Accordion({ info, idx, stateIndex }) {
  return (
    <>
      <h1 class="acc">
        {info.heading}
        {idx == stateIndex ? <SlArrowUp /> : <SlArrowDown />}
      </h1>
      {stateIndex == idx && <p>{info.answer}</p>}
    </>
  );
}
export default Accordion;
