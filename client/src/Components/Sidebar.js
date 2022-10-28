import "./Sidebar.scss";
import profile from "../assets/icons/profile-icon.svg";
import dashboard from "../assets/icons/dashboard-icon.svg";
import wallet from "../assets/icons/wallet-icon.svg";
import settings from "../assets/icons/settings-icon.svg";
import logout from "../assets/icons/logout-icon.svg";
import { Link, useNavigate } from "react-router-dom";


const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="sidebar">
        <div className="sidebar__wrapper">
          <img src="#" alt="logo" className="siderbar__logo" />
          <div onClick={()=>navigate("/")} className="sidebar__button">
            <img src={profile} alt="icon" className="sidebar__icon" />
            <p className="sidebar__text">Profile</p>
          </div>
          <Link className="sidebar__button" to="/">
            <img src={dashboard} alt="icon" className="sidebar__icon" />
            <p className="sidebar__text">Dashboard</p>
          </Link>
          <Link className="sidebar__button" to="/">
            <img src={wallet} alt="icon" className="sidebar__icon" />
            <p className="sidebar__text">Cost</p>
          </Link>
          <Link className="sidebar__button" to="/">
            <img src={settings} alt="icon" className="sidebar__icon" />
            <p className="sidebar__text">Settings</p>
          </Link>
        </div>
        <Link className="sidebar__button" to="/">
          <img src={logout} alt="icon" className="sidebar__icon" />
          <p className="sidebar__text">Logout</p>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
