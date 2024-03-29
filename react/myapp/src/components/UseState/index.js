import { useState } from "react";
import "./UseState.css";
const UseState = () => {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);
  return (
    <div className="state">
      <div className={theme}>
        <h1>UseState Component</h1>
        <h2>{count}</h2>
        <button
          style={{ padding: 10, margin: 10 }}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>
        <button
          style={{ padding: 10, margin: 10 }}
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          {count}
        </button>
      </div>
    </div>
  );
};

export default UseState;
