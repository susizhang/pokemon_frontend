import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5020/pokemon/${id}`).then(({ data }) => {
      // console.log(" ", data);
      setPokemon(data);
    });
  }, []);

  // console.log(" ", pokemonName);
  if (!pokemon) return <h2>Loading...</h2>;
  return <div></div>;
}

export default Detail;
