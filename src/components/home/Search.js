function Search({ pokemons }) {
  return (
    <>
      <h1 className="text-3xl dark:text-white font-bold ">Pokéfight</h1>
      <div>
        <h2 className="dark:text-white">Name or Number</h2>
        <p className="dark:text-slate-400">
          Search for a Pokémon by name or using its National Pokédex number
        </p>
        <form action="">
          <input type="text" />
          <button className="text-white bg-orange-500 hover:bg-orange-700 text-xl">
            Search
          </button>
        </form>
      </div>
      <div>
        <button className="text-white bg-indigo-500 hover:bg-indigo-700 text-xl">
          Pick a Pokemon for me !
        </button>
      </div>
    </>
  );
}

export default Search;
