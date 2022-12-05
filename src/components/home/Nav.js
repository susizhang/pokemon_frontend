import Toggle from "../theme/Toggle";
import Search from "./Search";

function Nav({ pokemons }) {
  return (
    <div>
      <div>
        <Search pokemons={pokemons} />
      </div>
      <div>
        <Toggle />
      </div>
    </div>
  );
}

export default Nav;
