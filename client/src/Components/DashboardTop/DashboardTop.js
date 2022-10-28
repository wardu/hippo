import "./DashboardTop.scss";
import energyLogo from "../../assets/logo/energy-logo.svg";

const DashboardTop = () => {
  return (
    <div className="dashboardTop">
      <div className="dashboardTop__left">
        <h1 className="dashboardTop__welcome">Welcome back, Jenny!</h1>
        <p className="dashboardTop__text">
          Here's what's happening with your household impact.
        </p>
        <div className="dashboardTop__switcher">
          <p className="dashboardTop__value dashboardTop__value--active">
            Month
          </p>
          <p className="dashboardTop__value">Year</p>
        </div>
        <div className="dashboardTop__stats">
          <div className="dashboardTop__stats-wrapper">
            <p className="dashboardTop__title">Energy Consumed</p>
            <p className="dashboardTop__amount">
              3875 <span className="dashboardTop__unit">kwh</span>
            </p>
          </div>
          <div className="dashboardTop__stats-wrapper dashboardTop__stats-wrapper--middle">
            <p className="dashboardTop__title">CO2 Footprint Reduction</p>
            <p className="dashboardTop__amount dashboardTop__amount--green">
              -13<span className="dashboardTop__unit">%</span>
            </p>
          </div>
          <div className="dashboardTop__stats-wrapper">
            <p className="dashboardTop__title">Saved so far</p>
            <p className="dashboardTop__amount">£13</p>
          </div>
        </div>
      </div>

      <div className="dashboardTop__right">
        <div className="dashboardTop__provider-wrapper">
          <p className="dashboardTop__provider-title">Energy Provider</p>
          <img
            src={energyLogo}
            alt="energy supplier logo"
            className="dashboardTop__provider-logo"
          />
        </div>
        <div className="dashboardTop__date-wrapper">
          <p className="dashboardTop__date">October 2022</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardTop;
