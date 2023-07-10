import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { LOGIN } from '../../utils/API';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAccessrole, setUsername } from '../../redux/action/action';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Login = () => {

  const dispatch = useDispatch();

  const [uname, setuname] = useState("");
  const [pass, setpass] = useState("");
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const handlepassChange = (e) => {
    setpass(e.target.value);
  }
  const handleunameChange = (e) => {
    setuname(e.target.value);
  }

  const handleSubmit = async (e) => {

    setLoader(true);

    try {
      const formData = {
        username: uname,
        password: pass,
      }

      const res = await LOGIN(formData, "superadmin");

      if (res.auth) {
        dispatch(setUsername(res.auth.data.user.username));
        dispatch(setAccessrole(res.auth.data.user.role));
      }


      if (res.result === true) {
        navigate("/supermaster_main/loaded");
      }
      else {
        toast.warning("Invalid credentials", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          hideProgressBar: false,
          pauseOnHover: true,
        });
      }
    }
    catch (err) {
      console.log(err);
    }

    setLoader(false);
  }

  return (
    <div>
      <div className="d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
                <img style={{
                  width: "20rem",
                  position: "relative",
                  right: "2rem",
                }} src={require("../../assets/images/logo.png")} alt="logo" />
              </div>
              <h4>SUPER MASTER LOGIN</h4>
              <Form className="pt-3">
                <Form.Group className="d-flex search-field">
                  <Form.Control onChange={handleunameChange} type="email" placeholder="Usercode" size="lg" className="h-auto" />
                </Form.Group>
                <Form.Group className="d-flex search-field">
                  <Form.Control onChange={handlepassChange} type="password" placeholder="Password" size="lg" className="h-auto" />
                </Form.Group>
                <div className="mt-3">
                  <button disabled={loader} className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" type="submit" onClick={handleSubmit}>{loader ? <span className='button-loader'></span> : "LOG IN"}</button>
                </div>
                <br></br>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
