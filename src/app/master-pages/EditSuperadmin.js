import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useReducerPlus } from "../../utils/UseReducerPlus";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { EDIT_ADMIN, EDIT_SUPERADMIN, EDIT_USER } from '../../utils/API';

export const EditSuperadmin = () => {

    const { state } = useLocation();
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
        // fullname: "",
        username: state.username,
        password: "",
        // admin: username
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
            const res = await EDIT_SUPERADMIN(username, state.username, formData);
            console.log(res);
            //   toast.success(res.message, {
            //     position: toast.POSITION.TOP_RIGHT,
            //     autoClose: 3000,
            //     hideProgressBar: false,
            //     pauseOnHover: true,
            //   });
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
                            <h4 className="card-title" > Edit SuperMaster </h4>
                            <p className="card-description"> </p>

                            <form className="forms-sample">
                                <Form.Group>
                                    <label htmlFor="exampleInputUsername1">Usercode</label>
                                    <Form.Control disabled name="fullname" defaultValue={state.username} onChange={handleInputChange} type="text" id="exampleInputUsername1" placeholder="username" size="lg" />
                                </Form.Group>
                                <Form.Group>
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <Form.Control name='password' type="password" defaultValue={state.password} onChange={handleInputChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </Form.Group>
                                <button type="submit" onClick={e => { e.preventDefault(); handleSubmit(); }} className="btn btn-gradient-primary mr-2">{loader ? <span className='button-loader'></span> : "Save Changes"}</button>
                            </form>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EditSuperadmin
