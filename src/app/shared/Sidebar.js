import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Trans } from 'react-i18next';
import { useSelector } from 'react-redux';

const Sidebar = () => {

  const { username, accessrole } = useSelector((state) => {
    if (!state) {
      return {
        username: null,
        accessrole: null
      };
    }
    return {
      username: state.username,
      accessrole: state.accessrole
    };
  });

  const location = useLocation();

  useEffect(() => {
    onRouteChanged();

    const body = document.querySelector('body');
    const navItems = document.querySelectorAll('.sidebar .nav-item');

    const handleMouseOver = (el) => {
      if (body.classList.contains('sidebar-icon-only')) {
        el.classList.add('hover-open');
      }
    };

    const handleMouseOut = (el) => {
      if (body.classList.contains('sidebar-icon-only')) {
        el.classList.remove('hover-open');
      }
    };

    navItems.forEach((el) => {
      el.addEventListener('mouseover', () => handleMouseOver(el));
      el.addEventListener('mouseout', () => handleMouseOut(el));
    });

    return () => {
      navItems.forEach((el) => {
        el.removeEventListener('mouseover', () => handleMouseOver(el));
        el.removeEventListener('mouseout', () => handleMouseOut(el));
      });
    };
  }, [location]);

  const onRouteChanged = () => {
    document.querySelector('#sidebar').classList.remove('active');

    const dropdownPaths = [
      { path: '/apps', state: 'appsMenuOpen' },
      { path: '/basic-ui', state: 'basicUiMenuOpen' },
      { path: '/advanced-ui', state: 'advancedUiMenuOpen' },
      { path: '/form-elements', state: 'formElementsMenuOpen' },
      { path: '/tables', state: 'tablesMenuOpen' },
      { path: '/maps', state: 'mapsMenuOpen' },
      { path: '/icons', state: 'iconsMenuOpen' },
      { path: '/charts', state: 'chartsMenuOpen' },
      { path: '/user-pages', state: 'userPagesMenuOpen' },
      { path: '/error-pages', state: 'errorPagesMenuOpen' },
      { path: '/general-pages', state: 'generalPagesMenuOpen' },
      { path: '/ecommerce', state: 'ecommercePagesMenuOpen' },
    ];

    dropdownPaths.forEach((obj) => {
      if (isPathActive(obj.path)) {
        setState((prevState) => ({ ...prevState, [obj.state]: true }));
      }
    });
  };

  const isPathActive = (path) => {
    return location.pathname.startsWith(path);
  };

  const [state, setState] = React.useState({});

  return (
    <nav className="sidebar sidebar-offcanvas" style={{zIndex:'111'}}   id="sidebar">
      <ul className="nav">
        <li className="nav-item nav-profile">
          <a href="!#" className="nav-link" onClick={(evt) => evt.preventDefault()}>
            <div className="nav-profile-image">
              <img src={require("../../assets/images/faces/face1.jpg")} alt="profile" />
              <span className="login-status online"></span> {/* change to offline or busy as needed */}
            </div>
            <div className="nav-profile-text">
              <span className="font-weight-bold mb-2"><Trans>{username}</Trans></span>
              <span className="text-secondary text-small"><Trans>{accessrole}</Trans></span>
            </div>
            <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
          </a>
        </li>
        <li className={isPathActive('/marketwatch') ? 'nav-item active' : 'nav-item'}>
          <Link className="nav-link" to="/marketwatch">
            <i style={{marginLeft: "unset", marginRight: "7px"}} className=" mdi mdi-view-module menu-icon"></i>
            <span className="menu-title"><Trans>MarketWatch</Trans></span>
          </Link>
        </li>
        <li className={isPathActive('/orderbook') ? 'nav-item active' : 'nav-item'}>
          <Link className="nav-link" to="/orderbook">
            <i style={{marginLeft: "unset", marginRight: "7px"}} className="mdi mdi-book-multiple menu-icon"></i>
            <span className="menu-title"><Trans>Orderbook</Trans></span>
          </Link>
        </li>
        <li className={isPathActive('/portfolio') ? 'nav-item active' : 'nav-item'}>
          <Link className="nav-link" to="/portfolio">
            <i style={{marginLeft: "unset", marginRight: "7px"}} className="mdi mdi-bookmark menu-icon"></i>
            <span className="menu-title"><Trans>PortFolio</Trans></span>
          </Link>
        </li>
        <li className={isPathActive('/notifications') ? 'nav-item active' : 'nav-item'}>
          <Link className="nav-link" to="/notifications">
            <i style={{marginLeft: "unset", marginRight: "7px"}} className="mdi mdi-bell menu-icon"></i>
            <span className="menu-title"><Trans>Notifications</Trans></span>
          </Link>
        </li>
        <li className={isPathActive('/account') ? 'nav-item active' : 'nav-item'}>
          <Link className="nav-link" to="/account">
            <i style={{marginLeft: "unset", marginRight: "7px"}} className=" mdi mdi-account-card-details menu-icon"></i>
            <span className="menu-title"><Trans>Account</Trans></span>
          </Link>
        </li>
        <li className={isPathActive('/history') ? 'nav-item active' : 'nav-item'}>
          <Link className="nav-link" to="/history">
            <i style={{marginLeft: "unset", marginRight: "7px"}} className=" mdi mdi-history menu-icon"></i>
            <span className="menu-title"><Trans>History</Trans></span>
          </Link>
        </li>
        <li className={isPathActive('/invoice') ? 'nav-item active' : 'nav-item'}>
          <Link className="nav-link" to="/invoice">
            <i style={{marginLeft: "unset", marginRight: "7px"}} className=" mdi mdi-file-document menu-icon"></i>
            <span className="menu-title"><Trans>Invoice</Trans></span>
          </Link>
        </li>
        <li className={isPathActive('/summary') ? 'nav-item active' : 'nav-item'}>
          <Link className="nav-link" to="/summary">
            <i style={{marginLeft: "unset", marginRight: "7px"}} className="mdi mdi-book-open menu-icon"></i>
            <span className="menu-title"><Trans>Summary</Trans></span>
          </Link>
        </li>
        <li className={isPathActive('/settings') ? 'nav-item active' : 'nav-item'}>
          <Link className="nav-link" to="/settings">
            <i style={{marginLeft: "unset", marginRight: "7px"}} className=" mdi mdi-settings menu-icon"></i>
            <span className="menu-title"><Trans>Settings</Trans></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
