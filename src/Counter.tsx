import { useCallback, useMemo, useState } from "react";
import CountInfo from "./CountInfo";
import CounterLinks from "./CounterLinks";
import { expensiveTask } from "./utils";

function Counter() {
  const [count, setCount] = useState(0);
  const [firstLink, setFirstLink] = useState("React");
  const [secondLink, setSecondLink] = useState("Vite");
  const resultNumber = useMemo(() => expensiveTask(), []);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const linksText = useMemo(
    () => ({
      firstLink,
      secondLink,
    }),
    [firstLink, secondLink]
  );
  const resetCounter = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <main>
      <CounterLinks linksText={linksText} resetCounter={resetCounter} />
      <CountInfo count={count} />
      <button onClick={incrementCount}>Increment</button>
      <p>{resultNumber}</p>
    </main>
  );
}

export default Counter;
