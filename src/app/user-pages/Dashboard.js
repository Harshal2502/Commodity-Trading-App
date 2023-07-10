import { DummyContent } from './../shared/DummyContent';
import React, { useEffect, useState, useRef } from "react";
import WatchlistContent from "./WatchlistContent";
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
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MobileViewBalances } from './MobileViewBalances';
import { SQTable } from './SQTable';


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

      if (exchange.currentExchange !== "NSE") selectInputRef.current.select.clearValue();
      if (exchange.currentExchange !== "NSE") selectInputRef1.current.select.clearValue();
      selectInputRef2.current.select.clearValue();

      setExpiry(() => ({ currentExpiry: null, expiryArray: [] }))

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
    // setsearchTable();
    setInstrument({ currentInstrument: "", instrumentArray: [] });
    setIdentifier({ currentIdentifier: "", identifierArray: [] });
  }, [exchange.currentExchange]);

  useEffect(() => {


    const fetchData = async () => {

      if (exchange.currentExchange !== "NSE") selectInputRef.current.select.clearValue();
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

      if (exchange.currentExchange !== "NSE") selectInputRef.current.select.clearValue();

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

      if (identifier.currentIdentifier === "OPTIDX" && exchange.currentExchange !== "NSE") {
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

  const loadingOption = [{
    value: "loading",
    label: "Loading..."
  }];

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

      {width < 768 ? <MobileViewBalances /> : <></>}

      <div className="page-header">
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white mr-2">
            <i className="mdi mdi-view-module"></i>
          </span>{" "}
          MarketWatch <span className="removespc">Live Market</span>
        </h3>
      </div>

      <div
        className="settings-second-div row"
        style={{ justifyContent: "flex-start" }}
      >

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
            className="col-md-2 mt-1 col-4"
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
          websocketArray.map((entry, index) => (
            <WatchlistContent
              colorClass={colorClass}
              colorClass1={colorClass1}
              colorClass2={colorClass2}
              entry={entry}
              index={index}
              key={index}
              userTable={userTable}
            />
          ))
        ) : userTable && userTable.length !== 0 ? (
          userTable.map(() => <DummyContent />)
        ) : <></>}
      </section>

      <SQTable />

    </div>
  );
};
export default Dashboard;
