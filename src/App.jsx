import { useState, useEffect } from "react";
import { GetCharacters } from "./services/apiCalls";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (characters.length === 0) {
      const BringData = async () => {
        try {
          const fetched = await GetCharacters();
          setCharacters(fetched)
        } catch (error) {
          console.log(error);
        }
      };

      BringData();
    }
  }, [characters]);

  return (
    <>
      {characters.length > 0 ? (
        <div>{

          characters.map(
            person => {
              return (
                <div key={person.id}>{person.name}</div>
              )
            }
          )
          
          }</div>
      ) : (
        <div>Los personajes están viniendo.</div>
      )}
    </>
  );
}

export default App;
