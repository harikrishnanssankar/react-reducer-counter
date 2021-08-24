import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayCount from "./Count";
import Counter from "./Counter";
import { getUser } from "./redux/ducks/user";
import "./styles.css";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const user = useSelector((state) => state.user.user);
  console.log(user);

  const contestants = ["person 1", "person 2", "person 3", "person 4"];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "wheat",
        height: "100vh"
      }}
      className="App"
    >
      <DisplayCount />
      {contestants.map((contestant) => {
        return (
          <div key={contestant}>
            <Counter name={contestant} />
          </div>
        );
      })}
      <div style={{ position: "absolute", bottom: "10px", right: "10px" }}>
        <h2>Created By: {user?.name}</h2>
      </div>
    </div>
  );
}
