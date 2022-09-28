import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* ///////////////////////// */}
      <div className="navbar">
        <div>Logo</div>
        <div>DashBoard</div>
        <input type="search" placeholder="Search " />
        <div className="navbar-profile">
          <div>Not</div>
          <div>
            <img src="" alt="" />
            <div>Masud Rome</div>
            <div>Admin</div>
          </div>
        </div>
      </div>

      <div className="container-body">
        <div className="side-bar">
          <div className="navlinks">
            <nav>
              <ul>
                <li>DashBoard</li>
                <li>Appointment</li>
                <li>Doctors</li>
                <li>Patients</li>
                <li>Shedule</li>
                <li>Payments</li>
                <li></li>
              </ul>
            </nav>
          </div>
          <div className="navLinks2">
            <nav>
              <ul>
                <li>Settings</li>
                <li>Log Out</li>
              </ul>
            </nav>
          </div>
        </div>
        {/* ///////////////// */}

        <div className="container-outlet">
          {/* ////////////////////////// */}
          <div className="section2">
            <div className="today-details">
              <div className="today-activities">
                <div className="total-appointments">
                  <img src="" alt="" />
                  <div>
                    <h4>500</h4>
                    <p> appointments</p>
                  </div>
                </div>
                <div className="total-appointments">
                  <img src="" alt="" />
                  <div className="total-appointments__details">
                    <h4>500</h4>
                    <p> appointments</p>
                  </div>
                </div>
                <div className="total-appointments">
                  <img src="" alt="" />
                  <div>
                    <h4>500</h4>
                    <p> appointments</p>
                  </div>
                </div>
                <div className="total-appointments">
                  <img src="" alt="" />
                  <div>
                    <h4>500</h4>
                    <p> appointments</p>
                  </div>
                </div>
              </div>
              {/* //////////// */}

              <div className="today-details__chart">
                <div className="chart-header">
                  <h3>Patients Vist By Department</h3>
                  <select name="" id="">
                    <option value="">Daily</option>
                    <option value="">Weekly</option>
                    <option value="">Monthly</option>
                    <option value="">Yearly</option>
                  </select>
                </div>
                <div className="chart-graph">
                  <img src="" alt="" />
                  <div className="chart-graph__details">Cardiology 40%</div>
                </div>
              </div>
            </div>
            {/* //////////////////////// */}

            <div className="hosiptal-activity__chart">
              <div className="hospital-activity__diseases">
                <div className="hosiptal-activity__header">
                  <h3>Diseases</h3>
                  <h5>Last Week</h5>
                </div>
                <img
                  src="https://chartio.com/assets/3ad3d8/tutorials/charts/pie-charts/8f2915ab9024902155c5d27d430831be813de071853c69d778102722a4d0efbf/pie-chart-example-1.png"
                  alt=""
                />
                <div className="hosiptal-activity__details">
                  <p>Cold</p>
                  <p>Maleria</p>
                  <p>Flu</p>
                </div>
              </div>
              <div className="hospital-activity">
                <img
                  src="https://lh6.googleusercontent.com/c0OsC46V-vpQIuRWfjLvk4hu8IEcFdWB7aqrSGJiGjaiymxcWamwV3_ivAk3Vct9tnaRjhLAUZu9J6-1Q9xT-KRHrhJw59P2lusxGo4p5dLavkSG5jk4Q1QK3cfFvLfEHao52Hmz=s0"
                  alt=""
                />
              </div>
            </div>
            {/* ///////////////////// */}

            <div className="appointment-activity">
              <div className="appointment-activity__header">
                <ul>
                  <li>Name</li>
                  <li>Email</li>
                  <li>Date</li>
                  <li>Visit Time</li>
                  <li>Doctor</li>
                  <li>Condition</li>
                </ul>
              </div>
              <div className="appointment-card">
                <div className="appointment-card__profile">
                  <img src="" alt="" />
                  Jane Copper
                </div>
                <div className="appointment-activity__email">
                  jane.copper@gmail.com
                </div>
                <div className="appointment-activity__date">10/10/2020</div>
                <div className="appointment-activity__visitTime">
                  09.15-09.30am
                </div>
                <div className="appointment-activity__visitTime">
                  Dr.Jacob Jones
                </div>
                <div className="appointment-activity__conditions">
                  Depression
                </div>
                <div className="appointment-activity__button">
                  <div>Edit</div>
                  <div>Delete</div>
                </div>
              </div>
            </div>

            {/* ///////////////////// */}
          </div>
          {/* /////////////////////// */}

          <div className="section3">
            <div className="spendings">
              <div>Income</div>
              <div>Outcome</div>
            </div>
            {/* ///////// */}
            <div className="section3-doctors">
              <div className="doctors">
                <div className="section3-doctors__profile">
                  <img src="" alt="" />
                  Kilian James
                </div>
                <button> Avaliable</button>
              </div>
              <div className="doctors">
                <div className="section3-doctors__profile">
                  <img src="" alt="" />
                  Kilian James
                </div>
                <button> Avaliable</button>
              </div>
            </div>
            {/* /////////////// */}
            <div className="section3-calender">
              <img
                src="https://camo.githubusercontent.com/366e44bda8cd8313fa3043f9ad8c50a205696527268fb410e22db006a917afa9/68747470733a2f2f70726f6a656374732e776f6a74656b6d616a2e706c2f72656163742d63616c656e6461722f72656163742d63616c656e6461722e6a7067"
                alt=""
              />
            </div>
            {/* //////////////// */}
            <div className="section3-news">
              <div className="mews-card">
                <img src="" alt="" />
                <div className="news-details">
                  <div>Corona Corona Corona</div>
                  <div>Corona Corona </div>
                </div>
              </div>
            </div>
            {/* ///////////// */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
