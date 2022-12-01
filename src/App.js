import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
import SuperDetail from "./components/SuperDetail";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/:id/:info" element={<SuperDetail />} />
      </Routes>
    </div>
  );
}

export default App;
