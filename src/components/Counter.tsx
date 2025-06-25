import { useState } from "react";

export default function Counter() {
  const [index, setIndex] = useState(0);

  function handeleCounter() {
    console.log(index);
    setIndex(index + 1);
  }
  return (
    <>
      <button onClick={handeleCounter}>increment</button>
      <h3>Qiymat: {index + 1}</h3>
    </>
  );
}
