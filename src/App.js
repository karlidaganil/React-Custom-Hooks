import "./App.css";
import useEventListener from "./useEventListener";

function App() {
  useEventListener("resize", () => {
    console.log("The size of window changes");
  });
  return <div className="App"></div>;
}

export default App;
