import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Trans } from "react-i18next";
import {
  ADMININFO,
  GETALL_PLACED_ORDER_USER,
  GET_PORTFOLIO_SINGLEUSER,
  LOGOUT,
  USERINFO
} from "../../utils/API";
import { useSelector, useDispatch } from "react-redux";
import {
  setAccessrole,
  setFullname,
  setUsername,
} from "../../redux/action/action";

const Navbar = () => {
  const dispatch = useDispatch();

  const { username, accessrole } = useSelector((state) => {
    if (!state) {
      return {
        username: null,
        accessrole: null,
      };
    }
    return {
      username: state.username,
      accessrole: state.accessrole,
    };
  });

  const [userInfo, setUserInfo] = useState();
  const [margin, setMargin] = useState(0);
  const [PL, setPL] = useState(0);
  const [total, settotal] = useState(0);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const socket = new WebSocket("ws://52.66.105.29:8020");

    socket.onopen = () => {
      console.log("Balance Connection Established");
      socket.send(username);
    };

    const parseData = (data) => {
      try {
        const parsedData = JSON.parse(`[${data}]`);
        return parsedData;
      } catch (error) {
        console.error("Error parsing data:", error);
        return [];
      }
    };

    socket.onmessage = async (event) => {
      const data = event.data;
      const parsedArray = parseData(data);
      setPL(parsedArray[0]?.weeklyPL);
      setBalance(parsedArray[0]?.availableBalance);
      setMargin(parsedArray[0]?.currentFreeMarginBalance);
    };

    socket.onclose = () => {
      console.log("Balance Connection Closed");
    };

    return () => {
      socket.close();
    };
  }, [username]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        if (accessrole === "admin") {
          const res = await ADMININFO(username);
          setUserInfo(res);
        } else if (accessrole === "user") {
          // const interval = setInterval(() => {
          fetchBalance();
          // }, 1000);

          const res3 = await GETALL_PLACED_ORDER_USER(username);

          if (res3.length !== 0) {
            const result = await GET_PORTFOLIO_SINGLEUSER(username, res3);
            settotal(result.nettotal);
          }

          // return () => {
          //   clearInterval(interval)
          // }
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchUserInfo();
  }, [username, accessrole]);

  const fetchBalance = async () => {
    const res = await USERINFO(username);
    setUserInfo(res);
    // setMargin(res?.balance?.marginbalance);

    // const res2 = await WEEKLY_PL_USER(username);
    // setPL(res2.weeklyPL);
  };

  useEffect(() => {
    dispatch(setFullname(userInfo?.fullname));
  }, [userInfo]);

  const navigate = useNavigate();

  const toggleOffcanvas = () => {
    document.querySelector(".sidebar-offcanvas").classList.toggle("active");
  };

  const toggleRightSidebar = () => {
    document.querySelector(".right-sidebar").classList.toggle("open");
  };

  const loc = window.location.pathname.includes("/subadmin_spa/")
    ? "/subadmin_login"
    : "/login";

  const handleSignout = async (e) => {
    e.preventDefault();

    const res = await LOGOUT();
    dispatch(setUsername(null));
    dispatch(setAccessrole(null));
    navigate(loc);
  };

  return (
    <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <button
        className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
        type="button"
        onClick={toggleOffcanvas}
      >
        <span className="mdi mdi-menu" style={{ color: "white" }}></span>
      </button>
      <div
        className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center"
        style={{ zIndex: "11122" }}
      >
        <Link
          className="navbar-brand brand-logo"
          to={accessrole === "admin" ? "/subadmin_spa/loaded" : "/loaded"}
          style={{ zIndex: "11122" }}
        >
          <img
            style={{
              width: "15rem",
              height: "auto",
              margin: "auto",
              verticalAlign: "middle",
              position: "relative",
              top: "8px",
              zIndex: "11122",
            }}
            src={require("../../assets/images/logo.png")}
            alt="logo"
          />
        </Link>
        <Link
          className="navbar-brand brand-logo-mini"
          to={accessrole === "admin" ? "/subadmin_spa/loaded" : "/loaded"}
        >
          <img
            style={{ height: "auto", width: "20rem" }}
            src={require("../../assets/images/logo-mini.png")}
            alt="logo"
          />
        </Link>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-stretch">
        <button
          className="navbar-toggler navbar-toggler align-self-center"
          type="button"
          onClick={() => document.body.classList.toggle("sidebar-icon-only")}
        >
          <span className="mdi mdi-menu"></span>
        </button>
        <div
          className="search-field row d-none d-md-flex"
          style={{ width: "100%" }}
        >
          <div
            className="col-lg-4"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#e9e4e4",
            }}
          >
            <span style={{ color: "#ae66ff", fontWeight: "bold" }}> Weekly PL: </span>&nbsp;<span style={{ fontWeight: "bold" }}> {PL ? PL.toFixed(2) : "0.00"} </span>
          </div>
          <div
            className="col-lg-4"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#e9e4e4",
            }}
          >
            <span style={{ color: "#ae66ff", fontWeight: "bold" }}>Balance: </span>&nbsp;<span style={{ fontWeight: "bold" }}> {(balance) ? (balance + total) : 0} </span>
          </div>
          <div
            className="col-lg-4"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#e9e4e4",
            }}
          >
            <span style={{ color: "#ae66ff", fontWeight: "bold" }}>Margin: </span>&nbsp;<span style={{ fontWeight: "bold" }}> {margin?.toFixed(2) ?? " 0.00"} </span>
          </div>
        </div>
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item">
            <Dropdown alignRight>
              <Dropdown.Toggle className="nav-link count-indicator">
                <i className="mdi mdi-bell-outline"></i>
                <span className="count-symbol bg-danger"></span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu navbar-dropdown preview-list">
                <h6 className="p-3 mb-0">
                  <Trans>Notifications</Trans>
                </h6>
                <div className="dropdown-divider"></div>
                <Dropdown.Item
                  className="dropdown-item preview-item"
                  onClick={(evt) => evt.preventDefault()}
                >
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-primary">
                      <i className="mdi mdi-account-circle"></i>
                    </div>
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject font-weight-normal mb-1">
                      <Trans> [democ] 12-05-2023 (16:02) </Trans>
                    </h6>
                    <p className="text-gray ellipsis mb-0">
                      <Trans>
                        {" "}
                        Your (market) buy order for MCX GOLD|05JUN2023 qty 2 at
                        60615.00 has been Successfully executed on 12-05-2023
                        (16:02) by SELF
                      </Trans>
                    </p>
                  </div>
                </Dropdown.Item>
                <div className="dropdown-divider"></div>
                <h6 className="p-3 mb-0 text-center cursor-pointer">
                  <Trans>See All Notifications</Trans>
                </h6>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li className="nav-item nav-profile">
            <Dropdown alignRight>
              <Dropdown.Toggle className="nav-link">
                <div className="nav-profile-img">
                  <img
                    src={require("../../assets/images/faces/face1.jpg")}
                    alt="user"
                  />
                  <span className="availability-status online"></span>
                </div>
                <div className="nav-profile-text">
                  <p className="mb-1 text-black">
                    <Trans>
                      <span style={{ color: "white" }}>{username}</span>
                    </Trans>
                  </p>
                  <p className="mb-1 text-black">
                    <Trans>
                      <span style={{ color: "lightgreen", fontSize: "smaller" }}>online</span>
                    </Trans>
                  </p>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{ width: "17rem" }}
                className="navbar-dropdown"
              >
                <div className="profile-area">
                  <img
                    style={{ width: "6rem" }}
                    className="profile-img"
                    src={require("../../assets/images/logo-mini.png")}
                    alt="user"
                  />
                  <p className="profile-text">{userInfo?.fullname}</p>
                </div>
                <div className="profile-content">
                  <div className="profile-content-div">
                    <p style={{ fontSize: "small" }}>Weekly P/L</p>
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "large",
                        color: "#000000a1",
                      }}
                    >
                      {PL ? PL.toFixed(2) : "0.00"}
                    </p>
                  </div>
                  <div className="profile-content-div">
                    <p style={{ fontSize: "small" }}>Available Balance</p>
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "large",
                        color: "#000000a1",
                      }}
                    >
                      {(balance) ? (balance + total).toFixed(2) : 0}
                    </p>
                  </div>

                  {accessrole === "user" && (
                    <p
                      style={{
                        fontSize: "smaller",
                        textAlign: "center",
                        marginBottom: "7px",
                      }}
                    >
                      Free-Margin: {margin?.toFixed(2) ?? "0.00"}
                    </p>
                  )}
                </div>

                <div className="profile-button">
                  <div
                    className="btn-1"
                    onClick={(evt) => {
                      evt.preventDefault();
                      if (accessrole === "admin")
                        navigate("/subadmin_spa/settings");
                      else navigate("/settings");
                    }}
                  >
                    <i className="mdi mdi-settings mr-2 text-primary"></i>
                    <Trans>Settings</Trans>
                  </div>
                  <div className="btn-1" onClick={handleSignout}>
                    <i className="mdi mdi-logout mr-2 text-primary"></i>
                    <Trans>Sign out</Trans>
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
