import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import "./styles/partials/_resets.scss";
import Profile from "./pages/Profile/Profile";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <section className="wrapper">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="profile">
          <Routes>
            <Route path="/" element={<Profile />}></Route>

            <Route path="/dashboard"></Route>
          </Routes>
        </div>
      </section>
    </BrowserRouter>
  );
}

export default App;
