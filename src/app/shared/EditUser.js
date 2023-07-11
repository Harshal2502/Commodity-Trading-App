import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useReducerPlus } from "../../utils/UseReducerPlus";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const EditUser = () => {

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

    const [disabled, setDisabled] = useState(false);
    const [disabled2, setDisabled2] = useState(false);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        console.log(state);
    }, []);

    const [formData, setFormData] = useReducerPlus({
        fullname: "",
        username: "",
        password: "",
        MCX_allow: true,
        FONSE_allow: true,
        brokereage_MCX: "200",
        brokereage_NFO: "200",
        profit_limit: "0",
        margin_limit: "500",
        admin: username
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            [name]: value,
        });

        if (name === "MCX_allow") setDisabled(!disabled);
        else if (name === "FONSE_allow") setDisabled2(!disabled2);
    }

    const handleSubmit = async () => {
        setLoader(true);

        console.log(formData)

        // try {
        //   const res = await CREATE_USER(formData, formData.admin);
        //   toast.success(res.message, {
        //     position: toast.POSITION.TOP_RIGHT,
        //     autoClose: 3000,
        //     hideProgressBar: false,
        //     pauseOnHover: true,
        //   });
        // }
        // catch (err) {
        //   console.log(err);
        // }
        setLoader(false);

    }

    const options1 = [{
        value: "200",
        label: "Fix_Brkg"
    }, {
        value: "0.1",
        label: "0.1 Paisa"
    }, {
        value: "0.2",
        label: "0.2 Paisa"
    }, {
        value: "0.3",
        label: "0.3 Paisa"
    }, {
        value: "0.4",
        label: "0.4 Paisa"
    }, {
        value: "0.5",
        label: "0.5 Paisa"
    }, {
        value: "0.6",
        label: "0.6 Paisa"
    }, {
        value: "0.7",
        label: "0.7 Paisa"
    }, {
        value: "0.8",
        label: "0.8 Paisa"
    }, {
        value: "0.9",
        label: "0.9 Paisa"
    }, {
        value: "1",
        label: "1 Paisa"
    }, {
        value: "1.5",
        label: "1.5 Paisa"
    }, {
        value: "2",
        label: "2 Paisa"
    }, {
        value: "2.5",
        label: "2.5 Paisa"
    }, {
        value: "3",
        label: "3 Paisa"
    }, {
        value: "3.5",
        label: "3.5 Paisa"
    }, {
        value: "4",
        label: "4 Paisa"
    }, {
        value: "4.5",
        label: "4.5 Paisa"
    }, {
        value: "5",
        label: "5 Paisa"
    }, {
        value: "6",
        label: "6 Paisa"
    }, {
        value: "7",
        label: "7 Paisa"
    }, {
        value: "8",
        label: "8 Paisa"
    }, {
        value: "9",
        label: "9 Paisa"
    }, {
        value: "10",
        label: "10 Paisa"
    },];

    return (
        <div>
            <div className="row">

                <div className="col-md-6 grid-margin stretch-card ">
                    <div className="card ">
                        <div className="card-body">
                            <h4 className="card-title" >Register a New User</h4>
                            <p className="card-description"> </p>

                            <form className="forms-sample">
                                <Form.Group>
                                    <label htmlFor="exampleInputUsername1">Full Name</label>
                                    <Form.Control disabled name="fullname" value={state.username} onChange={handleInputChange} type="text" id="exampleInputUsername1" placeholder="username" size="lg" />
                                </Form.Group>
                                <Form.Group>
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <Form.Control name='password' type="password" value={state.password} onChange={handleInputChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </Form.Group>

                                <Form.Group>
                                    <label>Select MCX</label>
                                    <select name='MCX_allow' value={state.MCX_allow} onChange={handleInputChange} class="form-control">
                                        <option selected disabled>MCX Allow?</option>
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                </Form.Group>

                                <Form.Group>
                                    <label>Select FONSE</label>
                                    <select name='FONSE_allow' value={state.FONSE_allow} onChange={handleInputChange} class="form-control">
                                        <option selected disabled>FONSE Allow?</option>
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>

                                    </select>
                                </Form.Group>

                                <Form.Group>
                                    <label>Brokerage for MCX</label>
                                    <select disabled={disabled} name='brokereage_MCX' value={state.brokereage_MCX} onChange={handleInputChange} class="form-control">
                                        <option disabled selected>Select Brokerage for MCX</option>
                                        {options1?.map((state) => {
                                            return (
                                                <option value={state.value}>{state.label}</option>
                                            )
                                        })}

                                    </select>
                                </Form.Group>

                                <Form.Group>
                                    <label>Brokerage for FONSE</label>
                                    <select disabled={disabled2} name='brokereage_NFO' value={state.brokereage_NFO} onChange={handleInputChange} class="form-control">
                                        <option disabled selected>Select Brokerage for NFO</option>
                                        {options1?.map((state) => {
                                            return (
                                                <option value={state.value}>{state.label}</option>
                                            )
                                        })}

                                    </select>
                                </Form.Group>

                                <Form.Group>
                                    <label htmlFor="exampleInputConfirmPassword1">Profit Limit of User...! (0 = No Limit)</label>
                                    <Form.Control name='profit_limit' value={state.profit_limit} onChange={handleInputChange} type="number" className="form-control" id="exampleInputConfirmPassword1" placeholder="0" />
                                </Form.Group>
                                <Form.Group>
                                    <label htmlFor="exampleInputConfirmPassword1">Margin Limit (X)</label>
                                    <Form.Control name='margin_limit' value={state.margin_limit} onChange={handleInputChange} type="number" className="form-control" id="exampleInputConfirmPassword1" placeholder="500" />
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

export default EditUser
