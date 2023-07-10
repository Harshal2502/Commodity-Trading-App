import React, { useState, useEffect } from 'react'
import { ADMIN_USERS, GETALL_LIMIT_ORDERS_ADMIN, GETALL_MARKET_ORDERS_ADMIN, GETALL_ORDERS_ADMIN, GETALL_PENDING_ORDERS_ADMIN, GETALL_PLACED_ORDERS_ADMIN } from '../../utils/API';
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

  const [clientArray, setClientArray] = useState([]);
  const [sort, setSort] = useState();
  const [orderArray, setOrderArray] = useState([]);



  useEffect(() => {
    fetchUsers();
  }, []);



  const fetchUsers = async () => {
    const res = await ADMIN_USERS(username);
    setClientArray(res.users);
  }



  const applySort = async () => {

    if (sort === "pending") {
      const res = await GETALL_PENDING_ORDERS_ADMIN(username);
      console.log(res)
      const singleArray = [].concat(...res.pendingOrders);
      setOrderArray(singleArray);
    }
    else if (sort === "all") {
      const res = await GETALL_ORDERS_ADMIN(username);
      const singleArray = [].concat(...res.pendingOrders);
      setOrderArray(singleArray);
    }
    else if (sort === "excuted") {
      const res = await GETALL_PLACED_ORDERS_ADMIN(username);
      const singleArray = [].concat(...res.pendingOrders);
      setOrderArray(singleArray);
    }
    else if (sort === "market") {
      const res = await GETALL_MARKET_ORDERS_ADMIN(username);
      const singleArray = [].concat(...res.pendingOrders);
      setOrderArray(singleArray);
    }
    else if (sort === "limit") {
      const res = await GETALL_LIMIT_ORDERS_ADMIN(username);
      const singleArray = [].concat(...res.pendingOrders);
      setOrderArray(singleArray);
    }

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

                <option value="all" selected>Order Status (All)</option>
                <option value="pending">Pending</option>
                <option value="excuted">Excuted</option>
                <option value="market">Market</option>
                <option value="limit">Limit</option>
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
              <h4 className="card-title">OrderBook (0)</h4>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>

                      <th> Username </th>
                      <th> Symbol </th>
                      <th> Exchange </th>
                      <th> Expiry </th>
                      <th> Type </th>


                    </tr>
                  </thead>

                  {orderArray?.map((entry) => {

                    if (entry === null) return;

                    return (
                      <tbody>
                        <tr>
                          <td> {entry?.username ?? "-"} </td>
                          <td> {entry?.symbol ?? "-"} </td>
                          <td> {entry?.exchange ?? "-"} </td>
                          <td> {entry?.expiredat ?? "-"} </td>
                          <td> {entry?.type ?? "-"} </td>
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
