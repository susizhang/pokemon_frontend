import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import SuperDetail from "./components/SuperDetail";
import AllGameInfo from "./components/fightInfo/AllGameInfo";
import Search from "./components/home/Search";
import Toggle from "./components/theme/Toggle";
import { useEffect, useState } from "react";
import { baseUrl } from "./config";
import axios from "axios";
import SurpriseMe from "./components/home/SurpriseMe";
import PokeBattle from "./components/fightInfo/PokeBattle";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/pokemon`).then(({ data }) => {
      // console.log(" ", data);
      setPokemons(data);
      setFilteredPokemons(data.map((x) => x.id));
    });
  }, []);

  if (!pokemons) return <h2 className="dark:bg-slate-800">Loading...</h2>;

  const handleFilter = (filterString) => {
    const filtered = pokemons.filter((p) =>
      p.name.english.toLowerCase().startsWith(filterString.toLowerCase())
    );
    const filteredIds = filtered.map((p) => p.id);
    setFilteredPokemons(filteredIds);
  };

  return (
    <>
      <nav>
        <div className="grid grid-cols-8 gap-2 flex  items-center  nav-container bg-slate-800 dark:bg-transparent  ">
          <div className="col-span-6">
            <Search handleFilter={handleFilter} />
          </div>
          <div className="col-span-1 mb-6 ml-12 text-2xl text-yellow-300 font-medium	">
            <Link to="leaderboard">Game History</Link>
          </div>
          <div className="col-span-1">
            <Toggle />
          </div>
        </div>
      </nav>

      <div className="bg-white dark:bg-slate-800 transition-all bg-image-light  ">
        <Routes>
          <Route
            path="/"
            element={
              <SurpriseMe
                pokemons={pokemons}
                filteredPokemons={filteredPokemons}
              />
            }
          />
          <Route path="/:id" element={<Detail />} />
          <Route path="/:id/battle" element={<PokeBattle />} />

          <Route path="/:id/:info" element={<SuperDetail />} />
          <Route path="/leaderboard" element={<AllGameInfo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
