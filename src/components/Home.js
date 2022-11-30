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

  console.log(" ", pokemons);
  return (
    <>
      {pokemons.map((pokemon) => {
        return (
          <ul>
            <li>
              <a href="#">{pokemon.name.english}</a>
            </li>
          </ul>
        );
      })}
    </>
  );
}

export default Home;
