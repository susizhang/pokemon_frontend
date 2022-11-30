import "./App.css";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={"index"} />
        <Route path="/:id" element={"index"} />
        <Route path="/:id/:info" element={"index"} />
      </Routes>
    </div>
  );
}

export default App;
