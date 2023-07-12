import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useReducerPlus } from "../../utils/UseReducerPlus";
import { ADD_ADMIN } from '../../utils/API';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddAdmin = () => {

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

  const [loader, setLoader] = useState(false);

  const [formData, setFormData] = useReducerPlus({
    fullname: "",
    username: "",
    password: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      [name]: value,
    });
  }

  const handleSubmit = async () => {

    setLoader(true);

    try {
      const res = await ADD_ADMIN(formData, username);
      toast.info(res.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
      });
    }
    catch (err) {
      console.log(err);
    }
    setLoader(false);

  }

  return (
    <div>
      <div className="row">

        <div className="col-md-6 grid-margin stretch-card ">
          <div className="card ">
            <div className="card-body">
              <h4 className="card-title" >Register a New Admin</h4>
              <p className="card-description"> </p>

              <form className="forms-sample">
                <Form.Group>
                  <label htmlFor="exampleInputUsername1">Full Name</label>
                  <Form.Control name="fullname" value={formData.fullname} onChange={handleInputChange} type="text" id="exampleInputUsername1" placeholder="Full name" size="lg" />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="exampleInputEmail1">Unique User Code</label>
                  <Form.Control name='username' value={formData.username} onChange={handleInputChange} type="text" className="form-control" id="exampleInputEmail1" placeholder="Unique User Code" />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <Form.Control name='password' type="password" value={formData.password} onChange={handleInputChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </Form.Group>
                <button type="submit" onClick={e => { e.preventDefault(); handleSubmit(); }} className="btn btn-gradient-primary mr-2">{loader ? <span className='button-loader'></span> : "Register"}</button>
              </form>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AddAdmin
