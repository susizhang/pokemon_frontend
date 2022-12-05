import axios from "axios";
import { useEffect, useState } from "react";
import AllPokemon from "./AllPokemon";
import Nav from "./Nav";
import { baseUrl } from "../../config";

function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/pokemon`).then(({ data }) => {
      // console.log(" ", data);
      setPokemons(data);
    });
  }, []);

  // console.log(" ", pokemonName);
  if (!pokemons) return <h2 className="dark:bg-slate-800">Loading...</h2>;

  return (
    <>
      <Nav pokemons={pokemons} />
      <AllPokemon pokemons={pokemons} />
    </>
  );
}

export default Home;
