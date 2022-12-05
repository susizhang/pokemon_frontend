import Toggle from "../theme/Toggle";
import Search from "./Search";

function Nav({ pokemons }) {
  return (
    <div className="grid grid-cols-8 gap-2 flex  items-center  nav-container bg-slate-800 dark:bg-transparent  ">
      <div className="col-span-7">
        <Search pokemons={pokemons} />
      </div>
      <div className="col-span-1">
        <Toggle />
      </div>
    </div>
  );
}

export default Nav;
