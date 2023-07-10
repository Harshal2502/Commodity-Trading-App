import React, { useEffect, useState } from 'react'
import { ADMININFO, ADMIN_USERS, GET_ACCOUNT_CONTENT } from '../../utils/API';
import { useSelector } from 'react-redux';

export function Accounts() {

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

  const [userInfo, setUserInfo] = useState();
  const [clientArray, setClientArray] = useState();
  const [clientItem, setclientItem] = useState();
  const [accountContent, setAccountContent] = useState();

  useEffect(() => {
    getUserInfo();
    getAccountContent();
  }, []);

  const getUserInfo = async () => {
    const res = await ADMININFO(username);
    setUserInfo(res)
  }

  const getAccountContent = async () => {
    const res = await GET_ACCOUNT_CONTENT(username);
    console.log(res)
    setAccountContent(res);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await ADMIN_USERS(username);
    setClientArray(res.users);
  }

  const handleClientChange = (e) => {
    setclientItem(e.target.value);
  }

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> Account  </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Account </a></li>
            <li className="breadcrumb-item active" aria-current="page">Your Account Details</li>
          </ol>
        </nav>
      </div>

      <div className="col-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <form className="form-inline">

              <select class="form-control mb-2 mr-sm-2 col-md-10 col-lg-6 col-xl-9" onChange={handleClientChange} id="subadmin_place_order_usercode"  >
                <option value="all" selected disabled>Clients (All)</option>
                {clientArray?.map((entry) => {

                  return (
                    <option value={entry.username}>{entry.username}</option>
                  )
                })}
              </select>
              <button type="submit" className="btn btn-gradient-primary mb-2">Show</button>
            </form>
          </div>
        </div>
      </div>
      <div className="row">

        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Account (0)</h4>

              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th> Payee Name </th>
                      <th> Type </th>
                      <th> Date </th>
                      <th> Amount </th>


                    </tr>
                  </thead>
                  <tbody>
                    {accountContent ? accountContent.map((entry) => {

                      const dateObj = new Date(entry.createdAt);

                      const day = dateObj.getDate();
                      const month = dateObj.toLocaleString('default', { month: 'short' }).toUpperCase();
                      const year = dateObj.getFullYear();

                      const formattedDate = `${day}${month}${year}`;

                      return (
                        <>
                          <tr>
                            <td> {entry?.payment_events?.payeename} </td>
                            <td> {entry?.payment_events?.p_type} </td>
                            <td> {formattedDate} </td>
                            <td> {entry?.payment_events?.price} </td>
                          </tr>
                        </>
                      )
                    }) :
                      <tr>
                        <td>-</td>
                        <td>-</td>
                        <td colSpan="4">Nothing to see here yet!</td>
                      </tr>
                    }

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>


        <div className="col-12 grid-margin stretch-card" style={{ marginBottom: 0 }}>
          <div className="card btn btn-gradient-dark">
            <div className="card-body text-center" style={{ paddingBottom: 0, paddingTop: "1rem", display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
              <div>
                <span >Virtual Balance</span>
                <h4 >{userInfo?.balance?.virtualbalance}</h4>
              </div>
              <div>
                <span >Cash Balance</span>
                <h4 >{userInfo?.balance?.cashbalance}</h4>
              </div>
            </div>

          </div>
        </div>
        <div className="col-12 grid-margin stretch-card">
          <div className="card btn btn-gradient-dark">
            <div style={{ paddingTop: 0, paddingBottom: "1rem" }} className="card-body text-center">
              <span > Available Balance </span>
              <h4 >{userInfo?.balance?.availablebalance}</h4>
            </div>

          </div>
        </div>




      </div>
    </div>
  )
}

export default Accounts;
