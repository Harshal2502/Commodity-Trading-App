import React, { useEffect } from "react";
import { useState } from "react";
import Modal from 'react-modal';
import { USERINFO, ORDER, GETALL_PENDING_MARKETORDERS_USER, PLACE_ALL_MARKET_ORDERS, REMOVE_WATCHLIST } from "../../utils/API";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WatchlistContent = ({ colorClass, colorClass1, colorClass2, entry, index, userTable }) => {

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

    const [modalOpen, setModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('market');
    const [orderQty, setOrderQty] = useState(0);
    const [limitValue, setLimitValue] = useState(0);
    const [loader, setLoader] = useState(false);
    const [loader1, setLoader1] = useState(false);
    const [qtyErr, setQtyErr] = useState(false);
    const [qtyErr1, setQtyErr1] = useState(false);
    const [margin, setMargin] = useState(0)



    const [width, setWidth] = useState(window.innerWidth);
    const updateWidth = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);


    let diff = (entry.LastTradePrice - entry.Close).toFixed(2);

    useEffect(() => {
        const fetch_margin = async () => {
            const res = await USERINFO(username);
            setMargin(res.balance.marginbalance)
        }
        fetch_margin();
    }, [])

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleClientBuy = async (entry, order_type) => {

        const currentTime = new Date();
        const currentDayOfWeek = currentTime.getDay(); // Sunday: 0, Monday: 1, ..., Saturday: 6
        const currentHour = currentTime.getHours();
        const currentMinutes = currentTime.getMinutes();

        // Check if it's Monday to Friday
        const isWeekday = currentDayOfWeek >= 1 && currentDayOfWeek <= 5;

        // Check if it's within NFO & NSE trading hours
        const isWithinNSETradingHours =
            (currentHour === 9 && currentMinutes >= 0) || // After 9:00 AM
            (currentHour > 9 && currentHour < 15) || // Between 10 AM and 2:59 PM
            (currentHour === 15 && currentMinutes === 0); // Before 3 PM

        // Check if it's within MCX trading hours
        const isWithinMCXTradingHours =
            (currentHour === 9 && currentMinutes >= 0) || // After 9:00 AM
            (currentHour > 9 && currentHour < 23) || // Between 10 AM and 10:59 PM
            (currentHour === 23 && currentMinutes <= 30); // Before 11:30 PM

        // Check if purchases are allowed based on the time constraints
        const isAllowedToPurchase = isWeekday && (
            (entry.Exchange === "NFO" && isWithinNSETradingHours) ||
            (entry.Exchange === "MCX" && isWithinMCXTradingHours)
        );

        // if (!isAllowedToPurchase) {
        //     // Display an error message or take appropriate action
        //     toast.error("The market is currently closed", {
        //         position: toast.POSITION.TOP_RIGHT,
        //         autoClose: 3000,
        //         hideProgressBar: false,
        //         pauseOnHover: true,
        //     });
        //     return;
        // }

        if (orderQty < 1) {
            setQtyErr(true);
            if (activeTab === "limit") {
                if (limitValue < 1) {
                    setQtyErr1(true);
                }
            }
            return;
        }

        if (activeTab === "limit") {
            if (limitValue < 1) {
                setQtyErr1(true);
                return;
            }
        }

        if (entry.CustomQuotationLot) {
            if (orderQty * entry.BuyPrice * entry.CustomQuotationLot > margin) {
                toast.warning("Insufficient Balance", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                    hideProgressBar: false,
                    pauseOnHover: true,
                });
                return;
            }
        } else if (orderQty * entry.BuyPrice * entry.QuotationLot > margin) {
            toast.warning("Insufficient Balance", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
                hideProgressBar: false,
                pauseOnHover: true,
            });
            return;
        }

        if (order_type === "buy") setLoader(true);
        if (order_type === "sell") setLoader1(true);

        const type = activeTab == 'market' ? "market" : "limit";
        const price = activeTab == 'market' ? entry.SellPrice : limitValue;

        const currentDate = new Date();

        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true
        };

        const formattedDate = currentDate.toLocaleString("en-US", options);


        setModalOpen(false);
        const res = await ORDER(username, orderQty, entry.originalProduct, entry.Exchange, price, entry.originalExpiry, order_type, type, entry);


        if (res.status === 200) {

            alert(`Your ${activeTab} ${order_type} order for ${orderQty} unit of ${entry.Exchange} ${entry.originalProduct} ${entry.originalExpiry} at a price of ${entry.BuyPrice} has been successfully executed on ${formattedDate} AM by SELF`, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
                hideProgressBar: false,
                pauseOnHover: true,
            });

            const fetchPendingOrdersMarket = async () => {
                const res = await GETALL_PENDING_MARKETORDERS_USER(username);
                console.log(res)

                if (res.status == 200 && res.data.length !== 0) {
                    const result = await PLACE_ALL_MARKET_ORDERS(username, res.data);
                    console.log(result)
                }
            }
            fetchPendingOrdersMarket();
        }

        setLoader(false);
        setLoader1(false);
    }


    const handleWatchlistRemove = async (entry) => {

        // setLoadingState((prevState) => ({ ...prevState, loadingTable: true }));
        const res = await REMOVE_WATCHLIST(username, entry.originalExpiry, entry.Exchange, entry.originalInstrument, entry.originalProduct, entry.call_put, entry.strikePrice);
        // fetchWatchlist();
        if (res.status === 200) toast.success("Item removed successfully!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
            hideProgressBar: false,
            pauseOnHover: true,
        });

        // setLoadingState((prevState) => ({ ...prevState, loadingTable: false }));

    };

    return (
        <>

            {width > 700 ?

                (<>
                    <div id="dynamic_mw_data">
                        <div id="mp_theme" className="row script_box mp_theme">
                            <div
                                onClick={toggleModal} style={{ cursor: "pointer" }}
                                className="col-xs-12"
                            >
                                <div
                                    className="watchlist-entry"
                                >
                                    <div
                                        className="script_title"
                                        style={{ fontSize: "15px", display: "flex", color: 'white', width: "100%" }}
                                    >
                                        <div style={{ minWidth: '160px' }}>
                                            {diff < 0 ? <i className="decrease1 mdi mdi-arrow-down-drop-circle menu-icon"></i> : <i className="increase1 mdi mdi-arrow-up-drop-circle menu-icon"></i>} {entry.Exchange} {entry.originalProduct} <span style={{ marginLeft: '20px', fontSize: '12px' }}>{entry.originalExpiry}</span>
                                        </div>
                                        <div className="col-xs-8 col-lg-2 right_side_mp_theme">
                                            <div
                                                className="row"
                                                style={{
                                                    display: "flex",
                                                    minWidth: "150px"
                                                }}
                                            >
                                                <div className="col-xs-6 col-lg-6 text-right">
                                                    <div
                                                        style={{ fontWeight: "bold", fontSize: "15px" }}
                                                        className={`sell_price ${colorClass1[index]}`} >{entry.SellPrice}</div>
                                                </div>
                                                <div className="col-xs-6 col-lg-6 text-left">
                                                    <div
                                                        style={{ fontWeight: "bold", fontSize: "15px" }}
                                                        className={`buy_price ${colorClass[index]}`} >{entry.BuyPrice}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ marginLeft: "50px", minWidth: "70px" }}
                                            className={`ltp ${colorClass2[index]}`}>{entry.LastTradePrice}</div>
                                        <div className={diff < 0 ? "decrease1 ltp" : "increase1 ltp"} style={{ marginLeft: "50px" }}>
                                            {entry.PriceChangePercentage ?? "-"}%
                                        </div>
                                        <div
                                            className="col-xs-4 col-lg-2 left_side_mp_theme"
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <div
                                                className={diff < 0 ? "decrease1 net_change" : "increase1 net_change"} style={{ fontSize: "15px" }}>{diff}</div>
                                        </div>

                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-around",
                                                width: "100%",
                                                flexWrap: "nowrap",
                                            }}
                                            className="mini_footer_mw_single_entity row"
                                        >
                                            <div
                                                id='high_price_single_entity_"+result.instrument_token+"'
                                                className="script_entity col-xs-4 bcfb4-color text-center"
                                            >
                                                <div
                                                    className="high_price"
                                                    style={{ fontSize: "small" }}
                                                >
                                                    <div style={{ whiteSpace: "nowrap", fontSize: "15px" }}>
                                                        {entry.High}
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                id='low_price_single_entity_"+result.instrument_token+"'
                                                className="script_entity col-xs-4 bcfb4-color text-left"
                                            >
                                                <div
                                                    className="low_price"
                                                    style={{ fontSize: "small" }}
                                                >
                                                    <div style={{ whiteSpace: "nowrap", fontSize: "15px" }}>
                                                        {entry.Low}
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                id='open_price_single_entity_"+result.instrument_token+"'
                                                className="script_entity col-xs-4 bcfb4-color text-right"
                                            >
                                                <div
                                                    className="open_price"
                                                    style={{ fontSize: "small" }}
                                                >
                                                    <div style={{ whiteSpace: "nowrap", fontSize: "15px" }}>
                                                        {entry.Open}
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                id='low_price_single_entity_"+result.instrument_token+"'
                                                className="script_entity col-xs-4 bcfb4-color text-left"
                                            >
                                                <div
                                                    className="low_price close_price"
                                                    style={{
                                                        fontSize: "small",
                                                        marginRight: "10px",
                                                    }}
                                                >
                                                    <div style={{ whiteSpace: "nowrap", fontSize: "15px" }}>
                                                        {entry.Close}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ width: "290px", display: 'flex', justifyContent: 'center' }}
                                        >
                                            <img
                                                onClick={(e) => { e.stopPropagation(); handleWatchlistRemove(entry); }}
                                                style={{ width: "18px" }}
                                                src={require("../../assets/images/close.svg")}
                                                alt="logo"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Modal
                        isOpen={modalOpen}
                        contentLabel='modal'
                        onRequestClose={() => {
                            toggleModal(index);
                            document.body.style.overflow = "auto";
                        }}
                        style={{
                            content: {
                                maxWidth: '500px',
                                margin: "59px auto 0 auto",
                                textAlign: "center",
                                backgroundColor: "#ffffff",
                                color: "#111111",
                                zIndex: "999",
                                height: "auto",
                                maxHeight: "450px",
                            },
                            overlay: {
                                backgroundColor: "rgba(30, 30, 30, 0.7)",
                            },
                        }}
                    >
                        <button
                            className="close-btn"
                            onClick={() => {
                                setModalOpen(false);
                                document.body.style.overflow = "auto";
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-x"
                                viewBox="0 0 16 16"
                            >
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>

                        <div className='share-modal'>
                            <div style={{ marginBottom: "1rem" }}>
                                <p>{userTable[index]?.exchange}</p>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "1rem" }}>
                                <div>
                                    <h3 style={{ marginBottom: 0 }}>{entry.originalProduct}</h3>
                                    <p>{entry.originalExpiry}</p>
                                </div>
                                <div>
                                    <h3 className={`${colorClass2[index]}`} style={{ marginBottom: 0 }}>{entry.LastTradePrice}</h3>
                                    <p className={diff < 0 ? "decrease1" : "increase1"}>{diff}</p>
                                </div>
                            </div>

                            <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "1rem" }}>
                                <div>
                                    <p>High : {entry.High}</p>
                                    <p>Low : {entry.Low}</p>
                                </div>
                                <div>
                                    <p>Open : {entry.Open}</p>
                                    <p>Close : {entry.Close}</p>
                                </div>
                            </div>


                            <div>

                                <input
                                    style={qtyErr ? { border: "3px solid red" } : null}
                                    type='number'
                                    placeholder='Quantity'
                                    className='modal-input'
                                    min="0"
                                    onChange={(e) => {
                                        setOrderQty(e.target.value);
                                        if (e.target.value > 0) setQtyErr(false)
                                    }}
                                />

                                {/* {qtyErr && <span style={{ color: "red", fontSize: "small" }}>*required</span>} */}
                            </div>


                            <div>
                                <div>
                                    <div className="tab-buttons">
                                        <button
                                            className={`tab-button ${activeTab === 'market' ? 'active' : ''}`}
                                            onClick={() => handleTabClick('market')}
                                        >
                                            Market Order
                                        </button>
                                        <button
                                            className={`tab-button ${activeTab === 'limit' ? 'active' : ''}`}
                                            onClick={() => handleTabClick('limit')}
                                        >
                                            Limit Order
                                        </button>
                                    </div>
                                    <div className="tab-content" style={{ border: "none", paddingBottom: "0" }}>
                                        {activeTab === 'market' && (
                                            <div className={`fade-in`} style={{ display: "flex", justifyContent: "space-around", color: "#333" }}>
                                                <div style={{ width: "40%", textAlign: "center" }}>
                                                    <h3 className={`${colorClass[index]}`}>{entry.BuyPrice}</h3>
                                                </div>
                                                <div style={{ width: "40%", textAlign: "center" }}>
                                                    <h3 className={`${colorClass1[index]}`} >{entry.SellPrice}</h3>
                                                </div>
                                            </div>
                                        )}


                                        {activeTab === 'limit' && (

                                            <div className={`fade-in`} style={{ textAlign: "center" }}>

                                                <input
                                                    style={qtyErr1 ? { border: "3px solid red" } : null}
                                                    type='number'
                                                    placeholder='Limit'
                                                    className='modal-input-2'
                                                    min="0"
                                                    onChange={(e) => {
                                                        setLimitValue(e.target.value);
                                                        if (e.target.value > 0) setQtyErr1(false);
                                                    }}
                                                />

                                                {/* {qtyErr1 && <span style={{ color: "red", fontSize: "small", display: "block" }}>*required</span>} */}
                                            </div>
                                        )}


                                        <div style={{ display: "flex" }}>
                                            <button type="submit" onClick={(e) => { e.preventDefault(); handleClientBuy(entry, "buy"); }} className="buy-btn btn btn-success" disabled={loader1 || loader}>{loader ? <span className='button-loader'></span> : "Buy"}</button>
                                            <button type="submit" onClick={(e) => { e.preventDefault(); handleClientBuy(entry, "sell"); }} className="sell-btn btn btn-danger" disabled={loader || loader1}>{loader1 ? <span className='button-loader'></span> : "Sell"}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Modal >
                </>)
                :
                <>
                    <div>

                        <div className='row mp_theme'>
                            <div className='col-xs-12' onClick={toggleModal} style={{ cursor: "pointer" }}>

                                <div className='watchlist-entry'>
                                    <div className='bcfb4-color script_title' style={{ fontSize: "small", display: "flex", justifyContent: "space-between" }}>
                                        <div>{diff < 0 ? <i className="decrease1 mdi mdi-arrow-down-drop-circle menu-icon"></i> : <i className="increase1 mdi mdi-arrow-up-drop-circle menu-icon"></i>} {entry.Exchange} {entry.originalProduct} {entry.originalExpiry} </div>
                                        <div>
                                            <img
                                                onClick={(e) => { e.stopPropagation(); handleWatchlistRemove(entry); }}
                                                style={{ width: "18px" }}
                                                src={require("../../assets/images/close.svg")}
                                                alt="logo"
                                            /></div></div>

                                    <div className='row' style={{ marginLeft: "0", flexWrap: "nowrap" }} >
                                        <div className='col-xs-4 col-lg-4 left_side_mp_theme'>
                                            <div className={`ltp ${colorClass2[index]}`}>{entry.LastTradePrice}</div>
                                            <div className={diff < 0 ? "decrease1 net_change" : "increase1 net_change"}>{diff}</div>
                                        </div>
                                        <div className='col-xs-8 col-lg-8 right_side_mp_theme'>
                                            <div className='row' style={{ display: "flex", justifyContent: "center", flexWrap: "nowrap", marginRight: "-10px" }}>
                                                <div className='col-xs-6 col-lg-6 text-right sell_price_wrapper_mp_theme'>
                                                    <div className={`sell_price ${colorClass1[index]}`} >{entry.SellPrice}</div>
                                                </div>
                                                <div className='col-xs-6 col-lg-6 text-left buy_price_wrapper_mp_theme'>
                                                    <div className={`buy_price ${colorClass[index]}`} >{entry.BuyPrice}</div>
                                                </div>
                                            </div>
                                            <div style={{ color: "#000" }} className='row'>
                                                <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }} className='row'>
                                                    <div className='col-xs-4 bcfb4-color'><div style={{ fontSize: "small" }}><div>O: {entry.Open}</div></div></div>
                                                    <div className='col-xs-4 bcfb4-color'><div style={{ fontSize: "small" }}><div>H: {entry.High}</div></div></div>
                                                    <div className='col-xs-4 bcfb4-color'><div style={{ fontSize: "small" }}><div>L: {entry.Low}</div></div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Modal
                        isOpen={modalOpen}
                        contentLabel='modal'
                        onRequestClose={() => {
                            toggleModal(index);
                            document.body.style.overflow = "auto";
                        }}
                        style={{
                            content: {
                                maxWidth: '500px',
                                margin: "59px auto 0 auto",
                                textAlign: "center",
                                backgroundColor: "#ffffff",
                                color: "#111111",
                                zIndex: "999",
                                height: "auto",
                                maxHeight: "405px",
                                padding: "5px",
                            },
                            overlay: {
                                backgroundColor: "rgba(30, 30, 30, 0.7)",
                            },
                        }}
                    >
                        <button
                            className="close-btn"
                            onClick={() => {
                                setModalOpen(false);
                                document.body.style.overflow = "auto";
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-x"
                                viewBox="0 0 16 16"
                            >
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>

                        <div className='share-modal'>
                            <div style={{ marginBottom: "1rem" }}>
                                <p>{userTable[index]?.exchange}</p>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "1rem" }}>
                                <div>
                                    <h3 style={{ marginBottom: 0 }}>{entry.originalProduct}</h3>
                                    <p>{entry.originalExpiry}</p>
                                </div>
                                <div>
                                    <h3 className={`${colorClass2[index]}`} style={{ marginBottom: 0 }}>{entry.LastTradePrice}</h3>
                                    <p className={diff < 0 ? "decrease1" : "increase1"}>{diff}</p>
                                </div>
                            </div>

                            <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "1rem" }}>
                                <div>
                                    <p>High : {entry.High}</p>
                                    <p>Low : {entry.Low}</p>
                                </div>
                                <div>
                                    <p>Open : {entry.Open}</p>
                                    <p>Close : {entry.Close}</p>
                                </div>
                            </div>


                            <div>

                                <input
                                    style={qtyErr ? { border: "3px solid red" } : null}
                                    type='number'
                                    placeholder='Quantity'
                                    className='modal-input'
                                    min="0"
                                    onChange={(e) => {
                                        setOrderQty(e.target.value);
                                        if (e.target.value > 0) setQtyErr(false)
                                    }}
                                />

                            </div>


                            <div>
                                <div>
                                    <div className="tab-buttons">
                                        <button
                                            className={`tab-button ${activeTab === 'market' ? 'active' : ''}`}
                                            onClick={() => handleTabClick('market')}
                                        >
                                            Market Order
                                        </button>
                                        <button
                                            className={`tab-button ${activeTab === 'limit' ? 'active' : ''}`}
                                            onClick={() => handleTabClick('limit')}
                                        >
                                            Limit Order
                                        </button>
                                    </div>
                                    <div className="tab-content" style={{ border: "none", padding: "1rem 1rem 0 1rem" }}>
                                        {activeTab === 'market' && (
                                            <div className={`fade-in`} style={{ display: "flex", justifyContent: "space-around", color: "#333" }}>
                                                <div style={{ width: "40%", textAlign: "center" }}>
                                                    <h3 className={`${colorClass[index]}`}>{entry.BuyPrice}</h3>
                                                </div>
                                                <div style={{ width: "40%", textAlign: "center" }}>
                                                    <h3 className={`${colorClass1[index]}`} >{entry.SellPrice}</h3>
                                                </div>
                                            </div>
                                        )}


                                        {activeTab === 'limit' && (

                                            <div className={`fade-in`} style={{ textAlign: "center" }}>

                                                <input
                                                    style={qtyErr1 ? { border: "3px solid red" } : null}
                                                    type='number'
                                                    placeholder='Limit'
                                                    className='modal-input-2'
                                                    min="0"
                                                    onChange={(e) => {
                                                        setLimitValue(e.target.value);
                                                        if (e.target.value > 0) setQtyErr1(false);
                                                    }}
                                                />

                                            </div>
                                        )}


                                        <div style={{ display: "flex" }}>
                                            <button type="submit" onClick={(e) => { e.preventDefault(); handleClientBuy(entry, "buy"); }} className="buy-btn btn btn-success" disabled={loader1 || loader}>{loader ? <span className='button-loader'></span> : "Buy"}</button>
                                            <button type="submit" onClick={(e) => { e.preventDefault(); handleClientBuy(entry, "sell"); }} className="sell-btn btn btn-danger" disabled={loader || loader1}>{loader1 ? <span className='button-loader'></span> : "Sell"}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Modal >
                </>}

        </>
    );
};

export default WatchlistContent;