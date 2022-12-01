import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5020/pokemon").then(({ data }) => {
      // console.log(" ", data);
      setPokemons(data);
    });
  }, []);

  // console.log(" ", pokemonName);
  if (!pokemons) return <h2>Loading...</h2>;

  return (
    <>
      {pokemons.map((pokemon, index) => {
        return (
          <div key={index}>
            <ul>
              <li>
                <a href={`/${pokemon.id}`}>{pokemon.name.english}</a>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default Home;
