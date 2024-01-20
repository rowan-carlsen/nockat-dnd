import { useState } from "react";
import styles from "./Counter.module.scss";

export default function Counter({ children, count: initialCount }: { children: JSX.Element; count: number }) {
  const [count, setCount] = useState(initialCount);
  const add = () => setCount((i) => i + 1);
  const subtract = () => setCount((i) => i - 1);

  return (
    <>
      <div className={styles.counter}>
        <button onClick={subtract}>-</button>
        <pre>{count}</pre>
        <button onClick={add}>+</button>
      </div>
      <div className={styles.counterMessage}>{children}</div>
    </>
  );
}
