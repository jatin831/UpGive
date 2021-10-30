import React from "react";
import Header from "./header";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="containers dash">
        <div className="row">
          <div className="col-lg-4 friends">
            <span className="friend">Friends</span>
            <span className="message">No friends Yet!!</span>
            <button type="button" class="btn btn-secondary btn-sm">
              Add Friends
            </button>
          </div>
          <div className=" addsec col-lg-4">
            <button type="button" class="btn btn-primary btn-sm">
              Add expense
            </button>
            <button type="button" class="btn btn-primary btn-sm">
              Settle Up
            </button>
            <span className="message">No Transaction Yet!!!</span>
          </div>
          <div className="col-lg-4 container">
            <span>Net Balance:</span>
            <span>Debit amount:</span>
            <span>Credit amount:</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
