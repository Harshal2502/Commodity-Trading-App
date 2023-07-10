import React, { useEffect, useState } from "react";
import { ADMIN_USERS, CREDIT_CASHBALANCE_USER, CREDIT_VIRTUALBALANCE_USER, DEBIT_CASHBALANC_USER, DEBIT_VIRTUALBALANC_USER } from "../../utils/API";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Transaction = () => {

    const navigate = useNavigate();

    const { username, accessrole } = useSelector((state) => {
        if (!state) {
            return {
                username: null,
                accessrole: null
            };
        }
        return {
            username: state.username,
            accessrole: state.accessrole
        };
    });

    const [clientArray, setClientArray] = useState();
    const [clientItem, setclientItem] = useState();
    const [amount, setAmount] = useState();
    const [option, setOption] = useState();
    const [loader, setLoader] = useState();
    const [loader1, setLoader1] = useState();

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const res = await ADMIN_USERS(username);
        console.log(res)
        setClientArray(res.users);
    }

    const handleClientChange = (e) => {
        setclientItem(e.target.value);
    }

    const hanldeDeposite = async (e) => {

        e.preventDefault();
        if (accessrole !== "admin") navigate("/login");

        setLoader(true);
        if (option === "cash") {
            const res = await CREDIT_CASHBALANCE_USER(username, clientItem, amount);
            toast.success(res.message, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
                hideProgressBar: false,
                pauseOnHover: true,
            });
        }

        else if (option === "virtual") {
            const res = await CREDIT_VIRTUALBALANCE_USER(username, clientItem, amount);
            toast.success(res.message, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
                hideProgressBar: false,
                pauseOnHover: true,
            });
        }

        else toast.error("An error occured", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
            hideProgressBar: false,
            pauseOnHover: true,
        });
        setLoader(false);
    }

    const handleWithdraw = async (e) => {

        e.preventDefault();
        if (accessrole !== "admin") navigate("/login");

        setLoader1(true);
        if (option === "cash") {
            const res = await DEBIT_CASHBALANC_USER(username, clientItem, amount);
            toast.success(res.message, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
                hideProgressBar: false,
                pauseOnHover: true,
            });
        }

        else if (option === "virtual") {
            const res = await DEBIT_VIRTUALBALANC_USER(username, clientItem, amount);
            toast.success(res.message, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
                hideProgressBar: false,
                pauseOnHover: true,
            });
        }

        else toast.error("An error occured", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
            hideProgressBar: false,
            pauseOnHover: true,
        });
        setLoader1(false);
    }

    return (
        <>
            <div className="page-header">
                <h3 className="page-title"> Transaction </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Transaction </a></li>
                        <li className="breadcrumb-item active" aria-current="page">Make Transactions</li>
                    </ol>
                </nav>
            </div>

            <div className="card">
                <div className="card-body">
                    <form className="form-inline">

                        <div style={{ paddingLeft: "0", marginTop: "10px" }} className="input-group mb-2 mr-sm-1 col-md-9 col-lg-5 col-xl-2">
                            <select class="form-control mb-2 mr-sm-2 col-md-10 col-lg-6 col-xl-12" onChange={handleClientChange} id="subadmin_place_order_usercode"  >
                                <option value="all" selected disabled>Clients (All)</option>
                                {clientArray?.map((entry) => {

                                    return (
                                        <option value={entry.username}>{entry.username}</option>
                                    )
                                })}
                            </select>
                        </div>

                        <div style={{ padding: 0 }} className="input-group mb-2 mr-sm-1 col-md-9 col-lg-5 col-xl-2">

                            <select onChange={(e) => setOption(e.target.value)} class="form-control" id="transaction_detail" >
                                <option value="none" selected="">Select Type</option>
                                <option value="virtual">Virtual_Transaction</option>
                                <option value="cash">Cash_Transaction</option>
                            </select>
                        </div>


                        <div style={{ "padding": "" }} className="input-group mb-2 mr-sm-1 col-md-9 col-lg-5 col-xl-2">

                            <input id="transaction_amount" style={{ "padding": "10px" }} onChange={(e) => setAmount(e.target.value)} type="number" min="0" class="form-control" placeholder="Amount" />
                        </div>

                        <button type="submit" disabled={loader1 || loader} className="btn btn-gradient-success mb-2" onClick={hanldeDeposite}>{loader ? <span className='button-loader'></span> : "Deposite"}</button>
                        <button type="submit" disabled={loader || loader1} className="btn btn-gradient-danger mb-2" onClick={handleWithdraw}>{loader1 ? <span className='button-loader'></span> : "Withdraw"}</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Transaction;