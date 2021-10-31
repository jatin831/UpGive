import React, { useState, useEffect } from "react";
import Header from "../Header/header";
import "./dashboard.css";
import Avatar from "@material-ui/core/Avatar";
import axios from "axios";
import CircularProgress from '@material-ui/core/CircularProgress';
import AddFriendModal from '../AddFriendModal/addFriend';
import { useSelector } from "react-redux";
import { selectUserData } from '../../reduxSlices/authSlice';
import { getDateStringFromTimestamp, getTimeFromTimestamp } from "../../utilities";

const Dashboard = () => {
  const userData = useSelector(selectUserData);
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [friends, setFriends] = useState([]);
  const [show, setShow] = useState(false);
  const toggle = () => setShow(prevState=>!prevState);
  const [transactionStatus, setTransactionStatus] = useState();

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

    axios.get("http://localhost:5000/user/getTransactionStatus", {
      params: {
        // userId: userData.userId,
        userId: "617cc0b8b998f18d6814c439"
      }
    })
    .then(res => {
      setTransactionStatus(res.data);
    })
    .catch(err => {
      console.log(err);
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
                    <h4 className="d-inline">&#x20B9;</h4> {transactionStatus.netBalance.toFixed(2)}
                  </h3>
                  Net Balance
                </div>
                <div className="d-flex flex-column align-items-center">
                  <h3 className="mb-0">
                    <h4 className="d-inline">&#x20B9;</h4> {transactionStatus.credit.toFixed(2)}
                  </h3>
                  Credit Amount
                </div>
                <div className="d-flex flex-column align-items-center">
                  <h3 className="mb-0">
                    <h4 className="d-inline">&#x20B9;</h4> {transactionStatus.debit.toFixed(2)}
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
                    transactions.map((transaction) => {
                      let youOwe, whoPaid;
                      let flag = 0; // youOwe
                      if (transaction._id === userData.userId) {
                        flag = 1; // youPaid
                      } else {
                        transaction.friends.forEach(friend => {
                          console.log(friend);
                          console.log(userData);
                          if (friend.id === userData.userId || friend.id === "617cc0b8b998f18d6814c439") {
                            youOwe = -friend.debt;
                            whoPaid = friend.name;
                          }
                        })
                      }

                      return (
                        <div className="d-flex Transaction justify-content-between">
                          <div className="d-flex">
                            <div className="d-flex flex-column">
                              <div>
                                <h4 className="m-0 p-0">{transaction.description}</h4>
                              </div>
                              <div className="m-0 p-0">
                                <span className="fs-6">Group:</span><h6 className="d-inline m-0 p-0"> {transaction.groupName}</h6>
                              </div>
                            </div>
                            <div className="d-flex flex-column ms-5 align-items-center">
                              <div className="fs-5">
                                {getDateStringFromTimestamp(transaction.createdAt)}
                              </div>
                              <div className="fs-6 fw-bold">
                                {getTimeFromTimestamp(transaction.createdAt)}
                              </div>
                            </div>
                          </div>
                          <div className ="d-flex justify-content-end">
                            {
                              flag ? (
                                <>
                                  <div className="d-flex flex-column mx-3 align-items-center">
                                    <div className="TransactionAmount">
                                      {transaction.amount}
                                    </div>
                                    <div className="TransactionText">
                                      You Paid
                                    </div>
                                  </div>
                                  <div className="d-flex flex-column mx-3 me-5 align-items-center">
                                    <div className="TransactionAmount">
                                      {transaction.amount}
                                    </div>
                                    <div className="TransactionText">
                                      You Paid
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <div className="d-flex">
                                  <div className="d-flex flex-column mx-3 align-items-center">
                                    <div className="TransactionAmount">
                                      {youOwe}
                                    </div>
                                    <div className="TransactionText">
                                      {whoPaid} Paid
                                    </div>
                                  </div>
                                  <div className="d-flex flex-column mx-3 me-5 align-items-center">
                                    <div className="TransactionAmount">
                                      {youOwe}
                                    </div>
                                    <div className="TransactionText">
                                      {whoPaid} Lent You
                                    </div>
                                  </div>
                                </div>
                              )
                            }
                          </div>
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
