import React, { useEffect, useState } from 'react'
import { GETALL_CANCELED_ORDER_USER, GETALL_EXPIRED_ORDER_USER, GETALL_PLACED_ORDER_USER, GET_ALL_ORDERS_BY_USER, GET_PENDING_ORDERS_USER, GETALL_SQRORDER_USER } from '../../utils/API';
import { useSelector } from 'react-redux';

export const History = () => {

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

  const [orderArray, setOrderArray] = useState([]);
  const [sort, setSort] = useState();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    fetchAllOrders();
  }, []);

  const fetchAllOrders = async () => {
    const res = await GET_ALL_ORDERS_BY_USER(username);
    setOrderArray(res.Orders);
  }

  const fetchPlacedOrders = async () => {
    const res = await GETALL_PLACED_ORDER_USER(username);
    setOrderArray(res);
  }
  const fetchExpiredOrders = async () => {
    const res = await GETALL_EXPIRED_ORDER_USER(username);
    setOrderArray(res);
  }
  const fetchCanceledOrders = async () => {
    const res = await GETALL_CANCELED_ORDER_USER(username);
    setOrderArray(res);
  }
  const fetchPendingOrders = async () => {
    const res = await GET_PENDING_ORDERS_USER(username);
    setOrderArray(res.data);
  }
  const fetchSqrOrders = async () => {
    const res = await GETALL_SQRORDER_USER(username);
    setOrderArray(res);
  }

  const handleClick = (e) => {

    e.preventDefault();
    setLoader(true);

    if (sort === "pending") {
      fetchPendingOrders();
    }
    else if (sort === "order") {
      fetchAllOrders();
    }
    else if (sort === "excuted") {
      fetchPlacedOrders();
    }
    else if (sort === "expired") {
      fetchExpiredOrders();
    }
    else if (sort === "cancelled") {
      fetchCanceledOrders();
    }
    else if (sort === "placed") {
      fetchSqrOrders();
    }

    setLoader(false);

  }

  return (
    <div>

      <div className="page-header">
        <h3 className="page-title"> History </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>History</a></li>
            <li className="breadcrumb-item active" aria-current="page">Your Order's History</li>
          </ol>
        </nav>
      </div>

      <div className="grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <form className="form-inline">

              <select onChange={(e) => setSort(e.target.value)} style={{ width: "80%" }} class="form-control mb-2 mr-sm-2" >
                <option selected disabled>Please Select</option>
                <option value="order">Order Status (All)</option>
                <option value="pending">Pending</option>
                <option value="excuted">Executed</option>
                <option value="placed">Placed</option>
                <option value="cancelled">Cancelled</option>
                <option value="expired">Expired</option>
              </select>
              <button onClick={handleClick} className="btn btn-gradient-primary mb-2">Show</button>
            </form>
          </div>
        </div>
      </div>

      <div className="row">

        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">OrderBook ({orderArray?.length})</h4>
              {loader ? <div style={{ textAlign: "center", margin: "1.5rem" }}><span className="loader"></span></div> : ""}
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>

                      <th> Order ID </th>
                      <th> Exchange </th>
                      <th> Script | Expiry </th>
                      <th> Type </th>
                      <th> Quantity </th>
                      <th> Brokerage </th>
                      <th> Order Type </th>
                      <th> Trigger Price </th>
                      <th> Created At </th>
                      <th> Placed on </th>
                      <th> CF Status </th>
                      <th> Status </th>


                    </tr>
                  </thead>

                  {orderArray?.map((entry) => {

                    {/* if (!entry.quantity) {
                      return null;
                    } */}

                    const dateObj = new Date(entry.assetexpiredat);
                    const day = dateObj.getDate();
                    const month = dateObj.toLocaleString('default', { month: 'short' }).toUpperCase();
                    const year = dateObj.getFullYear();
                    const formattedDate = `${day}${month}${year}`;

                    const dateObj2 = new Date(entry.createdat);
                    const day2 = dateObj2.getDate();
                    const month2 = dateObj2.toLocaleString('default', { month: 'short' }).toUpperCase();
                    const year2 = dateObj2.getFullYear();
                    const time2 = dateObj2.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
                    const formattedDate2 = `${day2}${month2}${year2} (${time2})`;

                    const dateObj3 = new Date(entry.triggerat);
                    const day3 = dateObj3.getDate();
                    const month3 = dateObj3.toLocaleString('default', { month: 'short' }).toUpperCase();
                    const year3 = dateObj3.getFullYear();
                    const time3 = dateObj3.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
                    const formattedDate3 = `${day3}${month3}${year3} (${time3})`;

                    return (
                      <tbody>
                        <tr>
                          <td> {entry.order_id ?? "-"} </td>
                          <td> {entry.exchange ?? "-"} </td>
                          <td> {entry.symbol.split("-")[0] ?? "-"} | {formattedDate ?? "-"} </td>
                          <td> {entry.type ?? "-"} </td>
                          <td> {entry.quantity ?? "-"} </td>
                          <td>
                            {entry.exchange === 'MCX' && entry.brokereage_MCX}
                            {entry.exchange === 'NFO' && entry.brokereage_NFO}
                            {entry.exchange === 'Iot' && entry.brokereage_lot}
                          </td>

                          <td> {entry.order_type ?? "-"} </td>
                          <td> {entry.triggerprice ? Math.round(entry.triggerprice * 100) / 100 : "-"} </td>
                          <td> {formattedDate2 ?? "-"} </td>
                          <td> {entry.triggerat ? formattedDate3 : "-"} </td>
                          <td> {entry.CFstatus ?? "-"} </td>
                          <td> {entry.order_status ?? "-"} </td>
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
    </div >
  )
}

export default History;
