import { BiSearchAlt2 } from "react-icons/bi";
import logo from "../../img/logo 2.png";

function Search() {
  return (
    <>
      <div className="grid grid-cols-8 gap-10 flex flex-col items-center justify-center ">
        <img className="col-span-2" src={logo} alt="" />
        <div className="col-span-5">
          <form action="">
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              type="text"
              placeholder="write name or number to search a pokemon"
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
