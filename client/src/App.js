import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Components/Dashboard/Dashboard";
import "./styles/partials/_resets.scss";
import Profile from "./pages/Profile/Profile";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <section className="wrapper">
        <Sidebar />
        <div className="profile">
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
