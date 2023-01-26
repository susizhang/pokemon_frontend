import { useState } from "react";
import { BiRocket } from "react-icons/bi";
import AllPokemon from "./AllPokemon";
import { BallTriangle } from "react-loader-spinner";

function SurpriseMe({ pokemons, filteredPokemons }) {
  const [randomIndex, setRandomIndex] = useState([]);

  const randomIdHandler = () => {
    const arr = Array.from(
      {
        length: 30,
      },
      () => Math.floor(Math.random() * 649)
    );
    setRandomIndex(arr);
  };
  //   console.log(" ", randomIndex);
  if (!pokemons.length)
    return (
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass="loading-spinner"
        wrapperStyle=""
        visible={true}
      />
    );

  return (
    <div>
      <div className="flex flex-col items-center ">
        <button
          className="box-border px-5 py-3 text-white rounded-xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-xl flex items-center gap-2  "
          onClick={randomIdHandler}
        >
          <BiRocket />
          Surprise me !
        </button>
      </div>

      <AllPokemon
        pokemons={pokemons}
        filteredPokemons={filteredPokemons}
        randomIndex={randomIndex}
      />
    </div>
  );
}

export default SurpriseMe;
