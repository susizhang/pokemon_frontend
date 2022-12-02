import Search from "./Search";

function Nav({ pokemons }) {
  return (
    <div>
      <Search pokemons={pokemons} />
    </div>
  );
}

export default Nav;
