import { useState } from "react";

export default function InputHandling() {
  const [value, setValue] = useState("");
  const [data, setData] = useState({
    city: "",
    country: "",
  });

  function inputhandle(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <input name="country" onChange={(e) => inputhandle(e)} type="text" />
      <input name="city" onChange={(e) => inputhandle(e)} type="text" />
      <h1>{data.city}</h1>
      <h1>{data.country}</h1>
    </>
  );
}
