import './Dashboard.scss';
import Plot from 'react-plotly.js';
import { useState } from 'react';
import { useEffect } from 'react';

const Dashboard = () => {
  const [saving, setSaving] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(40);
  const [lastClicked, setLastClicked] = useState('');

  const toggleChart = (type, amount) => {
    if (type === lastClicked) {
      const totalSaving = saving - amount;
      setSaving(totalSaving);
      setLastClicked('');
      return;
    }

    const totalSaving = saving + amount;
    setSaving(totalSaving);
    setLastClicked(type);
    return;
  };

  return (
    <>
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
              <div className="graph__container1">
                <div className="plot-container">
                  <Plot
                    data={[
                      {
                        type: 'bar',
                        color: 'red',
                        x: ['May', 'June', 'July', 'Aug', 'Sept', 'Oct'],
                        y: [50, 30, 20, 33, 44, currentPrice - saving],
                        marker: {
                          color: [
                            '#E9BFBB',
                            '#E9BFBB',
                            '#E9BFBB',
                            '#E9BFBB',
                            '#E9BFBB',
                            'rgba(255, 0, 0, 0.2)',
                            '#E9BFBB',
                          ],
                        },
                      },
                    ]}
                    layout={{ width: 500, height: 400, title: 'Electricity' }}
                  />
                </div>
                <div id="myDiv"></div>
              </div>
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
                          <p>-£27.71 🔻</p>
                        </div>
                      </li>
                      <li className="data-cards__item">
                        <div className="data-cards__title">
                          <p>Reduction in emissions</p>
                        </div>
                        <div className="data-cards__figure">
                          <p>10.12% 🔻</p>
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
              <ul
                className="advices__card"
                onClick={() => {
                  toggleChart('washine machine', 15);
                }}
              >
                <li className="advices__item">
                  <div className="advices__left"></div>
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
              <ul
                className="advices__card"
                onClick={() => {
                  toggleChart('tumble dryer', 20);
                }}
              >
                <li className="advices__item">
                  <div className="advices__left"></div>
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
              <ul
                className="advices__card"
                onClick={() => {
                  toggleChart('dish washer', 16);
                }}
              >
                <li className="advices__item">
                  <div className="advices__left">
                    {/* <input type="radio" /> */}
                  </div>
                  <div className="advices__right">
                    <h3 className="advices__title">Fill your dishwasher</h3>
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
