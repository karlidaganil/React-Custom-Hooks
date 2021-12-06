import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import useBoolean from "./useBoolean";

const App = () => {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useBoolean(false);

  useEffect(() => {
    setLoading.on();
    axios
      .get("https://rickandmortyapi.com/api/character/1")
      .then((res) => {
        setCharacter(res.data);
      })
      .catch((err) => {
        setLoading.off();
      })
      .finally(() => {
        setLoading.off();
      });
  }, []);
  return (
    <div className="App">
      {loading && <h1>Loading...</h1>}
      {!loading && (
        <>
          <h1>{character.name}</h1>
          <img src={character.image} alt="dataimage" />
        </>
      )}
    </div>
  );
};

export default App;
