import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import { UPDATE_PASSWORD_USER } from '../../utils/API';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Settings = () => {

  const [loader, setLoader] = useState(false);

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

  const [oldpassword, setOldpassword] = useState()
  const [newpassword, setNewpassword] = useState()
  const [confirmpassword, setConfirmpassword] = useState()

  const handlePasswordSave = async (e) => {


    e.preventDefault();
    setLoader(true);

    if (newpassword !== confirmpassword) {
      toast.warning("Password mismatched", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
      });
      setLoader(false);
      return;
    }

    const res = await UPDATE_PASSWORD_USER(username, oldpassword, newpassword);
    toast.info(res.message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      hideProgressBar: false,
      pauseOnHover: true,
    });
    setLoader(false);
  }

  return (
    <div>



      <div className="page-header">
        <h3 className="page-title"> Settings  </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Settings</a></li>
            <li className="breadcrumb-item active" aria-current="page">Your Account Settings..</li>
          </ol>
        </nav>
      </div>

      {/* <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">                
                <form className="form-inline">                           
                             
                  <select class="form-control mb-2 mr-sm-2" >
                    <option selected disabled>Please Select</option>
                    <option vaue="order">Order Status (All)</option>
                    <option value="pending">Pending</option>
                    <option value="excuted">Excuted</option>
                    <option value="cancelled">Cancelled</option>
                    <option value="expired">Expired</option>
                    </select>
                 <button type="submit" className="btn btn-gradient-primary mb-2">Show</button>
                </form>
              </div>
            </div>
          </div> */}

      <div className="row">

        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Rearrange Your Profile</h4>
              <p className="card-description"> </p>
              <form className="forms-sample">

                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">  <i className=" mdi mdi-menu menu-icon"></i></span>
                  </div>
                  <Form.Control type="text" className="form-control" placeholder="Finse Nifty" aria-label="Finse Nifty" aria-describedby="basic-addon1" />
                </div>

              </form>
            </div>
          </div>
        </div>

        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Change Your Password</h4>
              <p className="card-description"> </p>
              <form className="forms-sample">
                <Form.Group>
                  <label htmlFor="exampleInputName1">Old Password</label>
                  <Form.Control onChange={(e) => setOldpassword(e.target.value)} type="password" className="form-control" id="old _password" placeholder="Old Password" />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="exampleInputEmail3">New Password</label>
                  <Form.Control onChange={(e) => setNewpassword(e.target.value)} type="password" className="form-control" id="new_password" placeholder="Set Your New Password Here..." />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="exampleInputPassword4">Confirm Password</label>
                  <Form.Control onChange={(e) => setConfirmpassword(e.target.value)} type="password" className="form-control" id="confirm_password" placeholder="Retype Your New Password Here..." />
                </Form.Group>




                <button type="submit" disabled={loader} onClick={handlePasswordSave} className="btn btn-gradient-primary mr-2">{loader ? <span className='button-loader'></span> : "Save New Password"}</button>
                {/* <button className="btn btn-light">Cancel</button> */}
              </form>
            </div>
          </div>
        </div>










      </div>
    </div>
  )
}

export default Settings
