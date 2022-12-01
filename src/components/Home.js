import axios from "axios";
import { useEffect, useState, useRef } from "react";

function Home() {
  const [pokemons, setPokemons] = useState([]);
  // const pokemonUrl = useRef([]);
  const [pokemonUrl, setPokemonUrl] = useState();
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
      {pokemons.map((pokemon) => {
        return (
          <div key={pokemon.id}>
            <ul>
              <div>
                <li>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                    width="25%"
                    alt={pokemon.name.english}
                  />
                  <a href={`/${pokemon.id}`}>{pokemon.name.english}</a>
                </li>
              </div>
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default Home;
