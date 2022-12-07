import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
    <div className="flex justify-center">
      <div className="box-border max-w-5xl dark:bg-red-200 dark:border-red-500/100 bg-gray-200  flex flex-col items-center justify-center	border-4 rounded-3xl  px-60 py-20">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          alt={pokemon.name.english}
        />
        <h1 className="text-red-600 text-5xl pokeName mb-10 ">
          {name.english}
        </h1>
        {type.map((item, index) => (
          <div key={index}>
            <p className="text-black">{item}</p>
          </div>
        ))}
        <div>
          {baseToArr.map((item, index) => (
            <p className="text-black" key={index}>
              {item.join(" : ")}
            </p>
          ))}
        </div>
        <button className="bg-indigo-500 shadow-lg shadow-indigo-500/40 text-white p-2 mt-6 rounded-xl px-6 py-4">
          <Link className="text-xl" to={`/${pokemon.id}/battle`}>
            Choose it to battle{" "}
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Detail;
