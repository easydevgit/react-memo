interface CountInfoProps {
  count: number;
}

const CountInfo = ({ count }: CountInfoProps) => {
  return <p>Count: {count}</p>;
};

export default CountInfo;
