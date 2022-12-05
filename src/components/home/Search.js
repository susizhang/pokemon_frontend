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
          <button className="dark:text-white">Search</button>
        </form>
      </div>
      <div>
        <button className="dark:text-white">Pick a Pokemon for me !</button>
      </div>
    </>
  );
}

export default Search;
