import "./App.css";
import { Route, Routes } from "react-router-dom";
import Proposal from "./pages/Proposal";
import Final from "./pages/Final";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Proposal />} />
      <Route path="/final" element={<Final />} />
    </Routes>
  );
}

export default App;
