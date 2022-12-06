import { BiSearchAlt2 } from "react-icons/bi";

function Search({ pokemons }) {
  return (
    <>
      <div className="grid grid-cols-8 gap-5 flex flex-col items-center justify-center ">
        <h1 className="col-span-2 text-5xl text-white font-bold ">Pokéfight</h1>
        <div className="col-span-6">
          <form action="">
            <input
              className="border border-zinc-800"
              type="text"
              placeholder="Name or Number"
            />
            <button className="text-white bg-orange-500 hover:bg-orange-700 text-xl">
              <BiSearchAlt2 />
            </button>
          </form>

          <p className="text-slate-400 ">
            Search for a Pokémon by name or using its National Pokédex number
          </p>
        </div>
      </div>
    </>
  );
}

export default Search;
