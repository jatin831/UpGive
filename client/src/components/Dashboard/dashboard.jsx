import React, { useState, useEffect } from "react";
import Header from "../Header/header";
import "./dashboard.css";
import Avatar from "@material-ui/core/Avatar";
import axios from "axios";
import CircularProgress from '@material-ui/core/CircularProgress';
import AddFriendModal from '../AddFriendModal/addFriend';
import { useSelector } from "react-redux";
import { selectUserData } from '../../reduxSlices/authSlice';

const Dashboard = () => {
  const userData = useSelector(selectUserData);
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [friends, setFriends] = useState([]);
  const [show, setShow] = useState(false);
  const toggle = () => setShow(prevState=>!prevState);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/user/getFriends", {
        params: {
          userId: "617cc0b8b998f18d6814c439",
        },
      })
      .then((res) => {
        setFriends(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

    axios
      .get("http://localhost:5000/user/getTransactionsHistory", {
        params: {
          // userId: userData.userId,
          userId: "617cc0b8b998f18d6814c439",
        }
      })
      .then(res => {
        // console.log(res);
        setTransactions(res.data);
      })
      .catch(err => {
        console.log(err);
        if (err.response && err.response.data && err.response.data.message) {
            alert(err.response.data.message);
        }
      })
  }, []);

  return (
    <>
      <AddFriendModal isModalOpen={show} toggleModal={toggle} setShow={setShow}/>
      <Header />
      <div className="ms-5 mx-3 dash">
        <div className="row">
          <div className="col-lg-2 friends">
            <h4 className="friend mb-4 ms-2">Friends</h4>
            {
              loading ? (
                <div className="d-flex ms-4 mb-4">
                  <CircularProgress />
                </div>
              ) : friends.length === 0 ? (
              <div className="mb-4">
                <h5>No friends Yet!!</h5>
              </div>
              ) : (
              friends.map((friend) => {
                return (
                  <div className="friend-card mb-4">
                    <Avatar
                      style={{
                        height: "35px",
                        width: "35px",
                        background: "#1B559C",
                      }}
                    >
                      S
                    </Avatar>
                    <div className="friend-list">Sarthak Jain</div>
                  </div>
                );
              })
            )}

            <button type="button" className="btn btn-secondary btn-md" onClick={() => setShow(true)}>
              Add Friend
            </button>
          </div>
          <div className="col-lg-10 p-0 m-0">
            <div className="row px-5 m-0 d-flex justify-content-between">
              <div className="d-flex justify-content-around col-12 pt-3 pb-2 containerWhite">
                <div className="d-flex flex-column align-items-center">
                  <h3 className="mb-0">
                    <h4 className="d-inline">&#x20B9;</h4> 00.00
                  </h3>
                  Net Balance
                </div>
                <div className="d-flex flex-column align-items-center">
                  <h3 className="mb-0">
                    <h4 className="d-inline">&#x20B9;</h4> 00.00
                  </h3>
                  Credit Amount
                </div>
                <div className="d-flex flex-column align-items-center">
                  <h3 className="mb-0">
                    <h4 className="d-inline">&#x20B9;</h4> 00.00
                  </h3>
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
              <div className="TransactionHistory d-flex flex-column align-items-center mt-3 containerWhite py-3 pt-3">
                <h2 className="fw-bold">Transaction History</h2>
                <div style={{width: "100%"}} className="mt-3 d-flex flex-column">
                  {transactions.length === 0 ? (
                    <h5>No Transactions...</h5>
                  ) : (
                    transactions.map((transactions) => {
                      return (
                        <div className="d-flex Transaction">
                          ka
                        </div>
                      );
                    })
                  )}
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
