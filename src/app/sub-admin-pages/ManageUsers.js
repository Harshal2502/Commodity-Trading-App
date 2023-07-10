import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ADMIN_USERS, DELETE_USER } from '../../utils/API';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageUsers = () => {

  const { username } = useSelector((state) => {
    if (!state) {
      return {
        username: null
      };
    }
    return {
      username: state.username
    };
  });

  const [userArray, setUserArray] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await ADMIN_USERS(username);
    console.log(res)
    setUserArray(res.users);
  }

  const suspendUser = async (user) => {
    const consent = window.confirm("are you sure want to suspend " + user + "?");
    if (consent === true) {
      const res = await DELETE_USER(username, user);
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
      });

      fetchUsers();
    }
  }

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> User Management </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                User Management
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Manage Your Users
            </li>
          </ol>
        </nav>
      </div>

      <div className="card-body">
        <form className="form-inline">
          <Link to="/master_spa/add_user" className="btn btn-gradient-primary mb-2">
            <i className="mdi mdi-account-plus"></i> ADD USER
          </Link>
        </form>
      </div>


      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Users List (0)</h4>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th> UserCode </th>
                      <th> Name </th>
                      <th> Reg. Date </th>
                      <th> MCX Allow </th>
                      <th> FONSE Allow </th>
                      <th> NFO-BKRG </th>
                      <th> MCX-BKRG </th>
                      <th> Upper-Limit </th>
                      <th> Margin-Limit(x) </th>
                      <th> Edit User </th>
                      <th> Delete User </th>
                    </tr>
                  </thead>
                  {userArray?.map((entry) => {
                    const date = new Date(entry.createdat);
                    const formattedDate = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`;
                    const formattedTime = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;

                    return (
                      <tbody>
                        <tr>
                          <td>{entry.username}</td>
                          <td>{entry.fullname}</td>
                          <td>{formattedDate} ({formattedTime})</td>
                          <td>{entry.assetoptions.MCX_allow ? "YES" : "No"}</td>
                          <td>{entry.assetoptions.FONSE_allow ? "YES" : "No"}</td>
                          <td>{entry.assetoptions.brokereage_NFO}</td>
                          <td>{entry.assetoptions.brokereage_MCX}</td>
                          <td>{entry.assetoptions.profit_limit}</td>
                          <td>{entry.assetoptions.margin_limit}</td>
                          <td>
                            <i
                              className="mdi mdi-pencil-box"
                              style={{ fontSize: 'large' }}
                            ></i>
                          </td>
                          <td>
                            <button className='btn btn-primary' onClick={() => { suspendUser(entry.username) }}>Suspend</button>
                          </td>
                        </tr>
                      </tbody>
                    )
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ManageUsers;
