import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import "./styles/partials/_resets.scss";
import Profile from "./pages/Profile/Profile";
import "./App.scss";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <section className="wrapper">
        <div className="sidebar-component">
          <Sidebar />
        </div>
        <div className="allroutes">
          <Routes>
            <Route path="/" element={<Profile />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </div>
      </section>
    </BrowserRouter>
  );
}

export default App;
