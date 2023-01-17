// For functional component,
// useEffect hook is an alternative to componentDidMount(in class based component).

import { useEffect, useState } from "react";

export default function Main() {
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("I have no dependency array");
  });
  useEffect(() => {
    console.log("UseEffect1 Ran");
  }, []);
  useEffect(() => {
    console.log("UseEffect2 Ran");
  }, [toggleTwo]);

  // the useEffect cleanup function (fn returned by useEffect) will not run after the first render,
  // but it will run after the second render, just BEFORE the useEffect function runs.
  useEffect(() => {
    let myInterval = setInterval(() => {
      console.log(`UseEffect3 with interval number ${count} is running`);
    }, 1000);
    return () => {
      console.log(
        `UseEffect3 cleanup ran.\nsetInterval number ${count} is being cleared out`
      );
      clearInterval(myInterval);
    };
  }, [count]);

  return (
    <>
      {console.log("rendered or re-rendered")}
      <h1>main</h1>
      <p>No dependency array runs on each render/re-render.</p>
      <button onClick={() => setToggleOne(!toggleOne)}>
        {" "}
        Empty dependency array runs only once i.e. after first render.
      </button>
      <button onClick={() => setToggleTwo(!toggleTwo)}>
        {" "}
        Runs only when variable in dependency array changes.{" "}
      </button>
      <button
        onClick={() => {
          setCount((prevVal) => prevVal + 1);
        }}
      >
        Increase count after delay
      </button>
    </>
  );
}
