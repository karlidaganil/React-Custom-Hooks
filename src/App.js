import "./App.css";
import useLocalStorage from "./useLocalStorage";

function App() {
  const { state: myValue, setLocalStorage } = useLocalStorage("test", 0);

  return (
    <div className="App">
      <h2>{myValue}</h2>
      <button
        onClick={() => {
          setLocalStorage("test", 5);
        }}
      >
        test
      </button>
    </div>
  );
}

export default App;
