import "./App.css";
import Overlay from "./components/Overlay";
import Search from "./components/Search";
import { useState } from "react";

function App() {
  const [data, setData] = useState();
  return (
    <div>
      <div>
        <Search setData={setData} />
      </div>
      <div>
        <Overlay data={data} />
      </div>
    </div>
  );
}

export default App;
