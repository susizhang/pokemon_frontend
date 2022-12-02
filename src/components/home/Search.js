function Search({ pokemons }) {
  return (
    <>
      <h1>Pokéfight</h1>
      <div>
        <h2>Name or Number</h2>
        <p>Search for a Pokémon by name or using its National Pokédex number</p>
        <form action="">
          <input type="text" />
          <button>Search</button>
        </form>
      </div>
      <div>
        <button>Pick a Pokemon for me !</button>
      </div>
    </>
  );
}

export default Search;
