import { useState } from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "./redux/ducks/counter";

const Counter = ({ name }) => {
  const [votes, setVotes] = useState(0);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
    setVotes((preVotes) => preVotes + 1);
  };
  const handledecrement = () => {
    dispatch(decrement());
    setVotes((preVotes) => preVotes - 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingBottom: "10px"
      }}
    >
      <h3 style={{ paddingBottom: "10px" }}>{name}</h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          columnGap: "20px"
        }}
      >
        <h4>Votes: {votes}</h4>
        <div>
          <button
            style={{
              padding: "3px 20px",
              marginRight: "10px",
              border: "none",
              backgroundColor: "lightblue"
            }}
            onClick={handledecrement}
          >
            -
          </button>
          <button
            style={{
              padding: "3px 20px",
              border: "none",
              backgroundColor: "lightgreen"
            }}
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
export default Counter;
