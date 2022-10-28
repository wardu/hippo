import React from "react";
import lightbulb from "../../assets/icons/lightbulb.svg";
import "./Profile.scss";
import frame65 from "../../assets/icons/Frame 65.png";
import frame80 from "../../assets/icons/Frame 80.png";
import Frame13 from "../../assets/icons/Frame 13.png";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="profile">
      <h1 className="profile__title">My Profile</h1>
      <div className="profile__container">
        <div className="profile__containerOne">
          <div className="profile__wrapperOne">
            <img className="profile__emoji" src={lightbulb} alt="light bulb" />
            <h3 className="profile__headerOne">Good News!</h3>
            <h4 className="profile__intro">
              Your energy usage for the month is ready to view. Let's save the
              planet.
            </h4>
            <Link to="/dashboard">
              {" "}
              <button className="profile__button">Lets do it!</button>
            </Link>
          </div>

          <div className="profile__wrapperTwo">
            <h2 className="profile__headerOne">Contact Information</h2>
            <h2 className="profile__key">Name</h2>
            <p className="profile__value">Jenny Locke</p>
            <h2 className="profile__key">Email Address</h2>
            <p className="profile__value">jennylo33@gmail.com</p>
            <h2 className="profile__key">Phone Number</h2>
            <p className="profile__value">+44764893</p>
          </div>
        </div>

        <div className="profile__containerTwo">
          <h2 className="profile__headerTwo">Impact Goals</h2>
          <div className="profile__wrapOne">
            <div className="profile__piechart">
              <img
                className="profile__piechart-img"
                src={frame65}
                alt="65% carbon usage"
              />

              <h3 className="profile__piechart-text">
                Household Carbon Footprint Reduction
              </h3>
            </div>
            <div className="profile__piechart">
              <img
                className="profile__piechart-imgtwo"
                src={frame80}
                alt="80% carbon usage"
              />
              <h3 className="profile__piechart-text">Beat your Borough</h3>
            </div>
          </div>

          <div>
            <img src={Frame13} alt="Emission till date" />
          </div>
        </div>
      </div>
    </div>
  );
}
