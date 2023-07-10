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
              <span className="text-secondary text-small"><Trans>Master</Trans></span>
            </div>
            <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
          </a>
        </li>
        <li className={isPathActive('/master_spa/marketwatch') ? 'nav-item active' : 'nav-item'}>
          <Link className="nav-link" to="/master_spa/marketwatch">
            <span className="menu-title"><Trans>MarketWatch</Trans></span>
            <i className=" mdi mdi-view-module menu-icon"></i>
          </Link>
        </li>
        <li className={isPathActive('/master_spa/orderbook') ? 'nav-item active' : 'nav-item'}>
          <Link className="nav-link" to="/master_spa/orderbook">
            <span className="menu-title"><Trans>Orderbook</Trans></span>
            <i className="mdi mdi-book-multiple menu-icon"></i>
          </Link>
        </li>
        <li className={isPathActive('/master_spa/portfolio') ? 'nav-item active' : 'nav-item'}>
          <Link className="nav-link" to="/master_spa/portfolio">
            <span className="menu-title"><Trans>PortFolio</Trans></span>
            <i className="mdi mdi-bookmark menu-icon"></i>
          </Link>
        </li>
        <li className={isPathActive('/master_spa/manage_users') ? 'nav-item active' : 'nav-item'}>
          <Link className="nav-link" to="/master_spa/manage_users">
            <span className="menu-title"><Trans>Manage Users</Trans></span>
            <i className=" mdi mdi-account-multiple menu-icon"></i>
          </Link>
        </li>
        <li className={isPathActive('/master_spa/transaction') ? 'nav-item active' : 'nav-item'}>
          <Link className="nav-link" to="/master_spa/transaction">
            <span className="menu-title"><Trans>Transaction</Trans></span>
            <i className=" mdi mdi-account-card-details menu-icon"></i>
          </Link>
        </li>
        <li className={isPathActive('/master_spa/account') ? 'nav-item active' : 'nav-item'}>
          <Link className="nav-link" to="/master_spa/account">
            <span className="menu-title"><Trans>Account</Trans></span>
            <i className=" mdi mdi-account-card-details menu-icon"></i>
          </Link>
        </li>
        <li className={isPathActive('/master_spa/notifications') ? 'nav-item active' : 'nav-item'}>
          <Link className="nav-link" to="/master_spa/notifications">
            <span className="menu-title"><Trans>Notifications</Trans></span>
            <i className="mdi mdi-bell menu-icon"></i>
          </Link>
        </li>
        <li className={isPathActive('/master_spa/backoffice') ? 'nav-item active' : 'nav-item'}>
          <Link className="nav-link" to="/master_spa/backoffice">
            <span className="menu-title"><Trans>Backoffice</Trans></span>
            <i className=" mdi mdi-city menu-icon"></i>
          </Link>
        </li>
        <li className={isPathActive('/master_spa/history') ? 'nav-item active' : 'nav-item'}>
          <Link className="nav-link" to="/master_spa/history">
            <span className="menu-title"><Trans>History</Trans></span>
            <i className=" mdi mdi-history menu-icon"></i>
          </Link>
        </li>
        <li className={isPathActive('/master_spa/invoice') ? 'nav-item active' : 'nav-item'}>
          <Link className="nav-link" to="/master_spa/invoice">
            <span className="menu-title"><Trans>Invoice</Trans></span>
            <i className=" mdi mdi-file-document menu-icon"></i>
          </Link>
        </li>
        <li className={isPathActive('/master_spa/summary') ? 'nav-item active' : 'nav-item'}>
          <Link className="nav-link" to="/master_spa/summary">
            <span className="menu-title"><Trans>Summary</Trans></span>
            <i className="mdi mdi-book-open menu-icon"></i>
          </Link>
        </li>
        <li className={isPathActive('/master_spa/settings') ? 'nav-item active' : 'nav-item'}>
          <Link className="nav-link" to="/master_spa/settings">
            <span className="menu-title"><Trans>Settings</Trans></span>
            <i className=" mdi mdi-settings menu-icon"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
