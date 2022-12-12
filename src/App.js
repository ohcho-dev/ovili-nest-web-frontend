import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import World from "./pages/World";
import Journey from "./pages/Journey";
import Utility from "./pages/Utility";
import Nest from "./pages/Nest";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/world" element={<World />}></Route>
        <Route path="/journey" element={<Journey />}></Route>
        <Route path="/utility" element={<Utility />}></Route>
        <Route path="/nest" element={<Nest />}></Route>
      </Routes>
    </div>
  );
}

export default App;
