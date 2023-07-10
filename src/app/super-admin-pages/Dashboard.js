import WatchlistContent from './WatchlistContent';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Select from 'react-select';
import { useSelector } from 'react-redux';
import { GET_EXCHANGES, GET_EXPIRY, GET_INSTRUMENTS, GET_PRODUCTS, GET_WATCHLIST, ORDER, SET_WATCHLIST } from '../../utils/API';

const WEBSOCKET_URL = 'ws://52.66.105.29:8000';

const Dashboard = () => {

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

  const [userTable, setuserTable] = useState([]);
  const [modal, setModal] = useState(false);
  const [settingmodal, setSettingmodal] = useState(false);
  const [exchange, setExchange] = useState({ currentExchange: '', exchangeArray: [] });
  const [identifier, setIdentifier] = useState({ currentIdentifier: '', identifierArray: [] });
  const [instrument, setInstrument] = useState({ currentInstrument: '', instrumentArray: [] });
  const [searchTable, setsearchTable] = useState();

  const [loadingState, setLoadingState] = useState({
    loading: false,
    dropdownLoad: false,
    dropdownLoad1: false,
    loadingTable: false,
  });

  const [websocketArray, setwebsocketArray] = useState();
  const [colorClass, setColorClass] = useState('');
  const [colorClass1, setColorClass1] = useState('');
  const [colorClass2, setColorClass2] = useState('');

  const websocketData = [{
    "_id": "0x1234",
    "Exchange": "MCX",
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
  }]

  useEffect(() => {
    fetchWatchlist();
    fetchExchange();
  }, []);

  const fetchWatchlist = async () => {
    try {
      const res = await GET_WATCHLIST(username);
      setuserTable(res);
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  };

  const fetchExchange = async () => {
    try {
      const res = await GET_EXCHANGES();
      setExchange((prevState) => ({ ...prevState, exchangeArray: res.data }));
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {

        if (exchange.currentExchange && exchange.currentExchange !== "Exchange") {

          setLoadingState((prevState) => ({ ...prevState, dropdownLoad: true }));

          const res = await GET_INSTRUMENTS(exchange.currentExchange);
          setIdentifier((prevState) => ({ ...prevState, identifierArray: res.data }));
          setLoadingState((prevState) => ({ ...prevState, dropdownLoad: false }));
        }
        else {
          setsearchTable();
        }
      }
      catch (error) {
        console.log(error);
      }
    };

    fetchData();
    setsearchTable();
    setInstrument({ currentInstrument: '', instrumentArray: [] });
    setIdentifier({ currentIdentifier: '', identifierArray: [] });
  }, [exchange.currentExchange]);

  useEffect(() => {
    const fetchData = async () => {

      if (exchange.currentExchange && identifier.currentIdentifier) {
        setLoadingState((prevState) => ({ ...prevState, dropdownLoad1: true }));

        try {
          const res = await GET_PRODUCTS(exchange.currentExchange, identifier.currentIdentifier)
          setInstrument((prevState) => ({ ...prevState, instrumentArray: res.data }));

          setLoadingState((prevState) => ({ ...prevState, dropdownLoad1: false }));
        } catch (error) {
          console.log(error);
        }
      }
      else {
        setInstrument({ currentInstrument: '', instrumentArray: [] });
        setsearchTable();
      }
    };

    fetchData();
  }, [identifier.currentIdentifier]);

  useEffect(() => {
    const socket = new WebSocket(WEBSOCKET_URL);

    socket.onopen = () => {
      console.log('WebSocket connection established');
      socket.send(username);
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

      // parsedArray.map((entry, index) => {

      // console.log(entry.BuyPrice)
      // websocketArray && console.log(websocketArray[index].BuyPrice)

      // if (entry.BuyPrice > websocketArray[index].BuyPrice) setColorClass("increase");
      // else if (entry.BuyPrice < websocketArray[index].BuyPrice) setColorClass("decrease");
      // else setColorClass("");

      // if (entry.SellPrice > websocketArray[index].SellPrice) setColorClass1("increase");
      // else if (entry.SellPrice < websocketArray[index].SellPrice) setColorClass1("decrease");
      // else setColorClass1("");

      // if (entry.LastTradePrice > websocketArray[index].LastTradePrice) setColorClass2("increase");
      // else if (entry.LastTradePrice < websocketArray[index].LastTradePrice) setColorClass2("decrease");
      // else setColorClass2("decrease");
      // })

      setwebsocketArray(parsedArray);
      // console.log(websocketArray)
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      socket.close();
    };
  }, []);

  const identifierOptions = identifier.identifierArray?.map((item) => ({
    value: item,
    label: item
  }));

  const instrumentOptions = instrument.instrumentArray?.map((item) => ({
    value: item,
    label: item
  }));

  const loadingOption = [{
    value: "loading",
    label: "Loading..."
  }]

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
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

  const searchTableAPIcall = async () => {

    setLoadingState((prevState) => ({ ...prevState, loading: true }));
    try {
      const res = await GET_EXPIRY(exchange.currentExchange, identifier.currentIdentifier, instrument.currentInstrument);

      setsearchTable(res.data);
      setLoadingState((prevState) => ({ ...prevState, loading: false }));
    } catch (error) {
      console.log(error);
    }
  };





  const handleWatchlistAction = async (expiry, action) => {
    setLoadingState((prevState) => ({ ...prevState, loadingTable: true }));

    websocketData[0]["Exchange"] = exchange.currentExchange;
    websocketData[0]["InstrumentIdentifier"] = instrument.currentInstrument;

    const res = await SET_WATCHLIST(username, websocketData, expiry, action);
    console.log(res);
    fetchWatchlist();

    setLoadingState((prevState) => ({ ...prevState, loadingTable: false }));
  };




  const handleWatchlistRemove = async (expiry, exchange, symbol, action, index) => {
    setLoadingState((prevState) => ({ ...prevState, loadingTable: true }));

    console.log(expiry);
    // websocketArray[index]["Exchange"] = exchange;
    // websocketArray[index]["InstrumentIdentifier"] = symbol;


    const res = await SET_WATCHLIST(username, websocketArray, expiry, action, symbol);
    console.log(res);
    fetchWatchlist();

    setLoadingState((prevState) => ({ ...prevState, loadingTable: false }));
  };









  return (
    <div>

      <div className="page-header">
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white mr-2">
            <i className="mdi mdi-view-module"></i>
          </span> MarketWatch  <span className="removespc">Live Market</span></h3>
        <nav aria-label="breadcrumb">
          <ul className="breadcrumb">
            <li style={{ cursor: "pointer" }} className="breadcrumb-item active" aria-current="page" onClick={() => setSettingmodal(true)}>
              <span></span>Setting <i className="mdi mdi-settings icon-sm text-primary align-middle"></i>
            </li>
          </ul>
        </nav>
      </div>

      <Modal
        isOpen={settingmodal}
        contentLabel='modal'
        onRequestClose={() => {
          setSettingmodal(false);
          document.body.style.overflow = "auto";
        }}
        style={{
          content: {
            margin: "5% 5% 0% 20%",
            backgroundColor: "#ffffff",
            color: "#111111",
            zIndex: "999",
            padding: "2rem",
          },
          overlay: {
            backgroundColor: "rgba(30, 30, 30, 0.7)",
          },
        }}
      >
        <button
          className="close-btn"
          style={{ top: "2%", right: "2%", position: "absolute" }}
          onClick={() => {
            setSettingmodal(false);
            document.body.style.overflow = "auto";
          }}
        ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg></button>
        <>
          <div className='settings-content-header' >
            <h3>
              Add Script&nbsp;
              <small>Manage MarketWatch Scripts</small>
            </h3>
          </div>

          <div className='settings-second-div row' style={{ justifyContent: "end" }}>
            <div className='select col-md-3'>
              <select onChange={(e) => { const value = e.target.value; setExchange((prevState) => ({ ...prevState, currentExchange: value })) }} name="slct" id="slct">
                <option>Exchange</option>

                {exchange.exchangeArray?.map((entry) => {
                  return (
                    <option>{entry}</option>
                  )
                })}
              </select>
            </div>

            <div className='col-md-3'>
              <Select
                options={loadingState.dropdownLoad ? loadingOption : identifierOptions}
                isSearchable={true}
                placeholder="Identifier"
                styles={customStyles}
                onChange={(selected) => { setsearchTable(); setIdentifier((prevState) => ({ ...prevState, currentIdentifier: selected.value })); }}
              />
            </div>
            <div className='col-md-3'>
              <Select
                options={loadingState.dropdownLoad1 ? loadingOption : instrumentOptions}
                isSearchable={true}
                placeholder="Instrument"
                styles={customStyles}
                onChange={(selected) => { setsearchTable(); setInstrument((prevState) => ({ ...prevState, currentInstrument: selected.value })); }}
              />
            </div>
            <div className='col-md-3'>
              <button style={{ marginLeft: 0 }} onClick={searchTableAPIcall} className='btn'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>&nbsp;Search</button>
            </div>
          </div>

          {
            searchTable &&

            <div className='settings-table'>
              <div className="col-lg-12 grid-margin stretch-card" style={{ marginBottom: "0" }}>
                <div className="card">
                  <div className="" style={{ padding: "1.25rem" }}>
                    <h4 className="card-title">Search Result ({searchTable ? searchTable.length : 0})</h4>
                    {loadingState.loading && <div style={{ textAlign: "center", margin: "1.5rem" }}><span className="loader"></span></div>}
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th> Exchange </th>
                            <th> Script </th>
                            <th> Expiry </th>
                            <th>  </th>
                          </tr>
                        </thead>
                        <tbody>
                          {searchTable.map((entry) => {
                            const rowData = [exchange.currentExchange, instrument.currentInstrument, entry];

                            return (
                              <tr key={entry}>
                                {rowData.map((data, index) => (
                                  <td key={index}>{data}</td>
                                ))}
                                <td>
                                  <button
                                    onClick={() => { handleWatchlistAction(entry, "add"); }}
                                    style={{ color: "blue", background: "transparent", border: "none" }}
                                  >
                                    Add
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }

          <div className='settings-table-2'>
            <div className="col-lg-12 grid-margin stretch-card">
              <div className="card">
                <div className="" style={{ padding: "1.25rem" }}>
                  <h4 className="card-title">Market Watch ({userTable ? userTable.length : 0})</h4>
                  {loadingState.loadingTable && <div style={{ textAlign: "center", margin: "1.5rem" }}><span className="loader"></span></div>}
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th> Exchange </th>
                          <th> Script </th>
                          <th> Expiry </th>
                          <th>  </th>
                        </tr>
                      </thead>
                      <tbody>
                        {userTable && userTable.length > 0 ? (
                          userTable.map((entry, index) => {
                            const dateObj = new Date(entry.expiredat);
                            const day = dateObj.getDate();
                            const month = dateObj.toLocaleString('default', { month: 'short' }).toUpperCase();
                            const year = dateObj.getFullYear();
                            const formattedDate = `${day}${month}${year}`;

                            return (
                              <tr key={index}>
                                <td>{entry.exchange}</td>
                                <td>{entry.symbol}</td>
                                <td>{formattedDate}</td>
                                <td>
                                  <button
                                    onClick={() => { handleWatchlistRemove(formattedDate, entry.exchange, entry.symbol, "remove", index); }}
                                    style={{ color: "red", background: "transparent", border: "none" }}
                                  >
                                    Remove
                                  </button>
                                </td>
                              </tr>
                            );
                          })
                        ) : (
                          <>
                            <td>-</td>
                            <td>Your Watchlist is Empty</td>
                            <td>-</td>
                          </>
                        )}

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </>
      </Modal>

      <section className="content" id="marketwatch_content">
        {
          (websocketArray && websocketArray.length !== 0) ? websocketArray.map((entry, index) => {

            const dateObj = new Date(userTable[index]?.expiredat);
            const day = dateObj.getDate();
            const month = dateObj.toLocaleString('default', { month: 'short' }).toUpperCase();
            const year = dateObj.getFullYear();

            const formattedDate = `${day}${month}${year}`;

            return (
              <WatchlistContent colorClass={colorClass} colorClass1={colorClass1} colorClass2={colorClass2} entry={entry} index={index} key={index} formattedDate={formattedDate} websocketArray={websocketArray} userTable={userTable} />
            )



          }) : (
            (userTable && userTable.length !== 0) ? (
              userTable.map((entry, index) => {
                return (
                  <>
                    <div id="dynamic_mw_data">

                      <div id='mp_theme' className='row script_box mp_theme'>
                        <div className='col-xs-12' onClick={() => setModal(true)} style={{ cursor: "pointer" }}>

                          <div className='watchlist-entry' id='scrip_box_wrapper_number_"+result.instrument_token+"'>
                            <div className='bcfb4-color script_title' style={{ fontSize: "small" }}><span id='up_down_dynamic_aerrow_"+result.instrument_token+"'></span>XXXX XXXX 00XXX0000</div>

                            <div className='row' id='script_profile_id_is_"+result.instrument_token+"' style={{ marginLeft: "0" }} >
                              <div className='col-xs-4 col-lg-4 left_side_mp_theme'>
                                <div id='ltp_single_entity_"+result.instrument_token+"' className='ltp'>0000.00</div>
                                <div id='net_change_single_entity_"+result.instrument_token+"' className='net_change'>+000.00</div>
                              </div>
                              <div className='col-xs-8 col-lg-8 right_side_mp_theme'>
                                <div className='row' style={{ display: "flex", justifyContent: "center" }}>
                                  <div className='col-xs-6 col-lg-3 text-right sell_price_wrapper_mp_theme'>
                                    <div id='sell_price_single_entity_"+result.instrument_token+"' className='sell_price' >0000.00</div>
                                  </div>
                                  <div className='col-xs-6 col-lg-3 text-left buy_price_wrapper_mp_theme'>
                                    <div id='buy_price_single_entity_"+result.instrument_token+"' className='buy_price' >0000.00</div>
                                  </div>
                                </div>
                                <div style={{ color: "#000" }} className='mini_footer_mw_single_entity row'>
                                  <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }} className='mini_footer_mw_single_entity row'>
                                    <div id='open_price_single_entity_"+result.instrument_token+"' className='script_entity col-xs-4 bcfb4-color text-right'><div className='open_price' style={{ fontSize: "small" }}><p>O: 000.0</p></div></div>
                                    <div id='high_price_single_entity_"+result.instrument_token+"' className='script_entity col-xs-4 bcfb4-color text-center'><div className='high_price' style={{ fontSize: "small" }}><p>H: 000.0</p></div></div>
                                    <div id='low_price_single_entity_"+result.instrument_token+"' className='script_entity col-xs-4 bcfb4-color text-left'><div className='low_price' style={{ fontSize: "small" }}><p>L: 000.0</p></div></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })
            ) : (
              <h3>Your Watchlist is Empty</h3>
            )
          )
        }

      </section>

    </div >
  );
}
export default Dashboard;