import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import _ from "lodash";

function Detail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios
      .get(`https://pokemon-cp2y.onrender.com/pokemon/${id}`)
      .then(({ data }) => {
        // console.log(" ", data);
        setPokemon(data);
      });
  }, [id]);

  // console.log(" ", pokemon);

  if (!pokemon) return <h2>Loading...</h2>;

  const { name, type, base } = pokemon;

  const baseToArr = _.toPairs(base);

  return (
    <>
      <div key={id}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          alt={pokemon.name.english}
        />
        <h1>{name.english}</h1>
        {type.map((item, index) => (
          <div key={index}>
            <p>{item}</p>
          </div>
        ))}
        <div>
          {baseToArr.map((item, index) => (
            <p key={index}>{item.join(" : ")}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Detail;
