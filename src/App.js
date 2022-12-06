import "./App.css";
import { Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import SuperDetail from "./components/SuperDetail";
import AllGameInfo from "./components/fightInfo/AllGameInfo";
import Search from "./components/home/Search";
import Toggle from "./components/theme/Toggle";
import { useEffect, useState } from "react";
import { baseUrl } from "./config";
import axios from "axios";
import SurpriseMe from "./components/home/SurpriseMe";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/pokemon`).then(({ data }) => {
      // console.log(" ", data);
      setPokemons(data);
    });
  }, []);

  if (!pokemons) return <h2 className="dark:bg-slate-800">Loading...</h2>;

  return (
    <>
      <nav>
        <div className="grid grid-cols-8 gap-2 flex  items-center  nav-container bg-slate-800 dark:bg-transparent  ">
          <div className="col-span-7">
            <Search pokemons={pokemons} />
          </div>
          <div className="col-span-1">
            <Toggle />
          </div>
        </div>
      </nav>

      <div className="bg-white dark:bg-slate-800 transition-all bg-image-light  ">
        <Routes>
          <Route path="/" element={<SurpriseMe pokemons={pokemons} />} />
          <Route path="/:id" element={<Detail />} />
          <Route path="/:id/:info" element={<SuperDetail />} />
          <Route path="/leaderboard" element={<AllGameInfo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
