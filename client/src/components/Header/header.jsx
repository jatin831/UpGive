import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import IconButton from "@material-ui/core/IconButton";
import LoginModal from "./loginModals";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT, selectUserData } from "../../reduxSlices/authSlice";
import Avatar from "@material-ui/core/Avatar";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Header = () => {
  const dispatch = useDispatch();
  const [scrolled, setScrolled] = useState(false);
  window.onscroll = () => {
    if (window.scrollY) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  const [show, setShow] = useState(false);
  const toggle = () => setShow((prevState) => !prevState);
  const storeData = useSelector(selectUserData);
  const userName = storeData.userName;
  const token = storeData.token;
  const userEmail = storeData.userEmail;
  const ConditionalBtn = () => {
    if (token) {
      return (
        <li className="nav-item text-start">
          <UncontrolledDropdown nav className="p-0">
            <DropdownToggle nav caret className="py-0">
              <div className="class-avatar pe-2">
                <Avatar
                  style={{
                    height: "35px",
                    width: "35px",
                    color: "black",
                    background: "white",
                  }}
                >
                  {userName?.slice(0, 1).toUpperCase()}
                </Avatar>
              </div>
            </DropdownToggle>
            <DropdownMenu className="my-0 py-0" right>
              <DropdownItem className="my-0 ml-0 pl-3">
                <div
                  className="py-1 comp-nav mx-1 text-secondary fw-500"
                  disabled
                >
                  {userName}
                </div>
              </DropdownItem>
              <DropdownItem className="my-0 ml-0 pl-3">
                <div
                  className="py-1 comp-nav mx-1 text-secondary fw-500"
                  disabled
                >
                  {userEmail}
                </div>
              </DropdownItem>
              <DropdownItem className="my-0 ml-0 pl-3" divider />
              <DropdownItem
                className="my-0 ml-0 pl-3"
                onClick={() => {
                  dispatch(LOGOUT());
                }}
              >
                <Link to="/" className="py-1 mx-1 logout">
                  Logout
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </li>
      );
    } else {
      return (
        <li className="nav-item mx-3">
          <button className="login-btn" onClick={() => setShow(true)}>
            Login
          </button>
        </li>
      );
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <>
            <NavLink to="/" className="navbar-brand ms-5 fw-bold" href="#">
              UpGive
            </NavLink>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
              <ConditionalBtn />
            </ul>
          </>
        </div>
      </nav>
      <LoginModal isModalOpen={show} toggleModal={toggle} setShow={setShow} />
    </>
  );
};

export default Header;
