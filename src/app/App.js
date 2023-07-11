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

const App = () => {
  const location = useLocation();
  const [isFullPageLayout, setIsFullPageLayout] = useState(false);
  const [isSubadmin, setIsSubadmin] = useState(false);
  const [isSuperadmin, setIsSuperadmin] = useState(false);

  useEffect(() => {
    onRouteChanged();
  }, [location]);

  const onRouteChanged = () => {
    const fullPageLayoutRoutes = [
      '/login',
      '/master_login',
      '/supermaster_login',
      '/register',
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
      '/supermaster_main/settings',
    ];


    if (fullPageLayoutRoutes.includes(location.pathname)) {
      setIsFullPageLayout(true);
      setIsSubadmin(false);
      setIsSuperadmin(false);
      document.querySelector('.page-body-wrapper').classList.add('full-page-wrapper');
    } else if (subadminRoutes.includes(location.pathname)) {
      setIsFullPageLayout(false);
      setIsSubadmin(true);
      setIsSuperadmin(false);
      document.querySelector('.page-body-wrapper').classList.remove('full-page-wrapper');
    } else if (superadminRoutes.includes(location.pathname)) {
      setIsFullPageLayout(false);
      setIsSubadmin(false);
      setIsSuperadmin(true);
      document.querySelector('.page-body-wrapper').classList.remove('full-page-wrapper');
    } else {
      setIsFullPageLayout(false);
      setIsSubadmin(false);
      setIsSuperadmin(false);
      document.querySelector('.page-body-wrapper').classList.remove('full-page-wrapper');
    }
  };

  let navbarComponent = !isFullPageLayout ? <Navbar /> : null;
  let sidebarComponent = !isFullPageLayout ? (
    isSubadmin ? <SubadminSidebar /> : isSuperadmin ? <SuperadminSidebar /> : <Sidebar />
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
