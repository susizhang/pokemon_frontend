import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    axios.get(`http://localhost:5020/pokemon/${id}`).then(({ data }) => {
      // console.log(" ", data);
      setPokemon(data);
    });
  }, []);

  const {
    name: { english },
    type,
    base,
  } = pokemon;

  // console.log(" ", pokemon);
  if (!pokemon) return <h2>Loading...</h2>;
  return (
    <>
      <div>
        <h1>{english}</h1>
        <p>{type}</p>
        <div>
          <p>{base.Attack}</p>
          <p>{base.Defense}</p>
          <p>{base.HP}</p>
          <p>{base["Sp. Attack"]}</p>
          <p>{base["Sp. Defense"]}</p>
          <p>{base.Speed}</p>
        </div>
      </div>
    </>
  );
}

export default Detail;
