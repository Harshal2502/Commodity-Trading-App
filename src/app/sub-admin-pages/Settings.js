import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap';
import { ADMIN_USERS, UPDATE_BRKG, UPDATE_BRKG_ALLUSERS, UPDATE_PASSWORD_ADMIN, UPDATE_PASSWORD_USER } from '../../utils/API';
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
  const [clientArray, setClientArray] = useState()
  const [clientItem, setClientItem] = useState("all")
  const [fixbrokereage_MCX, setFixbrokereageMCX] = useState({
    SILVER: 0,
    SILVERM: 0,
    SILVERMIC: 0,
    GOLD: 0,
    GOLDM: 0,
    GOLDMIC: 0,
    COPPER: 0,
    COPPERMIC: 0,
    LEAD: 0,
    LEADMIC: 0,
    ZINC: 0,
    ZINCMIC: 0,
    NATURALGAS: 0,
    NATURALGASMIC: 0,
    CRUDEOIL: 0,
    CRUDEOILMIC: 0,
  });

  useEffect(() => {
    fetchUsers();
  }, [username])

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

  const fetchUsers = async () => {
    const res = await ADMIN_USERS(username);
    setClientArray(res.users);
  }

  const handleSave = async () => {
    if (clientItem === "all") {
      const res = await UPDATE_BRKG_ALLUSERS(username, Object.values(fixbrokereage_MCX), Object.values(fixbrokereage_MCX));
      console.log(res);
    }
    else {
      const res = await UPDATE_BRKG(username, clientItem, Object.values(fixbrokereage_MCX), Object.values(fixbrokereage_MCX));
      console.log(res);
    }
  }

  const handleInputChange = (symbol, value) => {

    const parsedValue = parseFloat(value) || 0;

    setFixbrokereageMCX((prevFixbrokereage_MCX) => ({
      ...prevFixbrokereage_MCX,
      [symbol]: parsedValue,
    }));

  };

  return (
    <div>

      <div className="page-header">
        <h3 className="page-title"> Settings </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Settings</a></li>
            <li className="breadcrumb-item active" aria-current="page">Your Account Settings..</li>
          </ol>
        </nav>
      </div>

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

                <select onChange={(e) => setClientItem(e.target.value)} class="form-control mb-2 mr-sm-2 col-md-10 col-lg-6 col-xl-9" >

                  <option value="all" selected="">Clients (All)</option>

                  {clientArray?.map((entry) => {

                    return (
                      <option value={entry.username}>{entry.username}</option>
                    )
                  })}

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

                            <tr><td>SILVER</td><td>        <input class="text-center" type="number" placeholder="0" min="0" onChange={(e) => handleInputChange('SILVER', e.target.value)} />        </td></tr>
                            <tr><td>SILVERM</td><td>       <input class="text-center" type="number" placeholder="0" min="0" onChange={(e) => handleInputChange('SILVERM', e.target.value)} />       </td></tr>
                            <tr><td>SILVERMIC</td><td>     <input class="text-center" type="number" placeholder="0" min="0" onChange={(e) => handleInputChange('SILVERMIC', e.target.value)} />     </td></tr>
                            <tr><td>GOLD</td><td>          <input class="text-center" type="number" placeholder="0" min="0" onChange={(e) => handleInputChange('GOLD', e.target.value)} />          </td></tr>
                            <tr><td>GOLDM</td><td>         <input class="text-center" type="number" placeholder="0" min="0" onChange={(e) => handleInputChange('GOLDM', e.target.value)} />         </td></tr>
                            <tr><td>GOLDMIC</td><td>       <input class="text-center" type="number" placeholder="0" min="0" onChange={(e) => handleInputChange('GOLDMIC', e.target.value)} />       </td></tr>
                            <tr><td>COPPER</td><td>        <input class="text-center" type="number" placeholder="0" min="0" onChange={(e) => handleInputChange('COPPER', e.target.value)} />        </td></tr>
                            <tr><td>COPPERMIC</td><td>     <input class="text-center" type="number" placeholder="0" min="0" onChange={(e) => handleInputChange('COPPERMIC', e.target.value)} />     </td></tr>
                            <tr><td>LEAD</td><td>          <input class="text-center" type="number" placeholder="0" min="0" onChange={(e) => handleInputChange('LEAD', e.target.value)} />          </td></tr>
                            <tr><td>LEADMIC</td><td>       <input class="text-center" type="number" placeholder="0" min="0" onChange={(e) => handleInputChange('LEADMIC', e.target.value)} />       </td></tr>
                            <tr><td>ZINC</td><td>          <input class="text-center" type="number" placeholder="0" min="0" onChange={(e) => handleInputChange('ZINC', e.target.value)} />          </td></tr>
                            <tr><td>ZINCMIC</td><td>       <input class="text-center" type="number" placeholder="0" min="0" onChange={(e) => handleInputChange('ZINCMIC', e.target.value)} />       </td></tr>
                            <tr><td>NATURALGAS</td><td>    <input class="text-center" type="number" placeholder="0" min="0" onChange={(e) => handleInputChange('NATURALGAS', e.target.value)} />    </td></tr>
                            <tr><td>NATURALGASMIC</td><td> <input class="text-center" type="number" placeholder="0" min="0" onChange={(e) => handleInputChange('NATURALGASMIC', e.target.value)} /> </td></tr>
                            <tr><td>CRUDEOIL</td><td>      <input class="text-center" type="number" placeholder="0" min="0" onChange={(e) => handleInputChange('CRUDEOIL', e.target.value)} />      </td></tr>
                            <tr><td>CRUDEOILMIC</td><td>   <input class="text-center" type="number" placeholder="0" min="0" onChange={(e) => handleInputChange('CRUDEOILMIC', e.target.value)} />   </td></tr>

                          </tbody>
                        </table>
                        <section class="text-right">
                          <button class="btn btn-primary" onClick={handleSave}>SAVE CHANGES</button>
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
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Settingss
