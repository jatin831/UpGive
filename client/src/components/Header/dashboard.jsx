import React from "react";
import Header from "./header";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="mx-3 dash">
        <div className="row">
          <div className="col-lg-3 friends">
            <h4 className="friend">Friends</h4>
            <h4>No friends Yet!!</h4>
            <button type="button" className="btn btn-secondary btn-sm">
              Add Friends
            </button>
          </div>
          <div className=" addsec col-lg-3">
            <button type="button" class="btn btn-primary btn-sm">
              Add expense
            </button>
            <button type="button" class="btn btn-primary btn-sm ">
              Settle Up
            </button>
            <span className="message">No Transaction Yet!!!</span>
          </div>
          <div className="col-lg-4 score">
            <h4>Net Balance:</h4>
            <h4>Debit amount:</h4>
            <h4>Credit amount:</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
