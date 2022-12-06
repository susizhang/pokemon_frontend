function AllPokemon({ pokemons }) {
  return (
    <>
      <ul className="grid grid-cols-4 gap-8 ">
        {pokemons.map((pokemon, index) => {
          const backgroundClassNames = [
            "dark:bg-green-200 border-green-500/100 bg-green-200 ",
            "dark:bg-orange-200 border-orange-500/100 bg-orange-200",
            "dark:bg-blue-200 border-blue-500/100 bg-blue-200",
            "dark:bg-yellow-200 border-yellow-500/100 bg-yellow-200",
            "dark:bg-red-200 border-red-500/100 bg-red-200",
          ];
          return (
            <div
              className={`box-border max-w-5xl shadow-md ${
                backgroundClassNames[Math.floor(index / 4) % 5]
              }  flex flex-col items-center justify-center	border-8 rounded-3xl `}
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
        })}
      </ul>
    </>
  );
}

export default AllPokemon;
