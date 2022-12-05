import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Detail from "./components/Detail";
import SuperDetail from "./components/SuperDetail";

function App() {
  return (
    <div className="bg-white dark:bg-slate-800 transition-all">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/:id/:info" element={<SuperDetail />} />
      </Routes>
    </div>
  );
}

export default App;
