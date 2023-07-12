import React, { Suspense, lazy } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import Spinner from '../app/shared/Spinner';
import { RequireAuth } from './shared/RequireAuth';
import { SuperadminAuth } from './shared/SuperadminAuth';
import SuperTransaction from './super-admin-pages/Transaction';
import MasterTransaction from './master-pages/Transaction';
import { MasterAuth } from './shared/MasterAuth';



const Login = lazy(() => import('./user-pages/Login'));
const Dashboard = lazy(() => import('./user-pages/Dashboard'));
const OrderBook = lazy(() => import('./user-pages/OrderBook'));
const PortFolio = lazy(() => import('./user-pages/PortFolio'));
const Notifications = lazy(() => import('./user-pages/Notifications'));
const Account = lazy(() => import('./user-pages/Account'));
const History = lazy(() => import('./user-pages/History'));
const Invoice = lazy(() => import('./user-pages/Invoice'));
const Summary = lazy(() => import('./user-pages/Summary'));
const Settings = lazy(() => import('./user-pages/Settings'));



const Subadmin_Login = lazy(() => import('./sub-admin-pages/Subadmin_Login'));
const OrderBooks = lazy(() => import('./sub-admin-pages/OrderBook'));
const Dashboards = lazy(() => import('./sub-admin-pages/Dashboard'));
const PortFolios = lazy(() => import('./sub-admin-pages/PortFolio'));
const Notificationss = lazy(() => import('./sub-admin-pages/Notifications'));
const Accounts = lazy(() => import('./sub-admin-pages/Account'));
const Transaction = lazy(() => import('./sub-admin-pages/Transaction'));
const Backoffice = lazy(() => import('./sub-admin-pages/Backoffice'));
const Historys = lazy(() => import('./sub-admin-pages/History'));
const ManageUsers = lazy(() => import('./sub-admin-pages/ManageUsers'));
const AddUser = lazy(() => import('./sub-admin-pages/AddUser'));
const Invoices = lazy(() => import('./sub-admin-pages/Invoice'));
const Summarys = lazy(() => import('./sub-admin-pages/Summary'));
const Settingss = lazy(() => import('./sub-admin-pages/Settings'));
const Error404 = lazy(() => import('./error-pages/Error404'));



const Superadmin_Login = lazy(() => import('./super-admin-pages/Superadmin_Login'));
const SuperDashboard = lazy(() => import('./super-admin-pages/Dashboard'));
const SuperOrderBook = lazy(() => import('./super-admin-pages/OrderBook'));
const SuperPortFolio = lazy(() => import('./super-admin-pages/PortFolio'));
const SuperNotifications = lazy(() => import('./super-admin-pages/Notifications'));
const SuperAccount = lazy(() => import('./super-admin-pages/Account'));
const SuperBackoffice = lazy(() => import('./super-admin-pages/Backoffice'));
const SuperHistory = lazy(() => import('./super-admin-pages/History'));
const SuperManageUsers = lazy(() => import('./super-admin-pages/ManageUsers'));
const SuperAddUser = lazy(() => import('./super-admin-pages/AddUser'));
const SuperManageAdmin = lazy(() => import('./super-admin-pages/ManageAdmin'));
const SuperAddAdmin = lazy(() => import('./super-admin-pages/AddAdmin'));
const SuperInvoice = lazy(() => import('./super-admin-pages/Invoice'));
const SuperSummary = lazy(() => import('./super-admin-pages/Summary'));
const SuperSettings = lazy(() => import('./super-admin-pages/Settings'));



const MasterLogin = lazy(() => import('./master-pages/Superadmin_Login'));
const MasterDashboard = lazy(() => import('./master-pages/Dashboard'));
const MasterOrderbook = lazy(() => import('./master-pages/OrderBook'));
const MasterPortFolio = lazy(() => import('./master-pages/PortFolio'));
const MasterNotifications = lazy(() => import('./master-pages/Notifications'));
const MasterAccount = lazy(() => import('./master-pages/Account'));
const MasterBackoffice = lazy(() => import('./master-pages/Backoffice'));
const MasterHistory = lazy(() => import('./master-pages/History'));
const MasterManageUsers = lazy(() => import('./master-pages/ManageUsers'));
const MasterAddUser = lazy(() => import('./master-pages/AddUser'));
const MasterManageAdmin = lazy(() => import('./master-pages/ManageAdmin'));
const MasterAddAdmin = lazy(() => import('./master-pages/AddAdmin'));
const MasterInvoice = lazy(() => import('./master-pages/Invoice'));
const MasterSummary = lazy(() => import('./master-pages/Summary'));
const MasterSettings = lazy(() => import('./master-pages/Settings'));
const ManageSuperadmin = lazy(() => import('./master-pages/ManageSuperadmin'))







const AppRoutes = () => {


  return (


    <Suspense fallback={<Spinner />}>
      <Routes>

        <Route path="/error-pages/error-404" element={<Error404 />} />





        {/* User Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/loaded" element={<RequireAuth><Dashboard /></RequireAuth>} />
        <Route path="/marketwatch" element={<RequireAuth><Dashboard /></RequireAuth>} />
        <Route path="/orderbook" element={<RequireAuth><OrderBook /></RequireAuth>} />
        <Route path="/portfolio" element={<RequireAuth><PortFolio /></RequireAuth>} />
        <Route path="/notifications" element={<RequireAuth><Notifications /></RequireAuth>} />
        <Route path="/account" element={<RequireAuth><Account /></RequireAuth>} />
        <Route path="/history" element={<RequireAuth><History /></RequireAuth>} />
        <Route path="/invoice" element={<RequireAuth><Invoice /></RequireAuth>} />
        <Route path="/summary" element={<RequireAuth><Summary /></RequireAuth>} />
        <Route path="/settings" element={<RequireAuth><Settings /></RequireAuth>} />





        {/* Sub Admin Routes */}
        <Route path="/master_login" element={<Subadmin_Login />} />
        <Route path="/master_spa/loaded" element={<RequireAuth><Dashboards /></RequireAuth>} />
        <Route path="/master_spa/marketwatch" element={<RequireAuth><Dashboards /></RequireAuth>} />
        <Route path="/master_spa/orderbook" element={<RequireAuth><OrderBooks /></RequireAuth>} />
        <Route path="/master_spa/portfolio" element={<RequireAuth><PortFolios /></RequireAuth>} />
        <Route path="/master_spa/notifications" element={<RequireAuth><Notificationss /></RequireAuth>} />
        <Route path="/master_spa/account" element={<RequireAuth><Accounts /></RequireAuth>} />
        <Route path="/master_spa/transaction" element={<RequireAuth><Transaction /></RequireAuth>} />
        <Route path="/master_spa/backoffice" element={<RequireAuth><Backoffice /></RequireAuth>} />
        <Route path="/master_spa/history" element={<RequireAuth><Historys /></RequireAuth>} />
        <Route path="/master_spa/manage_users" element={<RequireAuth><ManageUsers /></RequireAuth>} />
        <Route path="/master_spa/add_user" element={<RequireAuth><AddUser /></RequireAuth>} />
        <Route path="/master_spa/invoice" element={<RequireAuth><Invoices /></RequireAuth>} />
        <Route path="/master_spa/summary" element={<RequireAuth><Summarys /></RequireAuth>} />
        <Route path="/master_spa/settings" element={<RequireAuth><Settingss /></RequireAuth>} />





        {/* Super Admin Routes */}
        <Route path="/supermaster_login" element={<Superadmin_Login />} />
        <Route path="/supermaster_main/loaded" element={<SuperadminAuth><SuperDashboard /></SuperadminAuth>} />
        <Route path="/supermaster_main/marketwatch" element={<SuperadminAuth><SuperDashboard /></SuperadminAuth>} />
        <Route path="/supermaster_main/orderbook" element={<SuperadminAuth><SuperOrderBook /></SuperadminAuth>} />
        <Route path="/supermaster_main/portfolio" element={<SuperadminAuth><SuperPortFolio /></SuperadminAuth>} />
        <Route path="/supermaster_main/notifications" element={<SuperadminAuth><SuperNotifications /></SuperadminAuth>} />
        <Route path="/supermaster_main/transaction" element={<SuperadminAuth><SuperTransaction /></SuperadminAuth>} />
        <Route path="/supermaster_main/account" element={<SuperadminAuth><SuperAccount /></SuperadminAuth>} />
        <Route path="/supermaster_main/backoffice" element={<SuperadminAuth><SuperBackoffice /></SuperadminAuth>} />
        <Route path="/supermaster_main/history" element={<SuperadminAuth><SuperHistory /></SuperadminAuth>} />
        <Route path="/supermaster_main/manage_users" element={<SuperadminAuth><SuperManageUsers /></SuperadminAuth>} />
        <Route path="/supermaster_main/add_user" element={<SuperadminAuth><SuperAddUser /></SuperadminAuth>} />
        <Route path="/supermaster_main/manage_admin" element={<SuperadminAuth><SuperManageAdmin /></SuperadminAuth>} />
        <Route path="/supermaster_main/add_admin" element={<SuperadminAuth><SuperAddAdmin /></SuperadminAuth>} />
        <Route path="/supermaster_main/invoice" element={<SuperadminAuth><SuperInvoice /></SuperadminAuth>} />
        <Route path="/supermaster_main/summary" element={<SuperadminAuth><SuperSummary /></SuperadminAuth>} />
        <Route path="/supermaster_main/settings" element={<SuperadminAuth><SuperSettings /></SuperadminAuth>} />






        {/* Master Routes */}
        <Route path="/admin_login" element={<MasterLogin />} />
        <Route path="/admin_admin/loaded" element={<MasterAuth><MasterDashboard /></MasterAuth>} />
        <Route path="/admin_admin/marketwatch" element={<MasterAuth><MasterDashboard /></MasterAuth>} />
        <Route path="/admin_admin/orderbook" element={<MasterAuth><MasterOrderbook /></MasterAuth>} />
        <Route path="/admin_admin/portfolio" element={<MasterAuth><MasterPortFolio /></MasterAuth>} />
        <Route path="/admin_admin/notifications" element={<MasterAuth><MasterNotifications /></MasterAuth>} />
        <Route path="/admin_admin/transaction" element={<MasterAuth><MasterTransaction /></MasterAuth>} />
        <Route path="/admin_admin/account" element={<MasterAuth><MasterAccount /></MasterAuth>} />
        <Route path="/admin_admin/backoffice" element={<MasterAuth><MasterBackoffice /></MasterAuth>} />
        <Route path="/admin_admin/history" element={<MasterAuth><MasterHistory /></MasterAuth>} />
        <Route path="/admin_admin/manage_users" element={<MasterAuth><MasterManageUsers /></MasterAuth>} />
        <Route path="/admin_admin/manage_masters" element={<MasterAuth><MasterManageAdmin /></MasterAuth>} />
        <Route path="/admin_admin/manage_supermasters" element={<MasterAuth><ManageSuperadmin /></MasterAuth>} />
        <Route path="/admin_admin/add_user" element={<MasterAuth><MasterAddUser /></MasterAuth>} />
        <Route path="/admin_admin/add_master" element={<MasterAuth><MasterAddAdmin /></MasterAuth>} />
        <Route path="/admin_admin/add_supermaster" element={<MasterAuth><MasterAddAdmin /></MasterAuth>} />
        <Route path="/admin_admin/invoice" element={<MasterAuth><MasterInvoice /></MasterAuth>} />
        <Route path="/admin_admin/summary" element={<MasterAuth><MasterSummary /></MasterAuth>} />
        <Route path="/admin_admin/settings" element={<MasterAuth><MasterSettings /></MasterAuth>} />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Suspense>



  );
};

export default AppRoutes;
