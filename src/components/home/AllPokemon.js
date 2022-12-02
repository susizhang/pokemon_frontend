function AllPokemon({ pokemons }) {
  return (
    <div>
      {pokemons.map((pokemon) => {
        return (
          <div key={pokemon.id}>
            <ul>
              <div>
                <li>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                    width="25%"
                    alt={pokemon.name.english}
                  />
                  <a href={`/${pokemon.id}`}>{pokemon.name.english}</a>
                </li>
              </div>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default AllPokemon;
