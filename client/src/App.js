
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import "./styles/partials/_resets.scss";

function App() {
  return (
    <BrowserRouter>
      <section className="wrapper">
        <Sidebar />
        <Dashboard />
      </section>
    </BrowserRouter>

  );
}

export default App;
