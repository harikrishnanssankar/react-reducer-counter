import DisplayCount from "./Count";
import Counter from "./Counter";
import "./styles.css";

export default function App() {
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
        return <Counter name={contestant} />;
      })}
    </div>
  );
}
