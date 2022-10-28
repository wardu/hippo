import './Dashboard.scss';
import DashboardTop from '../DashboardTop/DashboardTop';

const Dashboard = () => {
  return (
    <>
    <DashboardTop/>
      <div className="dashboard">
        <div className="dashboard__container">
          <section className="dashboard__upper">
            <section className="heading">
              <div className="heading__upper">
                <div className="heading__upper-first-container">
                  <p className="dashboard__first-heading">Electricity</p>
                </div>
                <div className="heading__upper-second-container">
                  <p className="dashboard__first-heading">Gas</p>
                </div>
              </div>
              <div className="heading__lower">
                <h2 className="heading__lower-title">Spend so far</h2>
              </div>
            </section>
            <section className="graph">
              <div className="graph__container1">GRAPH</div>
              <div className="graph__container2">
                <div className="data">
                  <div className="data-title">Predicted for</div>
                  <div className="data-month">
                    <h3>November</h3>
                  </div>
                  <section className="data-cards">
                    <ul className="data-cards__list">
                      <li className="data-cards__item">
                        <div className="data-cards__title">
                          <p>Energy consumed</p>
                        </div>
                        <div className="data-cards__figure">
                          <p>250 kWh</p>
                        </div>
                      </li>
                      <li className="data-cards__item">
                        <div className="data-cards__title">
                          <p>Saved so far</p>
                        </div>
                        <div className="data-cards__figure">
                          <p>-£27.71</p>
                        </div>
                      </li>
                      <li className="data-cards__item">
                        <div className="data-cards__title">
                          <p>Reduction in emissions</p>
                        </div>
                        <div className="data-cards__figure">
                          <p>10.12%</p>
                        </div>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </section>
          </section>
          <section className="dashboard__lower">
            <div className="dashboard__lower-header">
              <h2>Suggestions to reduce energy consumption</h2>
            </div>
            <section className="advices">
              <ul className="advices__card">
                <li className="advices__item">
                  <div className="advices__left">
                    <input type="radio" />
                  </div>
                  <div className="advices__right">
                    <h3 className="advices__title">
                      Careful with your washing
                    </h3>
                    <p className="advices__body">
                      Use your washing machine on a 30-degree cycle instead of
                      higher temperatures.
                    </p>
                  </div>
                </li>
              </ul>
            </section>
            <section className="advices">
              <ul className="advices__card">
                <li className="advices__item">
                  <div className="advices__left">
                    <input type="radio" />
                  </div>
                  <div className="advices__right">
                    <h3 className="advices__title">Avoid the tumble dryer</h3>
                    <p className="advices__body">
                      Avoid using a tumble dryer for your clothes: dry clothes
                      on racks inside where possible
                    </p>
                  </div>
                </li>
              </ul>
            </section>
            <section className="advices">
              <ul className="advices__card">
                <li className="advices__item">
                  <div className="advices__left">
                    <input type="radio" />
                  </div>
                  <div className="advices__right">
                    <h3 className="advices__title">Fill you dishwasher</h3>
                    <p className="advices__body">
                      Only run your dishwasher when it is full to reduce the
                      amount of water you use
                    </p>
                  </div>
                </li>
              </ul>
            </section>
          </section>
          <section className="dashboard__footer">
            <p>Would you like more ways to reduce your energy usage?</p>
            <p>Click here for more</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
