import { useState, useEffect } from "react";
import { GetCharacters } from "./services/apiCalls";
import { Card } from "./common/Card/Card";
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

  const clickedCharacter = (person) => {
    console.log(person)
  }

  return (
    <>
      {characters.length > 0 ? (
        <div className="cardsRoster">{

          characters.slice(0,10).map(
            person => {
              return (
                <Card 
                  key={person.id}
                  name={person.name}
                  species={person.species}
                  image={person.image}
                  clickFunction={()=>clickedCharacter(person)}
                />
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
