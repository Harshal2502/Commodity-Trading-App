import React, { useEffect, useState } from 'react'
import { GETALL_CANCELED_ORDER_USER, GETALL_EXPIRED_ORDER_USER, GETALL_PENDING_LIMITORDERS_USER, GETALL_PLACED_ORDER_USER, GET_ALL_ORDERS_BY_USER, GET_PENDING_ORDERS_USER, PLACE_ALL_LIMIT_ORDERS, PLACE_ALL_MARKET_ORDERS, GETALL_PENDING_MARKETORDERS_USER, GETALL_SQRORDER_USER } from '../../utils/API';
import { useSelector } from 'react-redux';
import './SQTable.css';

export const OrderBook = () => {

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
  const [sortArray, setSortArray] = useState([]);

  useEffect(() => {
    fetchPendingOrdersMarket();
    fetchPendingOrdersLimit();

    // setInterval(() => {
    fetchAllOrders();
    // }, 10000);

  }, []);

  const fetchAllOrders = async () => {
    const res = await GET_ALL_ORDERS_BY_USER(username);
    setOrderArray(res.Orders);
    setSortArray(res.Orders);
  }

  const fetchPendingOrdersLimit = async () => {
    const res = await GETALL_PENDING_LIMITORDERS_USER(username);

    if (res.status == 200 && res.data.length !== 0) {
      const result = await PLACE_ALL_LIMIT_ORDERS(username, res.data);
      if (result.status === 200) fetchAllOrders();
    }
  }

  const fetchPendingOrdersMarket = async () => {
    const res = await GETALL_PENDING_MARKETORDERS_USER(username);

    if (res.status == 200 && res.data.length !== 0) {
      const result = await PLACE_ALL_MARKET_ORDERS(username, res.data);
      if (result.status === 200) fetchAllOrders();
    }
  }

  // useEffect(() => {
  // fetchPendingOrders();
  // }, [totalPendingOrders]);

  const handleClick = (e) => {

    e.preventDefault();

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
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}> OrderBook </a></li>
            <li className="breadcrumb-item active" aria-current="page"> Your Orders </li>
          </ol>
        </nav>
      </div>

      <div className="grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <form className="form-inline">

              <select onChange={(e) => setSort(e.target.value)} style={{ width: "80%" }} class="form-control mb-2 mr-sm-2" >
                <option selected value="all"> All Orders </option>
                <option value="Pending"> Pending </option>
                <option value="Squaredoff"> Executed </option>
                <option value="Placed"> Placed </option>
                <option value="Cancelled"> Cancelled </option>
                <option value="Expired"> Expired </option>
              </select>
              <button onClick={handleClick} className="btn btn-gradient-primary mb-2"> Show </button>
            </form>
          </div>
        </div>
      </div>

      <div className="row">

        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title"> OrderBook ({sortArray?.length}) </h4>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>

                      <th> Order ID </th>
                      <th> Exchange </th>
                      <th> Script | Expiry </th>
                      <th> Type </th>
                      <th> Order Type </th>
                      <th> Trigger Price </th>
                      <th> Quantity </th>
                      <th> Brokerage </th>
                      <th> P/L</th>
                      <th> Created At </th>
                      <th> Placed on </th>
                      <th> CF Status </th>
                      <th> Status </th>


                    </tr>
                  </thead>

                  {sortArray?.map((entry) => {

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
                          <td> {entry.symbol ?? "-"} | {formattedDate ?? "-"} </td>
                          <td> {entry.type ?? "-"} </td>
                          <td> {entry.order_type ?? "-"} </td>
                          <td> {entry.triggerprice ? Math.round(entry.triggerprice * 100) / 100 : "-"} </td>
                          <td> {entry.quantity ?? "-"} </td>
                          <td>
                            {entry.exchange === 'MCX' && entry.brokereage_MCX}
                            {entry.exchange === 'NFO' && entry.brokereage_NFO}
                            {entry.exchange === 'Iot' && entry.brokereage_lot}
                          </td>
                          <td> {entry.PL ?? "-"} </td>

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

export default OrderBook
