import { useSelector } from "react-redux";

const DisplayCount = () => {
  const count = useSelector((state) => state.counter.count);
  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ paddingBottom: "10px" }}>Fan Fight</h1>
      <h2>Total votes: {count}</h2>
    </div>
  );
};

export default DisplayCount;
