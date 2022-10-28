import React from "react";
import lightbulb from "../../assets/icons/lightbulb.svg";
import "./Profile.scss";
import frame65 from "../../assets/icons/Frame 65.png";
import frame80 from "../../assets/icons/Frame 80.png";
import Emission1 from "../../assets/icons/Emission 1.png";
import Emission2 from "../../assets/icons/Emission 2.png";

export default function Profile() {
  return (
    <div>
      <h1>My Profile</h1>
      <div className="profilepage"> 
      <div>
        <div>
          <img src={lightbulb} alt="light bulb" />
          <h3>Tell us your latest energy bill and lets save the planet</h3>
          <button>Lets do it!</button>
        </div>

        <div>
          <h2>Contact Information</h2>
          <h2>Name</h2>
          <p>Jenny Locke</p>
          <h2>Email Address</h2>
          <p>jennylo33@gmail.com</p>
          <h2>Phone Number</h2>
          <p>+44764893</p>
        </div>
      </div>

      <div>
        <h2>Impact Goals</h2>
        <div>
          <img src={frame65} alt="65% carbon usage" />
          <h3>Household Carbon Emission Target</h3>
        </div>
        <img src={frame80} alt="80% carbon usage" />
        <h3>Beat your Borough</h3>
        <div>
          <h2>Progress</h2>
          <div>
            <p>Emission</p>
            <div>
              <p>Till date</p>
              <p>Predicted</p>
            </div>
            <img src={Emission1} alt="Emission till date" />
            <div>
              <p>Till date</p>
              <p>Predicted</p>
            </div>
          </div>
        </div>

        <div>
          <h2>Progress</h2>
          <div>
            <p>Green Energy Generated</p>
            <div>
              <p>Till date</p>
              <p>Predicted</p>
            </div>
            <img src={Emission2} alt="Emission till date" />
            <div>
              <p>Till date</p>
              <p>Predicted</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
