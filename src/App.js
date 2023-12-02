import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Supply from "./pages/supplyInventory";
import Add from "./pages/Add";
import Update from "./pages/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Supply/>}></Route>
        <Route path="/Add" element = {<Add/>}></Route>
        <Route path="/Update/:supplyID" element = {<Update/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
