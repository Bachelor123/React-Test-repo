import React, { useState, useCallback, useMemo } from "react";
import { Button } from "antd";
import { debounce, throttle } from "./fn";
import "./styles.css";
import "antd/dist/antd.css";

export default function App() {
  const [count, setCount] = useState(0);
  const debounceFn = useMemo(() => {
    console.log("debounceFn");
    return debounce(setCount, 1000)
  }, [setCount]);
  
  const throttleFn = useMemo(() => {
    console.log('throttleFn')
    return throttle(setCount, 1000)
  }, [setCount])

  const add = useCallback(() => {
    console.log("addFn");
    debounceFn(count => ++count);
    // setCount(count => ++count);
  }, [debounceFn]);

  const minus = useCallback(() => {
    // setCount(count => --count);
    throttleFn(count => ++count)
  }, [throttleFn]);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <div>{count}</div>
        <Button type="primary" onClick={add}>
          +
        </Button>
        {"    "}
        <Button type="primary" onClick={minus}>
          -
        </Button>
      </div>
    </div>
  );
}
