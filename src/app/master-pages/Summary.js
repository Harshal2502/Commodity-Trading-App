import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { ADMIN_USERS, GET_ALL_ORDERS_BY_USER } from '../../utils/API';

const Summarys = () => {



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
  const [activeTab, setActiveTab] = useState('market');


  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };



  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchAllOrders = async (e) => {

    e.preventDefault();

    if (client !== "Clients (All)") {
      const res = await GET_ALL_ORDERS_BY_USER(client);
      setOrderArray(res);
      console.log(res)
    }
  }



  const fetchUsers = async () => {
    const res = await ADMIN_USERS(username);
    setClientArray(res.users);
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

      <div>
        <div className="tab-buttons">
          <button
            className={`tab-button ${activeTab === 'market' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleTabClick('market') }}
          >
            <span>Script-Wise</span>
          </button>
          <button
            className={`tab-button ${activeTab === 'limit' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleTabClick('limit') }}
          >
            Client-Wise
          </button>
        </div>
        <div className="tab-content" style={{ padding: "1rem 0rem 0.5rem" }}>
          {activeTab === 'market' && (
            <>
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

              <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Summary ({orderArray.length})</h4>
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
                                <td>{entry.symbol.split("-")[0] ?? "-"} | {formattedDate ?? "-"}</td>
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

            </>
          )}
          {activeTab === 'limit' && (
            <>
              <table className="table" style={{ backgroundColor: "white", borderRadius: "5px" }}>
                <thead>
                  <tr>
                    <th> <h6>UserCode</h6> </th>
                    <th> <h6>Net Total</h6> </th>
                    <th> <h6>Brokrage</h6> </th>
                    <th> <h6>Net Total With Brkg</h6> </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ color: "red" }} key="entry">
                    <td>DEMOC</td>
                    <td>-210.00</td>
                    <td>239.58</td>
                    <td>-469.58</td>
                  </tr>
                  <tr key="entry">
                    <td>HARESH123</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                  </tr>
                  <tr key="entry">
                    <td>ABC5555</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                  </tr>
                  <tr key="entry">
                    <td>ASHOK</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                  </tr>
                  <tr key="entry">
                    <td>MIRAJ022</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                  </tr>
                  <tr key="entry">
                    <td>AD01</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                  </tr>
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>

      <div className="col-12 grid-margin stretch-card" style={{ marginBottom: 0 }}>
        <div className="card btn btn-gradient-dark">
          <div className="card-body text-center" style={{ paddingBottom: 0, paddingTop: "1rem", display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
            <div>
              <span >Net Total with Brkg</span>
              <h4 >59538.9</h4>
            </div>
            <div>
              <span >Net Total with Brkg</span>
              <h4 >59538.9</h4>
            </div>
          </div>

        </div>
      </div>
      <div className="col-12 grid-margin stretch-card">
        <div className="card btn btn-gradient-dark">
          <div style={{ paddingTop: 0, paddingBottom: "1rem" }} className="card-body text-center">
            <span >Net Total with Brkg</span>
            <h4 >59538.9</h4>
          </div>

        </div>
      </div>

    </div>

  )
}

export default Summarys
