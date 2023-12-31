import React, { useState, useEffect } from 'react'
import { ADMIN_USERS, GETALL_CANCEL_ORDERS_ADMIN, GETALL_EXPIRED_ORDERS_ADMIN, GETALL_ORDERS_ADMIN, GET_ALL_PENDING_ORDERS_ADMIN, GETALL_PLACED_ORDERS_ADMIN, GETALL_SQRD_ORDERS_ADMIN, FETCH_ALL_ORDERS, DELETEORDER, SUPERADMIN_ADMINS } from '../../utils/API';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const OrderDetails = () => {

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

    const [sort, setSort] = useState();
    const [orderArray, setOrderArray] = useState([]);
    const [loader, setLoader] = useState(false);
    const [loader1, setLoader1] = useState(false);
    const [sortArray, setSortArray] = useState([]);
    const [subadmin, setsubadmin] = useState("");
    const [subadminArray, setsubadminArray] = useState([]);
    const [loadingIndex, setLoadingIndex] = useState();

    useEffect(() => {
        const fun = async () => {
            const res = await SUPERADMIN_ADMINS(username);
            setsubadminArray(res);
        }
        fun();
    }, [username]);

    const applySort = async () => {

        setLoader1(true);

        const res = await FETCH_ALL_ORDERS(subadmin);
        if (res !== null) {
            const singleArray = [].concat(...res);
            setSortArray(singleArray);
        }

        setLoader1(false);
    }

    const handleClick = async (e, user, index) => {

        setLoadingIndex(index);
        setLoader(true);
        const res = await DELETEORDER(user, e.target.value);

        toast.info(res.status, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
            hideProgressBar: false,
            pauseOnHover: true,
        });

        setLoader(false);
        const res1 = await FETCH_ALL_ORDERS(subadmin);
        const singleArray = [].concat(...res1);
        setSortArray(singleArray);

    }

    return (
        <div>
            <div className="page-header">
                <h3 className="page-title"> Manage Orders </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}> Manage Orders </a></li>
                        <li className="breadcrumb-item active" aria-current="page"> All Orders Details </li>
                    </ol>
                </nav>
            </div>

            <div className="col-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <form className="form-inline">

                            <select onChange={(e) => setsubadmin(e.target.value)} className="form-control mb-2 mr-sm-2 col-md-10 col-lg-6 col-xl-9" >
                                <option selected disabled>Select Master</option>
                                {subadminArray?.map((entry) => {

                                    return (
                                        <option value={entry}>{entry}</option>
                                    )
                                })}
                            </select>
                            <button onClick={(e) => { e.preventDefault(); applySort(); }} className="btn btn-gradient-primary mb-2">{loader1 ? <span className='button-loader'></span> : "Show"}</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="row">

                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title"> OrderDetails ({sortArray?.length})</h4>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>

                                            <th> Username </th>
                                            <th> Order ID </th>
                                            <th> Exchange </th>
                                            <th> Script | Expiry </th>
                                            <th> Type </th>
                                            <th> Trigger Price </th>
                                            <th> Quantity </th>
                                            <th> Placed on </th>
                                            <th> CF Status </th>
                                            <th> Status </th>
                                            <th> Discard </th>


                                        </tr>
                                    </thead>

                                    {sortArray?.map((entry, index) => {

                                        {/* if (entry === null) return; */ }

                                        const dateObj = new Date(entry.asset.expiredat);
                                        const day = dateObj.getDate();
                                        const month = dateObj.toLocaleString('default', { month: 'short' }).toUpperCase();
                                        const year = dateObj.getFullYear();
                                        const formattedDate = `${day}${month}${year}`;

                                        const dateObj3 = new Date(entry.triggerat);
                                        const day3 = dateObj3.getDate();
                                        const month3 = dateObj3.toLocaleString('default', { month: 'short' }).toUpperCase();
                                        const year3 = dateObj3.getFullYear();
                                        const time3 = dateObj3.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
                                        const formattedDate3 = `${day3}${month3}${year3} (${time3})`;


                                        return (
                                            <tbody key={entry.order_id}>
                                                <tr>
                                                    <td> {entry?.username ?? "-"} </td>
                                                    <td> {entry?.order_id ?? "-"} </td>
                                                    <td> {entry?.asset.exchange ?? "-"} </td>
                                                    <td> {entry?.asset.symbol ?? "-"} | {formattedDate ?? "-"} </td>
                                                    <td> {entry?.type ?? "-"} </td>
                                                    <td> {entry?.triggerprice ?? "-"} </td>
                                                    <td> {entry?.quantity ?? "-"} </td>
                                                    <td> {formattedDate3 ?? "-"} </td>
                                                    <td> {entry?.CFstatus ?? "-"} </td>
                                                    <td> {entry?.order_status ?? "-"} </td>
                                                    <td> <button disabled={loader} onClick={(e) => handleClick(e, entry.username, index)} value={entry.order_id} className='btn btn-primary'> {loader && loadingIndex === index ? <span className='button-loader'></span> : "Terminate"} </button> </td>
                                                </tr>
                                            </tbody>
                                        )
                                    })
                                    }
                                </table>
                            </div>
                        </div>
                    </div>
                </div>






            </div>
        </div>
    )
}

export default OrderDetails;