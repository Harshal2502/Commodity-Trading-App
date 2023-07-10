import React, { useEffect, useState, useRef } from "react";
import WatchlistContent from "./WatchlistContent";
import Modal from "react-modal";
import Select from "react-select";
import { useSelector } from "react-redux";
import {
  GET_EXCHANGES,
  GET_EXPIRY,
  GET_INSTRUMENTS,
  GET_PRODUCTS,
  GET_WATCHLIST,
  SET_WATCHLIST,
  GET_PRODUCTS_SINGLE,
  GET_CALL_PUT,
  GET_STRIKE_PRICE,
} from "../../utils/API";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DummyContent } from "../shared/DummyContent";



const WEBSOCKET_URL = "ws://52.66.105.29:8000";



const Dashboard = () => {


  const { username } = useSelector((state) => {
    if (!state) {
      return {
        username: null,
      };
    }
    return {
      username: state.username,
    };
  });



  const [userTable, setuserTable] = useState([]);
  const [exchange, setExchange] = useState({
    currentExchange: "",
    exchangeArray: [],
  });
  const [identifier, setIdentifier] = useState({
    currentIdentifier: "",
    identifierArray: [],
  });
  const [instrument, setInstrument] = useState({
    currentInstrument: "",
    instrumentArray: [],
  });
  const [callput, setcallput] = useState({
    currentCallput: "",
    callputArray: [],
  });




  const [expiry, setExpiry] = useState({ currentExpiry: "", expiryArray: [] });
  const [strike, setStrike] = useState({ currentStrike: "", strikeArray: [] });
  const [width, setWidth] = useState(window.innerWidth);
  const [PL, setPL] = useState();
  const [balance, setBalance] = useState()
  const [previousPrices, setPreviousPrices] = useState([]);

  const [loadingState, setLoadingState] = useState({
    loading: false,
    dropdownLoad: false,
    dropdownLoad1: false,
    loadingTable: false,
  });

  const [websocketArray, setwebsocketArray] = useState();
  const [colorClass, setColorClass] = useState([]);
  const [colorClass1, setColorClass1] = useState([]);
  const [colorClass2, setColorClass2] = useState([]);



  const selectInputRef = useRef();
  const selectInputRef1 = useRef();
  const selectInputRef2 = useRef();
  const selectInputRef3 = useRef();
  const selectInputRef4 = useRef();




  const updateWidth = () => {
    setWidth(window.innerWidth);
  };




  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    fetchWatchlist();
    fetchExchange();
  }, []);

  const fetchWatchlist = async () => {
    try {
      const res = await GET_WATCHLIST(username);
      setuserTable(res);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchExchange = async () => {
    try {
      const res = await GET_EXCHANGES();
      setExchange((prevState) => ({ ...prevState, exchangeArray: res.data }));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {

      selectInputRef.current.select.clearValue();
      selectInputRef1.current.select.clearValue();
      selectInputRef2.current.select.clearValue();

      setExpiry((prevState) => ({ currentExpiry: null, expiryArray: [] }))

      try {
        if (
          exchange.currentExchange &&
          exchange.currentExchange !== "Exchange"
        ) {
          setLoadingState((prevState) => ({
            ...prevState,
            dropdownLoad: true,
          }));

          const res = await GET_INSTRUMENTS(exchange.currentExchange);
          setIdentifier((prevState) => ({
            ...prevState,
            identifierArray: res.data,
          }));
          setLoadingState((prevState) => ({
            ...prevState,
            dropdownLoad: false,
          }));
        } else {
          // setsearchTable();
        }
        if (exchange.currentExchange && exchange.currentExchange == "NSE") {
          const res = await GET_PRODUCTS_SINGLE(exchange.currentExchange);
          setInstrument((prevState) => ({
            ...prevState,
            instrumentArray: res.data,
          }));

          setLoadingState((prevState) => ({
            ...prevState,
            dropdownLoad1: false,
          }));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    setInstrument({ currentInstrument: "", instrumentArray: [] });
    setIdentifier({ currentIdentifier: "", identifierArray: [] });
  }, [exchange.currentExchange]);

  useEffect(() => {


    const fetchData = async () => {

      selectInputRef.current.select.clearValue();
      selectInputRef2.current.select.clearValue();

      if (exchange.currentExchange && identifier.currentIdentifier) {
        setLoadingState((prevState) => ({ ...prevState, dropdownLoad1: true }));

        try {
          const res = await GET_PRODUCTS(
            exchange.currentExchange,
            identifier.currentIdentifier
          );
          setInstrument((prevState) => ({
            ...prevState,
            instrumentArray: res.data,
          }));

          setLoadingState((prevState) => ({
            ...prevState,
            dropdownLoad1: false,
          }));
        } catch (error) {
          console.log(error);
        }
      } else {
        setInstrument({ currentInstrument: "", instrumentArray: [] });
        // setsearchTable();
      }
    };

    fetchData();
  }, [identifier.currentIdentifier]);

  useEffect(() => {

    const fun = async () => {

      selectInputRef.current.select.clearValue();

      if (identifier.currentIdentifier === "OPTIDX") {
        selectInputRef3.current.select.clearValue();
        selectInputRef4.current.select.clearValue();
      }

      if (identifier.currentIdentifier === "OPTIDX") {
        try {
          const res = await GET_CALL_PUT(
            exchange.currentExchange,
            identifier.currentIdentifier,
            instrument.currentInstrument
          );
          setcallput((prevState) => ({ ...prevState, callputArray: res.data }));
        } catch (err) {
          console.log(err);
        }
      }
    };

    fun();
    if (identifier.currentIdentifier !== "OPTIDX") searchTableAPIcall();
  }, [instrument.currentInstrument]);

  useEffect(() => {

    const fun = async () => {

      if (identifier.currentIdentifier === "OPTIDX") {
        selectInputRef4.current.select.clearValue();
        selectInputRef.current.select.clearValue();
      }

      if (exchange.currentExchange === "NFO") {
        try {
          const res = await GET_STRIKE_PRICE(
            exchange.currentExchange,
            identifier.currentIdentifier,
            instrument.currentInstrument,
            callput.currentCallput
          );
          setStrike((prevState) => ({ ...prevState, strikeArray: res.data }));
        } catch (err) {
          console.log(err);
        }
      }
    };

    fun();
  }, [callput.currentCallput]);

  useEffect(() => {
    const socket = new WebSocket(WEBSOCKET_URL);

    socket.onopen = () => {
      console.log("WebSocket connection established");
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
      setwebsocketArray(parsedArray);
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      socket.close();
    };
  }, []);

  useEffect(() => {
    if (websocketArray) {
      const updatedPrices = websocketArray.map((entry) => {
        return {
          buyPrice: entry.BuyPrice,
          sellPrice: entry.SellPrice,
          LastTradePrice: entry.LastTradePrice,
        };
      });
      setPreviousPrices(updatedPrices);
    }
  }, [websocketArray]);

  useEffect(() => {
    fetchWatchlist();
  }, [websocketArray?.length]);

  const checkDiff = (entry, index) => {
    if (previousPrices && previousPrices[index]) {
      if (entry.BuyPrice > previousPrices[index].buyPrice) {
        setColorClass((prevColorClass) => {
          const updatedColorClass = [...prevColorClass];
          updatedColorClass[index] = "increase";
          return updatedColorClass;
        });
      } else if (entry.BuyPrice < previousPrices[index].buyPrice) {
        setColorClass((prevColorClass) => {
          const updatedColorClass = [...prevColorClass];
          updatedColorClass[index] = "decrease";
          return updatedColorClass;
        });
      } else {
        setColorClass((prevColorClass) => {
          const updatedColorClass = [...prevColorClass];
          updatedColorClass[index] = "";
          return updatedColorClass;
        });
      }

      if (entry.SellPrice > previousPrices[index].sellPrice) {
        setColorClass1((prevColorClass1) => {
          const updatedColorClass1 = [...prevColorClass1];
          updatedColorClass1[index] = "increase";
          return updatedColorClass1;
        });
      } else if (entry.SellPrice < previousPrices[index].sellPrice) {
        setColorClass1((prevColorClass1) => {
          const updatedColorClass1 = [...prevColorClass1];
          updatedColorClass1[index] = "decrease";
          return updatedColorClass1;
        });
      } else {
        setColorClass1((prevColorClass1) => {
          const updatedColorClass1 = [...prevColorClass1];
          updatedColorClass1[index] = "";
          return updatedColorClass1;
        });
      }

      if (entry.LastTradePrice > previousPrices[index].LastTradePrice) {
        setColorClass2((prevColorClass2) => {
          const updatedColorClass2 = [...prevColorClass2];
          updatedColorClass2[index] = "increase";
          return updatedColorClass2;
        });
      } else if (entry.LastTradePrice < previousPrices[index].LastTradePrice) {
        setColorClass2((prevColorClass2) => {
          const updatedColorClass2 = [...prevColorClass2];
          updatedColorClass2[index] = "decrease";
          return updatedColorClass2;
        });
      } else {
        setColorClass2((prevColorClass2) => {
          const updatedColorClass2 = [...prevColorClass2];
          updatedColorClass2[index] = "";
          return updatedColorClass2;
        });
      }
    }
  };

  useEffect(() => {
    if (websocketArray) {
      websocketArray.forEach((entry, index) => {
        checkDiff(entry, index);
      });
    }
  }, [websocketArray]);


  // useEffect(() => {
  //   const socket = new WebSocket("ws://52.66.105.29:8020");

  //   socket.onopen = () => {
  //     console.log("Balance Connection Established");
  //     socket.send(username);
  //   };

  //   const parseData = (data) => {
  //     try {
  //       const parsedData = JSON.parse(`[${data}]`);
  //       return parsedData;
  //     } catch (error) {
  //       console.error("Error parsing data:", error);
  //       return [];
  //     }
  //   };

  //   socket.onmessage = async (event) => {
  //     const data = event.data;
  //     const parsedArray = parseData(data);
  //     setPL(parsedArray[0]?.weeklyPL);
  //     setBalance(parsedArray[0]?.availableBalance.currentbalance);
  //   };

  //   socket.onclose = () => {
  //     console.log("Balance Connection Closed");
  //   };

  //   return () => {
  //     socket.close();
  //   };
  // }, [username]);

  const exchangeOptions = exchange.exchangeArray?.map((item) => ({
    value: item,
    label: item,
  }));

  const identifierOptions = identifier.identifierArray?.map((item) => ({
    value: item,
    label: item,
  }));

  const instrumentOptions = instrument.instrumentArray?.map((item) => ({
    value: item,
    label: item,
  }));

  const cepeOptions = callput.callputArray?.map((item) => ({
    value: item,
    label: item,
  }));

  const strikeOptions = strike.strikeArray?.map((item) => ({
    value: item,
    label: item,
  }));

  const expiryOptions = expiry.expiryArray && expiry.expiryArray?.map((item) => ({
    value: item,
    label: item,
  }));

  const loadingOption = [
    {
      value: "loading",
      label: "Loading...",
    },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: 8,
      borderColor: state.isFocused ? "#9d58ff" : "#ced4da",
      boxShadow: state.isFocused ? "0 0 0 0.2rem #c67bff" : "none",
      "&:hover": {
        borderColor: "#80bdff",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#c67bff" : "transparent",
      color: state.isFocused ? "#fff" : "#333",
      "&:hover": {
        backgroundColor: "#c67bff",
        color: "#fff",
      },
    }),
  };

  const searchTableAPIcall = async () => {

    setLoadingState((prevState) => ({ ...prevState, loading: true }));

    try {
      const res = await GET_EXPIRY(
        exchange.currentExchange,
        identifier.currentIdentifier,
        instrument.currentInstrument
      );
      setExpiry((prevState) => ({ ...prevState, expiryArray: res.data }));

      setLoadingState((prevState) => ({ ...prevState, loading: false }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleWatchlistAction = async (expiry) => {

    setLoadingState((prevState) => ({ ...prevState, loadingTable: true }));
    const res = await SET_WATCHLIST(
      username,
      expiry,
      exchange.currentExchange,
      identifier.currentIdentifier,
      instrument.currentInstrument,
      callput.currentCallput,
      strike.currentStrike
    );
    fetchWatchlist();

    setLoadingState((prevState) => ({ ...prevState, loadingTable: false }));

  };


  return (
    <div>
      {width < 768 ? (
        <div
          style={{
            color: "white",
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
            marginBottom: "20px",
            marginTop: "10px",
          }}
        >
          <div className="" style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
            <span style={{ color: "#ae66ff", fontWeight: "bold" }}> Weekly PL : </span> <span style={{ fontWeight: "bold" }}>{PL}</span>
          </div>
          <div
            className=""
            style={{
              fontSize: "14px",
              marginLeft: "10px",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ color: "#ae66ff", fontWeight: "bold" }}>Balance : </span> <span style={{ fontWeight: "bold" }}>{balance}</span>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="page-header">
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white mr-2">
            <i className="mdi mdi-view-module"></i>
          </span>{" "}
          MarketWatch <span className="removespc">Live Market</span>
        </h3>
      </div>

      {/* <Modal
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
          </div> */}

      <div
        className="settings-second-div row"
        style={{ justifyContent: "flex-start" }}
      >
        {/* <div className={exchange.currentExchange === "NFO" || exchange.currentExchange === "NSE" ? ' select col-md-4' : "select col-md-3"}>
          <elect onChange={(e) => { const value = e.target.value; setExchange((prevState) => ({ ...prevState, currentExchange: value })) }} name="slct" id="slct">
            <option>Exchange</option>

            {exchange.exchangeArray?.map((entry) => {
              return (
                <option>{entry}</option>
              )
            })}
          </select>
        </div> */}

        <div
          className={
            exchange.currentExchange === "NFO" ||
              exchange.currentExchange === "NSE"
              ? "col-md-2 mt-1 col-4"
              : "col-md-2 mt-1 col-4"
          }
          style={{
            padding: "5px 3px",
          }}
        >
          <Select
            options={
              loadingState.dropdownLoad1 ? loadingOption : exchangeOptions
            }
            isSearchable={true}
            placeholder="Exchange"
            styles={customStyles}
            onChange={(selected) => {
              // setsearchTable();
              setExchange((prevState) => ({
                ...prevState,
                currentExchange: selected?.value,
              }));
            }}
          />
        </div>

        {exchange.currentExchange == "NSE" ? (
          <div></div>
        ) : (
          <div
            className={
              exchange.currentExchange === "NFO" ||
                exchange.currentExchange === "NSE"
                ? "col-md-2 mt-1 col-4"
                : "col-md-2 mt-1 col-4"
            }
            style={{
              padding: "5px 3px",
            }}
          >
            <Select
              ref={selectInputRef1}
              options={
                loadingState.dropdownLoad ? loadingOption : identifierOptions
              }
              isSearchable={true}
              placeholder="Identifier"
              styles={customStyles}
              onChange={(selected) => {
                // setsearchTable();
                setIdentifier((prevState) => ({
                  ...prevState,
                  currentIdentifier: selected?.value,
                }));
              }}
            />
          </div>
        )}

        <div
          className={
            exchange.currentExchange === "NFO" ||
              exchange.currentExchange === "NSE"
              ? "col-md-2 mt-1 col-4"
              : "col-md-2 mt-1 col-4"
          }
          style={{
            padding: "5px 3px",
          }}
        >
          <Select
            ref={selectInputRef2}
            options={
              loadingState.dropdownLoad1 ? loadingOption : instrumentOptions
            }
            isSearchable={true}
            placeholder="Instrument"
            styles={customStyles}
            onChange={(selected) => {
              // setsearchTable();
              setInstrument((prevState) => ({
                ...prevState,
                currentInstrument: selected?.value,
              }));
            }}
          />
        </div>

        {(exchange.currentExchange === "NFO" && identifier.currentIdentifier === "OPTIDX") && (
          <>
            <div
              className="col-md-1 mt-1 col-4"
              style={{
                padding: "5px 3px",
              }}
            >
              <Select
                ref={selectInputRef3}
                options={
                  loadingState.dropdownLoad1 ? loadingOption : cepeOptions
                }
                isSearchable={true}
                placeholder="CE/PE"
                styles={customStyles}
                onChange={(selected) => {
                  setcallput((prevState) => ({
                    ...prevState,
                    currentCallput: selected?.value,
                  }));
                }}
              />
            </div>

            <div
              className="col-md-2 mt-1 col-4"
              style={{
                padding: "5px 3px",
              }}
            >
              <Select
                ref={selectInputRef4}
                options={
                  loadingState.dropdownLoad1 ? loadingOption : strikeOptions
                }
                isSearchable={true}
                placeholder="Strike"
                styles={customStyles}
                onChange={(selected) => {
                  searchTableAPIcall();
                  selectInputRef.current.select.clearValue();
                  setStrike((prevState) => ({
                    ...prevState,
                    currentStrike: selected?.value,
                  }));
                }}
              />
            </div>
          </>
        )}

        {exchange.currentExchange !== "NSE" &&
          <div
            className="col-md-2 mt-1"
            style={{
              padding: "5px 3px",
            }}
          >
            <Select
              ref={selectInputRef}
              options={loadingState.loading ? loadingOption : expiryOptions}
              isSearchable={true}
              placeholder="Expiry"
              styles={customStyles}
              onChange={(selected) => {
                setExpiry((prevState) => ({ ...prevState, currentExpiry: selected?.value }))
              }}
            />
          </div>}

        <div className="d-flex" style={{ alignContent: "center" }}>
          <img
            style={{ width: "50px", cursor: "pointer" }}
            src={require("../../assets/images/plus.svg")}
            alt="+"
            onClick={() => {
              if (expiry.currentExpiry && exchange.currentExchange !== "NSE") { handleWatchlistAction(expiry.currentExpiry) } else if (exchange.currentExchange === "NSE" && instrument.currentInstrument) { handleWatchlistAction("-") } else {
                toast.error("Invalid Entry", {
                  position: toast.POSITION.TOP_RIGHT,
                  autoClose: 3000,
                  hideProgressBar: false,
                  pauseOnHover: true,
                });
              }
            }}
          />
        </div>
      </div>

      {/* <div className='settings-table'>
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
                    {searchTable && searchTable.map((entry) => {
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
      </div> */}

      {/* <div className='settings-table-2'>
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
                          <th> Instrument </th>
                          <th> Product </th>
                          <th> Call / Put </th>
                          <th> Strike Price </th>
                          <th> Expiry </th>
                          <th>  </th>
                        </tr>
                      </thead>
                      <tbody>


                        {userTable && userTable.length > 0 ? (
                          userTable.map((entry, index) => {

                            return (
                              <tr key={index}>
                                <td>{entry.exchange ?? "-"}</td>
                                <td>{entry.instrument ?? "-"}</td>
                                <td>{entry.product ?? "-"}</td>
                                <td>{entry.call_put ?? "-"}</td>
                                <td>{entry.strikePrice ?? "-"}</td>
                                <td>{entry.expiry ?? "-"}</td>
                                <td>
                                  <button
                                    onClick={() => { handleWatchlistRemove(entry) }}
                                    style={{ color: "red", background: "transparent", border: "none" }}
                                  >
                                    Remove
                                  </button>
                                </td>
                              </tr>
                            );
                          })
                        ) : (userTable.length === 0 ?
                          <>
                            <td>-</td>
                            <td>Your Watchlist is empty</td>
                            <td>-</td>
                          </>
                          :
                          <div style={{ textAlign: "center" }}>
                            <span className='loader'></span>
                          </div>
                        )}


                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

      {/* </>
      </Modal> */}

      {width > 700 && (
        <div
          className="page-header"
          style={{
            margin: "1.5rem 0 1rem 0",
          }}
        >
          <h3
            className="page-title"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              fontSize: "12px",
            }}
          >
            <div style={{ width: "105px" }}>SCRIPT</div>
            <div>BID RATE</div>
            <div>ASK RATE</div>
            <div>LTP</div>
            <div>CHANGE%</div>
            <div>NET CHANGE</div>
            <div>HIGH</div>
            <div>LOW</div>
            <div>OPEN</div>
            <div>CLOSE</div>
            <div>REMOVE</div>
          </h3>
        </div>
      )}

      {loadingState.loadingTable && <div style={{ textAlign: "center" }}><span className="loader"></span></div>}

      <section className="content" id="marketwatch_content">
        {websocketArray && websocketArray.length !== 0 ? (
          websocketArray.map((entry, index) => {
            const dateObj = new Date(userTable[index]?.expiredat);
            const day = dateObj.getDate();
            const month = dateObj
              .toLocaleString("default", { month: "short" })
              .toUpperCase();
            const year = dateObj.getFullYear();

            const formattedDate = `${day}${month}${year}`;

            return (
              <WatchlistContent
                colorClass={colorClass}
                colorClass1={colorClass1}
                colorClass2={colorClass2}
                entry={entry}
                index={index}
                key={index}
                formattedDate={formattedDate}
                userTable={userTable}
              />
            );
          })
        ) : userTable && userTable.length !== 0 ? (
          userTable.map(() => {
            return <DummyContent />
          })
        ) : userTable.length === 0 ? (
          <></>
        ) : (
          <div style={{ textAlign: "center" }}>
            <span className="loader"></span>
          </div>
        )}
      </section>
    </div>
  );
};
export default Dashboard;
