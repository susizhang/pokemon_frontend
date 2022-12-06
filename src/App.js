import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Detail from "./components/Detail";
import SuperDetail from "./components/SuperDetail";
import AllGameInfo from "./components/fightInfo/AllGameInfo";

function App() {
  return (
    <div className="bg-white dark:bg-slate-800 transition-all bg-image-light ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/:id/:info" element={<SuperDetail />} />
        <Route path="/leaderboard" element={<AllGameInfo />} />
      </Routes>
    </div>
  );
}

export default App;
