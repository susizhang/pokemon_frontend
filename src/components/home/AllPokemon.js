function AllPokemon({ pokemons }) {
  return (
    <>
      <ul className="grid grid-cols-4 gap-8 ">
        {pokemons.map((pokemon) => {
          return (
            <div
              className=" box-border max-w-5xl shadow-md dark:bg-slate-600 bg-slate-200 flex flex-col items-center justify-center	border-2  rounded-3xl"
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
