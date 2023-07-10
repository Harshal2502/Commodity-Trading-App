import React, { Component } from 'react'
import { GET_ACCOUNT_CONTENT, USERINFO } from '../../utils/API'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';

export const Account = () => {

  let c_bal = 0;
  let v_bal = 0;

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
  const [accountContent, setAccountContent] = useState();

  useEffect(() => {
    getUserInfo();
    getAccountContent();
  }, []);

  const getUserInfo = async () => {
    const res = await USERINFO(username);
    setUserInfo(res)
  }

  const getAccountContent = async () => {
    const res = await GET_ACCOUNT_CONTENT(username);
    setAccountContent(res)
  }

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> Account</h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Account</a></li>
            <li className="breadcrumb-item active" aria-current="page">Your Account Details</li>
          </ol>
        </nav>
      </div>
      <div className="row">

        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Account ({accountContent?.length})</h4>

              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>

                      <th> Date </th>
                      <th> Type </th>
                      <th> Detail </th>
                      <th> Amount </th>


                    </tr>
                  </thead>
                  <tbody>
                    {accountContent?.length > 0 ? accountContent.map((entry) => {

                      if (entry?.payment_events?.p_type === "cash_deposit") c_bal = c_bal + entry?.payment_events?.price;
                      if (entry?.payment_events?.p_type === "virtual_deposit") v_bal = v_bal + entry?.payment_events?.price;
                      const dateObj = new Date(entry.createdAt);

                      const day = dateObj.getDate();
                      const month = dateObj.toLocaleString('default', { month: 'short' }).toUpperCase();
                      const year = dateObj.getFullYear();

                      const formattedDate = `${day}${month}${year}`;

                      return (
                        <>
                          <tr>
                            <td> {formattedDate} </td>
                            <td> {entry?.payment_events?.type} </td>
                            <td> {entry?.payment_events?.p_type} </td>
                            <td> {entry?.payment_events?.price.toFixed(2)} </td>
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
                <h4 >{v_bal.toFixed(2)}</h4>
              </div>
              <div>
                <span >Cash Balance</span>
                <h4 >{c_bal.toFixed(2)}</h4>
              </div>
            </div>

          </div>
        </div>
        <div className="col-12 grid-margin stretch-card">
          <div className="card btn btn-gradient-dark">
            <div style={{ paddingTop: 0, paddingBottom: "1rem" }} className="card-body text-center">
              <span > Available Balance </span>
              <h4 >{(v_bal + c_bal).toFixed(2)}</h4>
            </div>

          </div>
        </div>




      </div>
    </div>
  )
}

export default Account
