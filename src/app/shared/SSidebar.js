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
                            <span className="text-secondary text-small"><Trans>Supermaster</Trans></span>
                        </div>
                        <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
                    </a>
                </li>
                <li className={isPathActive('/supermaster_main/marketwatch') ? 'nav-item active' : 'nav-item'}>
                    <Link className="nav-link" to="/supermaster_main/marketwatch">
                        <span className="menu-title"><Trans>MarketWatch</Trans></span>
                        <i className=" mdi mdi-view-module menu-icon"></i>
                    </Link>
                </li>
                <li className={isPathActive('/supermaster_main/orderbook') ? 'nav-item active' : 'nav-item'}>
                    <Link className="nav-link" to="/supermaster_main/orderbook">
                        <span className="menu-title"><Trans>Orderbook</Trans></span>
                        <i className="mdi mdi-book-multiple menu-icon"></i>
                    </Link>
                </li>
                <li className={isPathActive('/supermaster_main/portfolio') ? 'nav-item active' : 'nav-item'}>
                    <Link className="nav-link" to="/supermaster_main/portfolio">
                        <span className="menu-title"><Trans>PortFolio</Trans></span>
                        <i className="mdi mdi-bookmark menu-icon"></i>
                    </Link>
                </li>
                <li className={isPathActive('/supermaster_main/manage_users') ? 'nav-item active' : 'nav-item'}>
                    <Link className="nav-link" to="/supermaster_main/manage_users">
                        <span className="menu-title"><Trans>Manage Users</Trans></span>
                        <i className=" mdi mdi-account-multiple menu-icon"></i>
                    </Link>
                </li>
                <li className={isPathActive('/supermaster_main/manage_admin') ? 'nav-item active' : 'nav-item'}>
                    <Link className="nav-link" to="/supermaster_main/manage_admin">
                        <span className="menu-title"><Trans>Manage Admins</Trans></span>
                        <i className=" mdi mdi-account-multiple menu-icon"></i>
                    </Link>
                </li>
                <li className={isPathActive('/supermaster_main/transaction') ? 'nav-item active' : 'nav-item'}>
                    <Link className="nav-link" to="/supermaster_main/transaction">
                        <span className="menu-title"><Trans>Transaction</Trans></span>
                        <i className=" mdi mdi-account-card-details menu-icon"></i>
                    </Link>
                </li>
                <li className={isPathActive('/supermaster_main/manageorders') ? 'nav-item active' : 'nav-item'}>
                    <Link className="nav-link" to="/supermaster_main/manageorders">
                        <span className="menu-title"><Trans>Manage Orders</Trans></span>
                        <i className=" mdi mdi-account-multiple menu-icon"></i>
                    </Link>
                </li>
                <li className={isPathActive('/supermaster_main/account') ? 'nav-item active' : 'nav-item'}>
                    <Link className="nav-link" to="/supermaster_main/account">
                        <span className="menu-title"><Trans>Account</Trans></span>
                        <i className=" mdi mdi-account-card-details menu-icon"></i>
                    </Link>
                </li>
                <li className={isPathActive('/supermaster_main/notifications') ? 'nav-item active' : 'nav-item'}>
                    <Link className="nav-link" to="/supermaster_main/notifications">
                        <span className="menu-title"><Trans>Notifications</Trans></span>
                        <i className="mdi mdi-bell menu-icon"></i>
                    </Link>
                </li>
                <li className={isPathActive('/supermaster_main/backoffice') ? 'nav-item active' : 'nav-item'}>
                    <Link className="nav-link" to="/supermaster_main/backoffice">
                        <span className="menu-title"><Trans>Backoffice</Trans></span>
                        <i className=" mdi mdi-city menu-icon"></i>
                    </Link>
                </li>
                <li className={isPathActive('/supermaster_main/history') ? 'nav-item active' : 'nav-item'}>
                    <Link className="nav-link" to="/supermaster_main/history">
                        <span className="menu-title"><Trans>History</Trans></span>
                        <i className=" mdi mdi-history menu-icon"></i>
                    </Link>
                </li>
                <li className={isPathActive('/supermaster_main/invoice') ? 'nav-item active' : 'nav-item'}>
                    <Link className="nav-link" to="/supermaster_main/invoice">
                        <span className="menu-title"><Trans>Invoice</Trans></span>
                        <i className=" mdi mdi-file-document menu-icon"></i>
                    </Link>
                </li>
                <li className={isPathActive('/supermaster_main/summary') ? 'nav-item active' : 'nav-item'}>
                    <Link className="nav-link" to="/supermaster_main/summary">
                        <span className="menu-title"><Trans>Summary</Trans></span>
                        <i className="mdi mdi-book-open menu-icon"></i>
                    </Link>
                </li>
                <li className={isPathActive('/supermaster_main/settings') ? 'nav-item active' : 'nav-item'}>
                    <Link className="nav-link" to="/supermaster_main/settings">
                        <span className="menu-title"><Trans>Settings</Trans></span>
                        <i className=" mdi mdi-settings menu-icon"></i>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
