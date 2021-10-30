import React from "react";
import Header from "./header";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="containers dash">
        <div className="row">
          <div className="col-lg-4 friend">Friends</div>
          <div className=" addsec col-lg-4">
            <button type="button" class="btn btn-outline-primary">
              Add expense
            </button>
            <button type="button" class="btn btn-outline-primary">
              Settle Up
            </button>
          </div>
          <div className="col-lg-4 container"></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
