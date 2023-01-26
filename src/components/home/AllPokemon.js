import { Link } from "react-router-dom";
function AllPokemon({ pokemons, randomIndex, filteredPokemons }) {
  const backgroundClassNames = [
    "dark:bg-red-200 dark:border-red-500/100 bg-gray-200 ",
    "dark:bg-orange-200 dark:border-orange-500/100 bg-gray-200",
    "dark:bg-blue-200 dark:border-blue-500/100 bg-gray-200",
    "dark:bg-yellow-200 dark:border-yellow-500/100 bg-gray-200",
    "dark:bg-green-200 dark:border-green-500/100 bg-gray-200",
  ];

  return (
    <>
      <ul className="grid grid-cols-4 gap-8  ul-main ">
        {!randomIndex.length
          ? pokemons
              .filter((p) => filteredPokemons.includes(p.id))
              .map((pokemon, index) => {
                return (
                  <div
                    className={` box-border max-w-5xl shadow-md ${
                      backgroundClassNames[Math.floor(index / 4) % 5]
                    }  flex flex-col items-center justify-center	border-4 rounded-3xl `}
                    key={pokemon.id}
                  >
                    <li className="flex flex-col items-center   ">
                      <div>
                        <img
                          className="battle-img"
                          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                          width="200px"
                          alt={pokemon.name.english}
                        />
                      </div>

                      <div className="text-2xl pokeName mt-4 text-black">
                        {pokemon.name.english}
                      </div>
                      <div className="flex gap-6 mb-6">
                        <button
                          className="bg-indigo-500 shadow-lg shadow-indigo-500/40 text-white p-2 mt-6 rounded-xl
                    "
                        >
                          <Link to={`/${pokemon.id}`}> Check detail</Link>
                        </button>
                        <button
                          className="bg-indigo-500 shadow-lg shadow-indigo-500/40 text-white p-2 mt-6 rounded-xl
                    "
                        >
                          <Link to={`/${pokemon.id}/battle`}>
                            Choose it to battle
                          </Link>
                        </button>
                      </div>
                    </li>
                  </div>
                );
              })
          : randomIndex.map((item, index) => {
              const pokemon = pokemons[item];
              return (
                <div
                  className={`box-border max-w-5xl shadow-md ${
                    backgroundClassNames[Math.floor(index / 4) % 5]
                  }  flex flex-col items-center justify-center	border-4 rounded-3xl `}
                  key={index}
                >
                  <li className="flex flex-col items-center  ">
                    <div>
                      <img
                        className="battle-img"
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item}.svg`}
                        width="200px"
                        alt="pokemon"
                      />
                    </div>
                  </li>
                  <div className="text-2xl pokeName mt-4 text-black">
                    {pokemon.name.english}
                  </div>
                  <div className="flex gap-6 mb-6">
                    <button
                      className="bg-indigo-500 shadow-lg shadow-indigo-500/40 text-white p-2 mt-6 rounded-xl
                    "
                    >
                      <Link to={`/${pokemon.id}`}> Check detail</Link>
                    </button>
                    <button
                      className="bg-indigo-500 shadow-lg shadow-indigo-500/40 text-white p-2 mt-6 rounded-xl
                    "
                    >
                      <Link to={`/${pokemon.id}/battle`}>
                        Choose it to battle
                      </Link>
                    </button>
                  </div>
                </div>
              );
            })}
      </ul>
    </>
  );
}

export default AllPokemon;
