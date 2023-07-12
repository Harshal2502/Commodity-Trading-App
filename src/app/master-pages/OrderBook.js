import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Select from 'react-select';
import { ADMIN_USERS, GETALL_CANCELED_ORDER_USER, GETALL_EXPIRED_ORDER_USER, GETALL_LIMIT_ORDERS_ADMIN, GETALL_MARKET_ORDERS_ADMIN, GETALL_ORDERS_ADMIN, GETALL_PENDING_ORDERS_ADMIN, GETALL_PLACED_ORDERS_ADMIN, GETALL_PLACED_ORDER_USER, GETALL_SQRORDER_USER, GET_ALL_ORDERS_BY_USER, GET_EXCHANGES, GET_EXPIRY, GET_INSTRUMENTS, GET_PENDING_ORDERS_USER, GET_PRODUCTS, ORDER } from '../../utils/API';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const [show, setshow] = useState(false);
  const [websocketData, setwebsocketData] = useState({
    "_id": "0x1234",
    "Exchange": "Exchange",
    "InstrumentIdentifier": "Instrument",
    "LastTradeTime": "0000.00",
    "ServerTime": "0000",
    "AverageTradedPrice": "0000.00",
    "BuyPrice": "0000.00",
    "BuyQty": "0",
    "Close": "0000.00",
    "High": "0000.00",
    "Low": "0000.00",
    "LastTradePrice": "0000.00",
    "LastTradeQty": "0000.00",
    "Open": "0000.00",
    "OpenInterest": "0000",
    "QuotationLot": "0000",
    "SellPrice": "0000.00",
    "SellQty": "0",
    "TotalQtyTraded": "0000",
    "Value": "0000.00",
    "PreOpen": "false",
    "PriceChange": "0000",
    "PriceChangePercentage": "00.00",
    "OpenInterestChange": "0000",
    "MessageType": "RealtimeResult",
    "__v": 0
  });
  const [exchange, setexchange] = useState();
  const [activeTab, setActiveTab] = useState('market');
  const [orderQty, setorderQty] = useState(0);
  const [clientItem, setclientItem] = useState();

  const [selectedOption, setSelectedOption] = useState('');
  const [searchTable, setsearchTable] = useState();
  const [instrument, setInstrument] = useState([]);
  const [identifier, setIdentifier] = useState([]);
  const [identifierName, setIdentifierName] = useState();
  const [exchangeArray, setExchangeArray] = useState([]);
  const [dropdownValue, setdropdownValue] = useState("");

  const [clientArray, setClientArray] = useState([]);
  const [expiry, setExpiry] = useState();
  const [limitValue, setLimitValue] = useState();
  const [sort, setSort] = useState();
  const [orderArray, setOrderArray] = useState([]);
  const [finalArray, setFinalArray] = useState([]);



  useEffect(() => {
    fetchUsers();
  }, []);



  const fetchUsers = async () => {
    const res = await ADMIN_USERS(username);
    setClientArray(res.users);
  }



  useEffect(() => {
    const fetchExchange = async () => {
      try {
        const res = await GET_EXCHANGES();
        setExchangeArray(res.data);
      } catch (error) {
        console.log(error)
      }
    };

    fetchExchange();
  }, []);



  useEffect(() => {
    const fetchData = async () => {
      if (selectedOption && selectedOption !== "Exchange") {
        try {
          const res = await GET_INSTRUMENTS(selectedOption);
          setIdentifier(res.data);
        } catch (error) {
          console.log(error);
        }
      }
      else {
        setsearchTable()
      }
    };

    fetchData();
  }, [selectedOption]);



  useEffect(() => {
    const fetchData = async () => {
      if (identifierName) {
        try {
          const res = await GET_PRODUCTS(selectedOption, identifierName);
          setInstrument(res.data);
        } catch (error) {
          console.log(error);
        }
      }
      else {
        setInstrument([]);
        setsearchTable()
      }
    };

    fetchData();
  }, [identifierName]);



  useEffect(() => {
    searchTableAPIcall();
  }, [dropdownValue])



  const searchTableAPIcall = async () => {

    try {
      const res = await GET_EXPIRY(selectedOption, identifierName, dropdownValue);
      setsearchTable(res.data);
    } catch (error) {
      console.log(error);
    }
  };



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





  const getwebsocket = () => {
    const socket = new WebSocket('ws://52.66.105.29:8000');

    socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    socket.onmessage = async (event) => {
      const data = event.data;
      const parseData = (data) => {
        try {
          const parsedData = JSON.parse(`[${data}]`);
          return parsedData;
        } catch (error) {
          console.error('Error parsing data:', error);
          return [];
        }
      };

      const parsedArray = parseData(data);
      setwebsocketData(parsedArray[0]);
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };
  }


  const subadminOrderQty = (e) => {
    setorderQty(e.target.value);
  }



  const handleClientChange = (e) => {
    setclientItem(e.target.value);
  }



  const handleClientBuy = async (order_type) => {

    function convertDateToUnixTime(dateString) {
      const months = {
        JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5,
        JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11
      };

      const day = parseInt(dateString.substring(0, 2));
      const monthStr = dateString.substring(2, 5);
      const month = months[monthStr];
      const year = parseInt(dateString.substring(5, 9));
      const date = new Date(year, month, day);
      const unixTime = date.getTime();

      return unixTime;
    }

    const unixTime = convertDateToUnixTime(expiry);

    const type = activeTab == 'market' ? "market" : "limit";
    const price = activeTab == 'market' ? websocketData.SellPrice : limitValue;

    const res = await ORDER(clientItem, orderQty, dropdownValue, selectedOption, price, unixTime, order_type, type, websocketData);
    toast.info(res.message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      hideProgressBar: false,
      pauseOnHover: true,
    });
  }



  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };



  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };



  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "8rem",
      borderRadius: 8,
      borderColor: state.isFocused ? '#9d58ff' : '#ced4da',
      boxShadow: state.isFocused ? '0 0 0 0.2rem #c67bff' : 'none',
      '&:hover': {
        borderColor: '#80bdff',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#c67bff' : 'transparent',
      color: state.isFocused ? '#fff' : '#333',
      '&:hover': {
        backgroundColor: '#c67bff',
        color: '#fff',
      },
    }),
  };
  const customStyles1 = {
    control: (provided, state) => ({
      ...provided,
      width: "9rem",
      borderRadius: 8,
      borderColor: state.isFocused ? '#9d58ff' : '#ced4da',
      boxShadow: state.isFocused ? '0 0 0 0.2rem #c67bff' : 'none',
      '&:hover': {
        borderColor: '#80bdff',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#c67bff' : 'transparent',
      color: state.isFocused ? '#fff' : '#333',
      '&:hover': {
        backgroundColor: '#c67bff',
        color: '#fff',
      },
    }),
  };



  const identifierOptions = identifier?.map((item) => ({
    value: item,
    label: item
  }));

  const instrumentOptions = instrument?.map((item) => ({
    value: item,
    label: item
  }));




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

      <div className="card-body">
        <form className="form-inline">

          <button type="submit" className="btn btn-gradient-primary mb-2" onClick={(e) => { e.preventDefault(); setshow(!show) }}>Place New Order</button>
        </form>
      </div>

      <div className="col-12 grid-margin stretch-card" style={{ display: show ? 'block' : 'none' }}>
        <div className="card">
          <div className="card-body">


            <form className="form-inline">




              <div style={{ paddingLeft: 0 }} className='select orderbook-select input-group mb-2 mr-sm-1 col-md-10 col-lg-6 col-xl-2'>
                <select onChange={handleOptionChange} name="slct" id="slct">
                  <option>Exchange</option>
                  {exchangeArray?.map((entry) => {
                    return (
                      <option>{entry}</option>
                    )
                  })}
                </select>
              </div>

              <div className="input-group mb-2 mr-sm-1 col-md-10 col-lg-6 col-xl-2">
                <Select
                  options={identifierOptions}
                  isSearchable={true}
                  placeholder="Identifier"
                  styles={customStyles}
                  onChange={(selected) => { setsearchTable(); setIdentifierName(selected.value); }}
                />
              </div>

              <div style={{ paddingLeft: "2.5rem" }} className="input-group mb-2 mr-sm-1 col-md-10 col-lg-6 col-xl-3">
                <Select
                  options={instrumentOptions}
                  isSearchable={true}
                  placeholder="Instrument"
                  styles={customStyles1}
                  onChange={(selected) => { setsearchTable(); setdropdownValue(selected.value); }}
                />
              </div>

              <div style={{ paddingLeft: 0 }} className='select orderbook-select input-group mb-2 mr-sm-1 col-md-10 col-lg-6 col-xl-2'>
                <select onChange={(e) => setExpiry(e.target.value)} id="search_symboll_expiry_orderbook">
                  <option value="none">Get Expiry</option>
                  {searchTable && searchTable.map((entry) => {
                    return (
                      <option value={entry}>{entry}</option>
                    )
                  })}
                </select>
              </div>



              <button type="submit" onClick={(e) => { e.preventDefault(); getwebsocket(); }} className="btn btn-gradient-primary mb-2">Get Live Price</button>


            </form>


            <form className="form-inline">

              {/* <div className="input-group mb-2 mr-sm-1 col-md-10 col-lg-6 col-xl-3">                    */}

              <nav className="nav nav-tabs consize" role="tablist">
                <div>
                  <div className="tab-buttons">
                    <button
                      className={`tab-button ${activeTab === 'market' ? 'active' : ''}`}
                      onClick={(e) => { e.preventDefault(); handleTabClick('market') }}
                    >
                      <span>Market</span>
                    </button>
                    <button
                      className={`tab-button ${activeTab === 'limit' ? 'active' : ''}`}
                      onClick={(e) => { e.preventDefault(); handleTabClick('limit') }}
                    >
                      Limit
                    </button>
                  </div>
                  <div className="tab-content" style={{ padding: "1rem 0rem 0.5rem" }}>
                    {activeTab === 'market' && (
                      <>
                        <div style={{ display: "flex", justifyContent: "space-around", color: "#333", textAlign: "center" }}>
                          <p>:: Buy :: <br /> {websocketData.BuyPrice}</p>
                          <p>:: Sell :: <br /> {websocketData.SellPrice}</p>
                        </div>
                      </>
                    )}
                    {activeTab === 'limit' && (
                      <>
                        <div style={{ textAlign: "center" }}>
                          <input onChange={(e) => setLimitValue(e.target.value)} type='number' style={{ width: "9rem" }} placeholder='Limit' min="0" />
                        </div>
                      </>
                    )}
                  </div>
                </div>

              </nav>

              <div className="input-group mb-2 mr-sm-1  col-md-10 col-lg-6 col-xl-3">

                <select className="form-control" onChange={handleClientChange} id="subadmin_place_order_usercode"  >
                  <option value="all" selected disabled>Clients (All)</option>
                  {clientArray?.map((entry) => {

                    return (
                      <option value={entry.username}>{entry.username}</option>
                    )
                  })}
                </select>
              </div>

              <div className="input-group mb-2 mr-sm-1 col-md-10 col-lg-6 col-xl-3">
                <input type="number" onChange={subadminOrderQty} className="form-control" id="subadmin_order_qty" min="0" placeholder="Order Quantity" />
              </div>

              <button type="submit" onClick={(e) => { e.preventDefault(); handleClientBuy("buy"); }} className="btn btn-success mb-2 " >Buy</button>
              <button type="submit" onClick={(e) => { e.preventDefault(); handleClientBuy("sell"); }} className="btn btn-danger mb-2" >Sell</button>





            </form>


          </div>


        </div>
      </div>

      <div className="col-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <form className="form-inline">

              <select className="form-control mb-2 mr-sm-2 col-md-10 col-lg-6 col-xl-3" >

                <option selected disabled>Select Admin</option>
                <option value="admin1">Admin 1</option>
                <option value="admin2">Admin 2</option>
                <option value="admin3">Admin 3</option>
                <option value="admin4">Admin 4</option>
              </select>

              <select className="form-control mb-2 mr-sm-2 col-md-10 col-lg-6 col-xl-3" >
                <option value="clients1">Clients 1</option>
                <option value="clients2">Clients 2</option>
                <option value="clients3">Clients 3</option>
                <option value="clients4">Clients 4</option>
              </select>

              <select onChange={(e) => setSort(e.target.value)} className="form-control mb-2 mr-sm-2 col-md-10 col-lg-6 col-xl-3" >

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
              {/* <p className="card-description"> Add className <code>.table-striped</code>
                </p> */}
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
  // }
}

export default OrderBook
