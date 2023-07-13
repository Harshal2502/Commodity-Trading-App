import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './App.scss';
import AppRoutes from './AppRoutes';
import Navbar from './shared/Navbar';
import Sidebar from './shared/Sidebar';
import SubadminSidebar from './shared/subadminSidebar';
import SuperadminSidebar from './shared/SSidebar';
import SettingsPanel from './shared/SettingsPanel';
import Footer from './shared/Footer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { ToastContainer } from 'react-toastify';
import MSidebar from './shared/MSidebar';
import './user-pages/SQTable.css'

const App = () => {
  const location = useLocation();
  const [isFullPageLayout, setIsFullPageLayout] = useState(false);
  const [isSubadmin, setIsSubadmin] = useState(false);
  const [isSuperadmin, setIsSuperadmin] = useState(false);
  const [isMaster, setIsMaster] = useState(false);

  useEffect(() => {
    onRouteChanged();
  }, [location]);

  const onRouteChanged = () => {
    const fullPageLayoutRoutes = [
      '/login',
      '/master_login',
      '/supermaster_login',
      '/admin_login',
      '/user-pages/lockscreen',
      '/error-pages/error-404',
      '/error-pages/error-500',
      '/general-pages/landing-page',
    ];

    const subadminRoutes = [
      '/master_login',
      '/master_spa/loaded',
      '/master_spa/marketwatch',
      '/master_spa/orderbook',
      '/master_spa/portfolio',
      '/master_spa/notifications',
      '/master_spa/account',
      '/master_spa/transaction',
      '/master_spa/backoffice',
      '/master_spa/history',
      '/master_spa/manage_users',
      '/master_spa/add_user',
      '/master_spa/edituser',
      '/master_spa/invoice',
      '/master_spa/summary',
      '/master_spa/settings',
      '/master_spa/edituser',
    ];

    const superadminRoutes = [
      '/supermaster_login',
      '/supermaster_main/loaded',
      '/supermaster_main/marketwatch',
      '/supermaster_main/orderbook',
      '/supermaster_main/portfolio',
      '/supermaster_main/notifications',
      '/supermaster_main/account',
      '/supermaster_main/transaction',
      '/supermaster_main/backoffice',
      '/supermaster_main/history',
      '/supermaster_main/manage_users',
      '/supermaster_main/manage_admin',
      '/supermaster_main/add_user',
      '/supermaster_main/add_admin',
      '/supermaster_main/invoice',
      '/supermaster_main/summary',
      '/supermaster_main/manageorders',
      '/supermaster_main/settings',
    ];

    const masterRoutes = [
      '/admin_login',
      '/admin_admin/loaded',
      '/admin_admin/marketwatch',
      '/admin_admin/orderbook',
      '/admin_admin/portfolio',
      '/admin_admin/notifications',
      '/admin_admin/account',
      '/admin_admin/transaction',
      '/admin_admin/backoffice',
      '/admin_admin/history',
      '/admin_admin/manage_users',
      '/admin_admin/manage_masters',
      '/admin_admin/manage_supermasters',
      '/admin_admin/add_user',
      '/admin_admin/edituser',
      '/admin_admin/add_master',
      '/admin_admin/add_supermaster',
      '/admin_admin/invoice',
      '/admin_admin/summary',
      '/admin_admin/manageorders',
      '/admin_admin/settings',
    ];


    if (fullPageLayoutRoutes.includes(location.pathname)) {
      setIsFullPageLayout(true);
      setIsSubadmin(false);
      setIsSuperadmin(false);
      setIsMaster(false);
      document.querySelector('.page-body-wrapper').classList.add('full-page-wrapper');
    } else if (subadminRoutes.includes(location.pathname)) {
      setIsFullPageLayout(false);
      setIsSubadmin(true);
      setIsSuperadmin(false);
      setIsMaster(false);
      document.querySelector('.page-body-wrapper').classList.remove('full-page-wrapper');
    } else if (superadminRoutes.includes(location.pathname)) {
      setIsFullPageLayout(false);
      setIsSubadmin(false);
      setIsSuperadmin(true);
      setIsMaster(false);
      document.querySelector('.page-body-wrapper').classList.remove('full-page-wrapper');
    } else if (masterRoutes.includes(location.pathname)) {
      setIsFullPageLayout(false);
      setIsSubadmin(false);
      setIsSuperadmin(false);
      setIsMaster(true);
      document.querySelector('.page-body-wrapper').classList.remove('full-page-wrapper');
    } else {
      setIsFullPageLayout(false);
      setIsSubadmin(false);
      setIsSuperadmin(false);
      setIsMaster(false);
      document.querySelector('.page-body-wrapper').classList.remove('full-page-wrapper');
    }
  };

  let navbarComponent = !isFullPageLayout ? <Navbar /> : null;
  let sidebarComponent = !isFullPageLayout ? (
    isSubadmin ? <SubadminSidebar /> : isSuperadmin ? <SuperadminSidebar /> : isMaster ? <MSidebar /> : <Sidebar />
  ) : null;
  let SettingsPanelComponent = !isFullPageLayout ? <SettingsPanel /> : null;
  let footerComponent = !isFullPageLayout ? <Footer /> : null;

  return (
    <Provider store={store}>
      <div className="container-scroller">
        {navbarComponent}
        <div className="container-fluid page-body-wrapper">
          {sidebarComponent}
          <div className="main-panel">
            <div className="content-wrapper">
              <AppRoutes />
              {SettingsPanelComponent}
            </div>
            {footerComponent}
          </div>
        </div>
        <ToastContainer />
      </div>
    </Provider>
  );
};

export default App;
