import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from "../../img/logo 2.png";

function Search() {
  return (
    <>
      <div className="grid grid-cols-8 gap-10 flex flex-col items-center justify-center ">
        <Link className="col-span-2" to="/">
          <img src={logo} alt="" />
        </Link>

        <div className="col-span-6 ">
          <form className="flex pt-2 " action="">
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full  border-slate-300 rounded-tl-lg rounded-bl-lg py-2 pl-5 pr-3 h-12  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm "
              type="text"
              placeholder="Write a name or number to search a pokemon"
            />
            <button className="text-white border rounded-tr-lg  pl-3 w-12 h-12 rounded-br-lg bg-orange-500 hover:bg-orange-700 border-orange-300  text-xl">
              <BiSearchAlt2 />
            </button>
          </form>

          <p className="text-slate-400 pt-2 ">
            Search for a Pokémon by name or using its National Pokédex number
          </p>
        </div>
      </div>
    </>
  );
}

export default Search;
