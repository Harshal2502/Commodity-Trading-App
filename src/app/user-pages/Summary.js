import React, { useEffect, useState } from 'react'
import { GETALL_PLACED_ORDER_USER, GET_PORTFOLIO_SINGLEUSER } from '../../utils/API';
import { useSelector } from 'react-redux';



export const Summary = () => {
  let total1 = 0;

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
  }, []);

  useEffect(() => {
    portfolio.map((entry) => {
      total1 = total1 + entry.profitlosswithbrkg;
    })
    setTotal(total1)
  }, [portfolio])

  const fetchPlacedOrders = async () => {
    const res = await GETALL_PLACED_ORDER_USER(username);

    if (res.length !== 0) {
      const result = await GET_PORTFOLIO_SINGLEUSER(username, res);
      console.log(result)
      setPortfolio(result.portfolio);
    }
  }

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> Summary  </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Summary </a></li>
            <li className="breadcrumb-item active" aria-current="page">Your Bill Summary</li>
          </ol>
        </nav>
      </div>
      <div className="row">

        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Summary ({portfolio.length})</h4>
              {/* <p className="card-description"> Add className <code>.table-striped</code>
                </p> */}
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>

                      <th> Exchange </th>
                      <th> Script | Expiry </th>
                      <th> Qty </th>
                      <th>X</th>
                      <th> Net P/L </th>
                      <th>Net P/L with brkg</th>


                    </tr>
                  </thead>
                  <tbody>
                    {
                      portfolio?.map((entry, index) => {

                        const dateObj = new Date(entry.expiry);

                        const day = dateObj.getDate();
                        const month = dateObj.toLocaleString('default', { month: 'short' }).toUpperCase();
                        const year = dateObj.getFullYear();

                        const formattedDate = `${day}${month}${year}`;

                        return (
                          <tr>
                            <td>{entry.exchange ?? "XXXX"}</td>
                            <td>{entry.symbol.split("-")[0] ?? "-"} | {formattedDate ?? "-"} </td>
                            <td>{entry.quantity ?? "000"}</td>
                            <td>{entry.order_id ?? "XXXX"}</td>
                            <td>{entry.profitloss ?? "000.0"}</td>
                            <td>{entry.profitlosswithbrkg ?? "000.0"}</td>
                          </tr>
                        )
                      })
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


              <span >Total</span>
              <h4 >{total.toFixed(2)}</h4>




            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Summary
