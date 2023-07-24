import React, { useState, useEffect } from 'react'
import { ADMIN_USERS, GET_ALL_ORDERS_BY_USER, GET_PORTFOLIO_ADMIN_SINGLEUSER, GET_PORTFOLIO_ALLUSERS } from '../../utils/API';
import { useSelector } from 'react-redux';

export const PortFolios = () => {



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



  const [client, setClient] = useState('Clients (All)');
  const [clientArray, setClientArray] = useState([]);
  const [orderArray, setOrderArray] = useState([]);



  useEffect(() => {
    fetchUsers();
    fetchPortfolio();
  }, []);

  const fetchAllOrders = async (e) => {

    e.preventDefault();

    if (client !== "Clients (All)") {
      const res = await GET_PORTFOLIO_ADMIN_SINGLEUSER(client);
      // setOrderArray(res);
      console.log(res)
    }
  }



  const fetchUsers = async () => {
    const res = await ADMIN_USERS(username);
    setClientArray(res.users);
  }

  const fetchPortfolio = async () => {
    const res = await GET_PORTFOLIO_ALLUSERS(username);
    console.log(res)
    const singleArray = [].concat(...res);
    const singleArray1 = singleArray.flatMap(entry => entry.portfolio);
    setOrderArray(singleArray1);
  }




  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> PortFolio </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>PortFolio</a></li>
            <li className="breadcrumb-item active" aria-current="page">Your Opened Positions</li>
          </ol>
        </nav>
      </div>

      <div className="col-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <form className="form-inline">

              <select onChange={(e) => { const value = e.target.value; setClient(value); }} class="form-control mb-2 mr-sm-2 col-md-10 col-lg-6 col-xl-9" >
                <option selected disabled value="none">Clients (All)</option>
                {clientArray?.map((entry) => {

                  return (
                    <option value={entry.username}>{entry.username}</option>
                  )
                })}
              </select>
              <button type="submit" onClick={e => fetchAllOrders(e)} className="btn btn-gradient-primary mb-2">Show</button>
            </form>
          </div>
        </div>
      </div>


      <div className="row">

        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">PortFolio ({orderArray.length})</h4>
              {/* <p className="card-description"> Add className <code>.table-striped</code>
                </p> */}
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>

                      <th> Exchange </th>
                      <th> Script | Expiry </th>
                      <th> Current Price </th>
                      <th> Avarage Price </th>
                      <th> Quantity </th>
                      <th> Order Type</th>
                      <th> Profit / Loss</th>
                      <th> P/L with Brkg  </th>


                    </tr>
                  </thead>

                  {orderArray?.map((entry) => {

                    const dateObj = new Date(entry.expiry);

                    const day = dateObj.getDate();
                    const month = dateObj.toLocaleString('default', { month: 'short' }).toUpperCase();
                    const year = dateObj.getFullYear();

                    const formattedDate = `${day}${month}${year}`;

                    return (
                      <tbody>
                        <tr>
                          <td>{entry.exchange ?? "XXXX"}</td>
                          <td>{entry.symbol?.split("-")[0] ?? "-"} | {formattedDate ?? "-"}</td>
                          <td>{entry.averagePrice ?? "000.0"}</td>
                          <td>{entry.currentPrice ?? "000.0"}</td>
                          <td>{entry.quantity ?? "000"}</td>
                          <td>{entry.order_type ?? "TYPE"}</td>
                          <td>{entry.profitloss ? entry.profitloss : "000.0"}</td>
                          <td>{entry.profitlosswithbrkg ? entry.profitlosswithbrkg : "000.0"}</td>
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

        <div className="col-12 grid-margin stretch-card">
          <div className="card btn btn-gradient-dark">
            <div style={{ padding: "1rem" }} className="card-body text-center">
              <span > Total </span>
              <h4 >59538.9</h4>
            </div>

          </div>
        </div>




      </div>
    </div >
  )
}

export default PortFolios
