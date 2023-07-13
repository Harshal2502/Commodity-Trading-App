import React, { useState, useEffect } from 'react'
import { ADMIN_USERS, GETALL_CANCEL_ORDERS_ADMIN, GETALL_EXPIRED_ORDERS_ADMIN, GETALL_ORDERS_ADMIN, GET_ALL_PENDING_ORDERS_ADMIN, GETALL_PLACED_ORDERS_ADMIN, GETALL_SQRD_ORDERS_ADMIN } from '../../utils/API';
import { useSelector } from 'react-redux';

export function OrderBook() {

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
  const [sortArray, setSortArray] = useState([]);

  useEffect(() => {
    const fun = async () => {
      const res = await GETALL_ORDERS_ADMIN(username);
      const singleArray = [].concat(...res);
      setOrderArray(singleArray);
      setSortArray(singleArray);
    }
    fun();
  }, [username])

  const applySort = async () => {
    if (sort === "all") {
      setSortArray(orderArray);
      return;
    }
    setSortArray(orderArray.filter((order) => order.order_status === sort));
  }


  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> OrderBook </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>OrderBook</a></li>
            <li className="breadcrumb-item active" aria-current="page">Your Orders</li>
          </ol>
        </nav>
      </div>

      <div className="col-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <form className="form-inline">

              <select onChange={(e) => setSort(e.target.value)} className="form-control mb-2 mr-sm-2 col-md-10 col-lg-6 col-xl-9" >

                <option value="all" selected>All Orders</option>
                <option value="Pending">Pending</option>
                <option value="Squaredoff">Executed</option>
                <option value="Placed">Placed</option>
                <option value="Cancelled">Cancelled</option>
                <option value="Expired">Expired</option>
              </select>
              <button onClick={(e) => { e.preventDefault(); applySort(); }} className="btn btn-gradient-primary mb-2">Show</button>
            </form>
          </div>
        </div>
      </div>

      <div className="row">

        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">OrderBook ({sortArray?.length})</h4>
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


                    </tr>
                  </thead>

                  {sortArray?.map((entry) => {

                    if (entry === null) return;

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
                      <tbody>
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

export default OrderBook
