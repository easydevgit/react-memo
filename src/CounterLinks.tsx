import { memo } from "react";

interface Props {
  linksText: {
    firstLink: string;
    secondLink: string;
  };
  resetCounter: () => void;
}

const CounterLinks = memo(function CounterLinks({
  linksText,
  resetCounter,
}: Props) {
  return (
    <>
      <a href="https://reactjs.org" target="_blank" rel="noreferrer">
        {linksText.firstLink}
      </a>
      {" | "}
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        {linksText.secondLink}
      </a>

      <div>
        <button onClick={resetCounter}>Reset</button>
      </div>
    </>
  );
});

export default CounterLinks;
