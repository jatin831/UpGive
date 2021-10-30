import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import IconButton from "@material-ui/core/IconButton";
import "./header.css";
import Avatar from "@material-ui/core/Avatar";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  window.onscroll = () => {
    if (window.scrollY) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  const ConditionalBtn = () => {
    if (false) {
      return (
        <li className="nav-item text-start">
          <UncontrolledDropdown nav className="p-0">
            <DropdownToggle nav caret className="py-0">
              <div className="class-avatar pe-2">
                <Avatar style={{ height: "35px", width: "35px" }}>S</Avatar>
              </div>
            </DropdownToggle>
            <DropdownMenu className="my-0 py-0" right>
              <DropdownItem className="my-0 ml-0 pl-3">
                <div
                  className="py-1 comp-nav mx-1 text-secondary fw-500"
                  disabled
                >
                  Sarthak
                </div>
              </DropdownItem>
              <DropdownItem className="my-0 ml-0 pl-3">
                <div
                  className="py-1 comp-nav mx-1 text-secondary fw-500"
                  disabled
                >
                  sarthakjain15.sj@gami.com
                </div>
              </DropdownItem>
              <DropdownItem className="my-0 ml-0 pl-3" divider />
              <DropdownItem
                className="my-0 ml-0 pl-3"
                onClick={() => {
                  console.log("Log out");
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
          <button className="login-btn">Login</button>
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
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <IconButton>
                <MenuRoundedIcon />
              </IconButton>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
                <ConditionalBtn />
              </ul>
            </div>
          </>
        </div>
      </nav>
    </>
  );
};

export default Header;
