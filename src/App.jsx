import { Nav } from "../Components/Nav";
import { Card } from "../Components/Card";
import { Footer } from "../Components/Footer";
import { Routes, Route} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <Nav />
      <Card />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
