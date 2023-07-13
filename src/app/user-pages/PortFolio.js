import React, { useState, useEffect } from 'react'
import { GETALL_PLACED_ORDER_USER, GET_PORTFOLIO_SINGLEUSER, SQUARE_OFF_FUNCTION, UPDATE_PORTFOLIO } from '../../utils/API';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SQTable.css';


export const PortFolio = () => {

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

  const [portfolio, setPortfolio] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchPlacedOrders();
    updatePortfolio();
  }, []);
  

  useEffect(() => {
    const socket = new WebSocket("ws://52.66.105.29:8020");

    socket.onopen = () => {
      console.log("Balance Connection Established");
      socket.send(username);
    };

    const parseData = (data) => {
      try {
        const parsedData = JSON.parse(`[${data}]`);
        return parsedData;
      } catch (error) {
        console.error("Error parsing data:", error);
        return [];
      }
    };

    socket.onmessage = async (event) => {
      const data = event.data;
      const parsedArray = parseData(data);
      setPortfolio(parsedArray[0]?.portfolio);
      setTotal(parsedArray[0]?.forwardWeekPL);
    };

    socket.onclose = () => {
      console.log("Balance Connection Closed");
    };

    return () => {
      socket.close();
    };
  }, [username]);

  const updatePortfolio = async () => {
    const res = await UPDATE_PORTFOLIO();
  }

  const fetchPlacedOrders = async () => {
  //   const res = await GETALL_PLACED_ORDER_USER(username);

  //   if (res.length !== 0) {
  //     const result = await GET_PORTFOLIO_SINGLEUSER(username, res);
  //     // setTotal(result.nettotal);
  //   }

  //   // const result = await GET_PORTFOLIO_SINGLEUSER(username, res);
  //   // setTotal(result.nettotal);
  }

  const handleClick = async (e) => {

    e.preventDefault();
    console.log(e.target.value)

    // const res = await SQUARE_OFF_FUNCTION(username, e.target.value);
    // toast.info(res.message, {
    //   position: toast.POSITION.TOP_RIGHT,
    //   autoClose: 3000,
    //   hideProgressBar: false,
    //   pauseOnHover: true,
    // });

    fetchPlacedOrders();
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
      <div className="row">

        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">PortFolio ({portfolio?.length})</h4>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>

                      <th> Exchange </th>
                      <th> Script | Expiry </th>
                      <th> Order Type</th>
                      <th> Quantity </th>
                      <th> Avarage Price </th>
                      <th> Current Price </th>
                      <th> Profit / Loss</th>
                      <th> P/L with Brkg  </th>
                      <th> Square Off </th>

                    </tr>
                  </thead>
                  <tbody>
                    {
                      portfolio && portfolio.length > 0 ? portfolio.map((entry, index) => {

                        const dateObj = new Date(entry.expiry);
                        const day = dateObj.getDate();
                        const month = dateObj.toLocaleString('default', { month: 'short' }).toUpperCase();
                        const year = dateObj.getFullYear();
                        const formattedDate = `${day}${month}${year}`;

                        return (
                          <tr>
                            <td> {entry.exchange ?? "XXXX"} </td>
                            <td> {entry.symbol.split("-")[0] ?? "-"} | {formattedDate ?? "-"} </td>
                            <td> {entry.order_type ?? "TYPE"} </td>
                            <td> {entry.quantity ?? "000"} </td>
                            <td> {entry.averagePrice ?? "000.0"} </td>
                            <td> {entry.currentPrice ?? "000.0"} </td>

                            <td> {entry.profitloss ? entry.profitloss : "000.0"} </td>
                            <td> {entry.profitlosswithbrkg ? entry.profitlosswithbrkg : "000.0"} </td>
                            <td> <button onClick={handleClick} value={entry.order_id} className='btn btn-primary'> S/O </button> </td>
                          </tr>
                        )
                      }) : (
                        <>
                          <tr>
                            <td colSpan="10"> No data Found </td>
                          </tr>
                        </>
                      )
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 grid-margin stretch-card">
          <div className="card btn btn-gradient-dark">
            <div style={{ padding: "1rem" }} className="card-body text-center">
              <span > Total </span>
              <h4 >{total?.toFixed(2)}</h4>
            </div>

          </div>
        </div>




      </div>
    </div >
  )
}

export default PortFolio
