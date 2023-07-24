import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ADMIN_USERS, DELETE_ADMIN, DELETE_USER, SUPERADMIN_ADMINS } from '../../utils/API';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageAdmin = () => {

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
    const res = await SUPERADMIN_ADMINS(username);
    console.log(res)
    setUserArray(res.admins);
  }

  const suspendUser = async (user) => {
    const consent = window.confirm("are you sure want to suspend " + user + "?");
    if (consent === true) {
      const res = await DELETE_ADMIN(username, user);
      toast.warning(res.message, {
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
        <h3 className="page-title"> Master Management </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                Master Management
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Manage Your Masters
            </li>
          </ol>
        </nav>
      </div>

      <div className="card-body">
        <form className="form-inline">
          <Link to="/admin_admin/add_master" className="btn btn-gradient-primary mb-2">
            <i className="mdi mdi-account-plus"></i> ADD MASTER
          </Link>
        </form>
      </div>


      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Admin List ({userArray?.length})</h4>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th> UserCode </th>
                      <th> Name </th>
                      <th> Reg. Date </th>
                      <th> Edit User </th>
                      <th> Delete User </th>
                    </tr>
                  </thead>


                  {userArray?.map((entry) => {

                    const date = new Date(entry.createdAt);
                    const formattedDate = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`;
                    const formattedTime = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;

                    return (
                      <tbody>
                        <tr>
                          <td>{entry.username}</td>
                          <td>{entry.fullname}</td>
                          <td>{formattedDate} ({formattedTime})</td>
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

export default ManageAdmin;
