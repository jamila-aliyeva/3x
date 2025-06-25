import { useEffect, useState } from "react";

const LifeCyclingTest = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("mount yoki count'da o'zgarish yuz berdi");
  }, [count]);

  const handelIncrement = () => {
    setCount((count) => count + 1);
  };
  return (
    <div>
      <button onClick={handelIncrement}>increment</button>
      <h1>Count : {count}</h1>;
    </div>
  );
};
export default LifeCyclingTest;
