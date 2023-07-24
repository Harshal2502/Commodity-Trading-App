import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap';
import { UPDATE_PASSWORD_ADMIN, UPDATE_PASSWORD_USER } from '../../utils/API';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';


export const Settingss = () => {

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

    if (newpassword !== confirmpassword) {
      toast.error("Passwords mismatched!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
      });
      return;
    }

    // Cannot POST /api/user/admin/UpdateAdminInfo

    const res = await UPDATE_PASSWORD_ADMIN(username, oldpassword, newpassword);
    console.log(res);

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
              <h4 className="card-title">Set MCX Fix Brokerage For (all)</h4>
              <p className="card-description"> </p>
              <form className="form-inline">

                <select class="form-control mb-2 mr-sm-2 col-md-10 col-lg-6 col-xl-9" >

                  <option value="all" selected="">Clients (All)</option>
                  <option value="democ">democ</option>
                  <option value="haresh123">haresh123</option>
                  <option value="abc555">abc555</option>
                  <option value="ashok">ashok</option>
                  <option value="miraj022">miraj022</option>
                  <option value="ad01">ad01</option>
                  <option value="ad02">ad02</option>
                  <option value="demom">demom</option>
                  <option value="mjr">mjr</option>
                  <option value="a332211">a332211</option>
                  <option value="demorj01">demorj01</option>
                  <option value="ravi">ravi</option>
                  <option value="vk90">vk90</option>
                  <option value="sam123">sam123</option>

                </select>
                <button type="submit" className="btn btn-gradient-primary mb-2">Show</button>
              </form>





            </div>


            <div className="card-body">
              <h4 className="card-title">Set brokerage For MCX</h4>
              <p className="card-description"> </p>
              <nav class="nav nav-tabs" role="tablist">
                <a href="#" role="tab" data-rb-event-key="home" id="uncontrolled-tab-example-tab-home" aria-controls="uncontrolled-tab-example-tabpane-home" aria-selected="false" class="nav-item nav-link" tabindex="-1">MCX
                </a>
              </nav>

              <div className="row">
                <div className="col-lg-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">

                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th> Symbol </th>
                              <th> Fix-Brokerage </th>
                            </tr>
                          </thead>
                          <tbody>

                            <tr>
                              <td className="py-1"> SILVER</td>
                              <td><input class="text-center" type="number" value="0" placeholder="Enter-Fix-Brokerage" id="fix_brkg_mcx_SILVER" /></td>
                            </tr>
                            <tr>
                              <td className="py-1">SILVERM</td>
                              <td><input class="text-center" type="number" value="0" placeholder="Enter-Fix-Brokerage" id="fix_brkg_mcx_SILVERM" /></td>

                            </tr>
                            <tr>
                              <td className="py-1">SILVERMIC</td><td><input class="text-center" type="number" value="0" placeholder="Enter-Fix-Brokerage" id="fix_brkg_mcx_SILVERMIC" /></td></tr>
                            <tr><td className="py-1">GOLD</td><td><input class="text-center" type="number" value="0" placeholder="Enter-Fix-Brokerage" id="fix_brkg_mcx_GOLD" /></td></tr>
                            <tr><td>GOLDM</td><td><input class="text-center" type="number" value="0" placeholder="Enter-Fix-Brokerage" id="fix_brkg_mcx_GOLDM" /></td></tr>
                            <tr><td>GOLDMIC</td><td><input class="text-center" type="number" value="0" placeholder="Enter-Fix-Brokerage" id="fix_brkg_mcx_GOLDMIC" /></td></tr>
                            <tr><td>COPPER</td><td><input class="text-center" type="number" value="0" placeholder="Enter-Fix-Brokerage" id="fix_brkg_mcx_COPPER" /></td></tr>
                            <tr><td>COPPERMIC</td><td><input class="text-center" type="number" value="0" placeholder="Enter-Fix-Brokerage" id="fix_brkg_mcx_COPPERMIC" /></td></tr>
                            <tr><td>LEAD</td><td><input class="text-center" type="number" value="0" placeholder="Enter-Fix-Brokerage" id="fix_brkg_mcx_LEAD" /></td></tr>
                            <tr><td>LEADMIC</td><td><input class="text-center" type="number" value="0" placeholder="Enter-Fix-Brokerage" id="fix_brkg_mcx_LEADMIC" /></td></tr>
                            <tr><td>ZINC</td><td><input class="text-center" type="number" value="0" placeholder="Enter-Fix-Brokerage" id="fix_brkg_mcx_ZINC" /></td></tr>
                            <tr><td>ZINCMIC</td><td><input class="text-center" type="number" value="0" placeholder="Enter-Fix-Brokerage" id="fix_brkg_mcx_ZINCMIC" /></td></tr>
                            <tr><td>NATURALGAS</td><td><input class="text-center" type="number" value="0" placeholder="Enter-Fix-Brokerage" id="fix_brkg_mcx_NATURALGAS" /></td></tr>
                            <tr><td>NATURALGASMIC</td><td><input class="text-center" type="number" value="0" placeholder="Enter-Fix-Brokerage" id="fix_brkg_mcx_NATURALGASMIC" /></td></tr>
                            <tr><td>CRUDEOIL</td><td><input class="text-center" type="number" value="0" placeholder="Enter-Fix-Brokerage" id="fix_brkg_mcx_CRUDEOIL" /></td></tr>
                            <tr><td>CRUDEOILMIC</td><td><input class="text-center" type="number" value="0" placeholder="Enter-Fix-Brokerage" id="fix_brkg_mcx_CRUDEOILMIC" /></td></tr>

                          </tbody>
                        </table>
                        <section class="text-right">
                          <button class="btn btn-primary" onclick="save_fix_brkg_mcx();">SAVE CHANGES</button>
                        </section>

                      </div>
                    </div>
                  </div>
                </div>
              </div>







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




                <button onClick={(e) => handlePasswordSave(e)} className="btn btn-gradient-primary mr-2">Save New Password</button>
                {/* <button className="btn btn-light">Cancel</button> */}
              </form>
            </div>
          </div>
        </div>










      </div>
    </div>
  )
}

export default Settingss
