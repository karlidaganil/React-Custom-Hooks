import "./App.css";
import useFetch from "./useFetch";

const App = () => {
  const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
  const { data, loading, error } = useFetch(BASE_URL);
  console.log(data);
  return (
    <div className="App">
      <h1>Custom React Hook (Data Fetching)</h1>
      {loading && <h3>loading ...</h3>}
      {error && <h3>Error: Something went wrong</h3>}
      {data && <pre> {JSON.stringify(data, undefined, 2)} </pre>}
    </div>
  );
};

export default App;
