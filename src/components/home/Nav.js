import Toggle from "../theme/Toggle";
import Search from "./Search";

function Nav({ pokemons }) {
  return (
    <>
      <div>
        <Search pokemons={pokemons} />
      </div>
      <div>
        <Toggle />
      </div>
    </>
  );
}

export default Nav;
