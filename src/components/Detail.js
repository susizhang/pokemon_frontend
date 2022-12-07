import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import _ from "lodash";
import { baseUrl } from "../config";

function Detail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios.get(`${baseUrl}/pokemon/${id}`).then(({ data }) => {
      // console.log(" ", data);
      setPokemon(data);
    });
  }, [id]);

  // console.log(" ", pokemon);

  if (!pokemon) return <h2>Loading...</h2>;

  const { name, type, base } = pokemon;

  const baseToArr = _.toPairs(base);

  return (
    <div>
      <div
        className="box-border max-w-5xl dark:bg-red-200 dark:border-red-500/100 bg-gray-200  flex flex-col items-center justify-center	border-4 rounded-3xl "
        key={id}
      >
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          alt={pokemon.name.english}
        />
        <h1 className="dark:text-white">{name.english}</h1>
        {type.map((item, index) => (
          <div key={index}>
            <p className="dark:text-slate-400">{item}</p>
          </div>
        ))}
        <div>
          {baseToArr.map((item, index) => (
            <p className="dark:text-slate-400" key={index}>
              {item.join(" : ")}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Detail;
