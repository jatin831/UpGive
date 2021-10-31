import React, { useState, useEffect } from "react";
import Header from "../Header/header";
import "./dashboard.css";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => { 

  }, [])

  return (
    <>
      <Header />
      <div className="ms-5 mx-3 dash">
        <div className="row">
          <div className="col-lg-2 friends">
            <h4 className="friend mb-4 ms-2">Friends</h4>
            {
              friends.length === 0 ? (
                <div className="mb-4">
                  <h5>No friends Yet!!</h5>
                </div>
              ) : (
                friends.map(friend => {
                  return (
                    <div>

                    </div>
                  )
                })
              )
            }
            
            <button type="button" className="btn btn-secondary btn-md">
              Add Friends
            </button>
          </div>
          <div className="col-lg-10 p-0 m-0">
            <div className="row px-5 m-0 d-flex justify-content-between">
              <div className="d-flex justify-content-around col-12 pt-3 pb-2 containerWhite">
                <div className="d-flex flex-column align-items-center">
                  <h3 className="mb-0"><h4 className="d-inline">&#x20B9;</h4> 00.00</h3>
                  Net Balance
                </div>
                <div className="d-flex flex-column align-items-center">
                  <h3 className="mb-0"><h4 className="d-inline">&#x20B9;</h4> 00.00</h3>
                  Credit Amount
                </div>
                <div className="d-flex flex-column align-items-center">
                  <h3 className="mb-0"><h4 className="d-inline">&#x20B9;</h4> 00.00</h3>
                  Debit Amount
                </div>
              </div>
              <div className="d-flex mt-2 mx-0 px-0 justify-content-around">
                <button type="button" className="fs-5 btn btn-primary btn-md">
                  Add expense
                </button>
                <button type="button" className="fs-5 btn btn-primary btn-md">
                  Settle Up
                </button>
              </div>
              <div className="d-flex flex-column align-items-center mt-3 containerWhite py-3 pt-2">
                <h2 className="fw-bold">Transaction History</h2>
                <div className="mt-3">
                  {
                    transactions.length === 0 ? (
                      <h5>No Transactions...</h5>
                    ): (
                      transactions.map(transactions => {
                        return <div>Transaction</div>
                      })
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
