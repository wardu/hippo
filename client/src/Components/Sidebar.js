import "./Sidebar.scss";
import profile from "../assets/icons/profile-icon.svg";
import dashboard from "../assets/icons/dashboard-icon.svg";
import wallet from "../assets/icons/wallet-icon.svg";
import settings from "../assets/icons/settings-icon.svg";
import logout from "../assets/icons/logout-icon.svg";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__wrapper">
          <img src="#" alt="logo" className="siderbar__logo" />
          <div className="sidebar__button">
            <img src={profile} alt="icon" className="sidebar__icon" />
            <p className="sidebar__text">Profile</p>
          </div>
          <div className="sidebar__button">
            <img src={dashboard} alt="icon" className="sidebar__icon" />
            <p className="sidebar__text">Dashboard</p>
          </div>
          <div className="sidebar__button">
            <img src={wallet} alt="icon" className="sidebar__icon" />
            <p className="sidebar__text">Cost</p>
          </div>
          <div className="sidebar__button">
            <img src={settings} alt="icon" className="sidebar__icon" />
            <p className="sidebar__text">Settings</p>
          </div>
        </div>
        <div className="sidebar__button">
          <img src={logout} alt="icon" className="sidebar__icon" />
          <p className="sidebar__text">Logout</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
