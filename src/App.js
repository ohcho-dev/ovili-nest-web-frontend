import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Sub from "./pages/Sub";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/*" element={<Sub />}></Route>
      </Routes>
    </div>
  );
}

export default App;
