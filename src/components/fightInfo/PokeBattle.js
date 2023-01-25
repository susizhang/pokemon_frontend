import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BiRevision } from "react-icons/bi";
import { baseUrl } from "../../config";
import ProgressBar from "react-animated-progress-bar";

const PokeBattle = () => {
  const [randomId, setRandomId] = useState(1);
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();
  const [randomPokemon, setRandomPokemon] = useState();
  const [result, setResult] = useState("");
  const [startButtonStatus, setStartButtonStatus] = useState(false);
  //   const [flag, setFlag] = useState(false);

  useEffect(() => {
    axios.get(`${baseUrl}/pokemon/${id}`).then(({ data }) => {
      // console.log(" ", data);
      setPokemon(data);
    });
  }, [id]);

  useEffect(() => {
    axios.get(`${baseUrl}/pokemon/${randomId}`).then(({ data }) => {
      // console.log(" ", data);
      setRandomPokemon(data);
    });
  }, [randomId]);

  useEffect(() => {
    setRandomId(Math.floor(Math.random() * 649));
  }, []);

  if (!pokemon || !randomPokemon) return <h2>Loading...</h2>;

  const { name, base } = pokemon;

  const battleHandler = () => {
    if (
      base.Attack > Math.floor(Math.random() * (randomPokemon.base.HP + 30))
    ) {
      setStartButtonStatus(true);
      setTimeout(() => {
        setResult("Congratulation, you win!");
        axios.post(`${baseUrl}/game/save`, {
          winner: name.english,
          loser: randomPokemon.name.english,
        });
      }, 2100);

      //   setFlag(true);
    } else {
      setStartButtonStatus(true);
      setTimeout(() => {
        setResult("Sorry, Computer wins!");
        axios.post(`${baseUrl}/game/save`, {
          winner: randomPokemon.name.english,
          loser: name.english,
        });
        // axios.put(`${baseUrl}/game/${id}`, {
        //   winner: randomPokemon.name.english,
        //   loser: name.english,
        // });
        // axios.delete(`${baseUrl}/game/${id}`);
      }, 2100);
    }
  };

  const tryAgainHandler = () => {
    setRandomId(Math.floor(Math.random() * 649));
    setStartButtonStatus(false);
    setResult("");
  };

  return (
    <>
      <div className="grid grid-cols-6 gap-20">
        <div
          className="col-start-2 col-span-2 box-border max-w-5xl dark:bg-red-200 dark:border-red-500/100 bg-gray-200  flex flex-col items-center justify-center	border-4 rounded-3xl "
          key={id}
        >
          <div className="box-border py-8">
            <img
              className="battle-img"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              alt={pokemon.name.english}
            />
          </div>

          <h1 className="text-red-600 text-5xl pb-8 pokeName">
            {name.english}
          </h1>
        </div>
        <div
          className="col-span-2 box-border max-w-5xl dark:bg-indigo-500 dark:border-cyan-500/100 bg-gray-200  flex flex-col items-center justify-center	border-4 rounded-3xl "
          key={randomId}
        >
          <div className="box-border py-8">
            <img
              className="battle-img"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${randomId}.svg`}
              alt={pokemon.name.english}
            />
          </div>

          <h1 className="text-yellow-300 text-5xl pb-8 pokeName">
            {randomPokemon.name.english}
          </h1>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-red-500 py-6 px-12 shadow-lg shadow-indigo-500/40 text-white p-2 mt-6  text-xl rounded-3xl"
          onClick={battleHandler}
          //   disabled={flag}
        >
          Start Battle
        </button>

        <button
          className=" py-6 px-12 text-gray dark:text-white p-2 mt-6  text-xl flex gap-2 items-center"
          onClick={tryAgainHandler}
        >
          <BiRevision />
          Change opponent
        </button>
      </div>
      {startButtonStatus && (
        <div className="flex justify-center mt-12">
          <ProgressBar
            width="400px"
            height="10px"
            rect
            fontColor="gray"
            percentage="100"
            rectPadding="1px"
            rectBorderRadius="20px"
            trackPathColor="transparent"
            bgColor="#333333"
            trackBorderColor="grey"
          />
        </div>
      )}

      <div className="flex justify-center mt-8">
        <h1 className="text-7xl dark:text-yellow-300 font-semibold ">
          {result}
        </h1>
      </div>
    </>
  );
};

export default PokeBattle;
