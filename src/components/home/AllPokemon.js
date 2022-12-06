function AllPokemon({ pokemons, randomIndex }) {
  // console.log(" ", randomIndex);
  const backgroundClassNames = [
    "dark:bg-green-200 dark:border-green-500/100 bg-gray-200 ",
    "dark:bg-orange-200 dark:border-orange-500/100 bg-gray-200",
    "dark:bg-blue-200 dark:border-blue-500/100 bg-gray-200",
    "dark:bg-yellow-200 dark:border-yellow-500/100 bg-gray-200",
    "dark:bg-red-200 dark:border-red-500/100 bg-gray-200",
  ];
  return (
    <>
      <ul className="grid grid-cols-4 gap-8  ul-main">
        {!randomIndex.length
          ? pokemons.map((pokemon, index) => {
              return (
                <div
                  className={`box-border max-w-5xl shadow-md ${
                    backgroundClassNames[Math.floor(index / 4) % 5]
                  }  flex flex-col items-center justify-center	border-4 rounded-3xl `}
                  key={pokemon.id}
                >
                  <li className="flex flex-col items-center  ">
                    <div>
                      <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                        width="200px"
                        alt={pokemon.name.english}
                      />
                    </div>

                    <div>
                      <a className="text-2xl" href={`/${pokemon.id}`}>
                        {pokemon.name.english}
                      </a>
                    </div>
                  </li>
                </div>
              );
            })
          : randomIndex.map((item, index) => {
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
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item}.svg`}
                        width="200px"
                        alt="pokemon"
                      />
                    </div>
                  </li>
                </div>
              );
            })}
      </ul>
    </>
  );
}

export default AllPokemon;
