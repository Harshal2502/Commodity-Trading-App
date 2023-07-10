import React, { useEffect } from "react";
import { useState } from "react";
import { REMOVE_WATCHLIST } from "../../utils/API";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WatchlistContent = ({ colorClass, colorClass1, colorClass2, entry, index, formattedDate, userTable }) => {

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

    const [width, setWidth] = useState(window.innerWidth);
    const updateWidth = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);


    let diff = (entry.LastTradePrice - entry.Close).toFixed(2);

    // useEffect(() => {
    //     const fetch_margin = async () => {
    //         const res = await USERINFO(username);
    //         setMargin(res.balance.marginbalance)
    //     }
    //     fetch_margin();
    // }, [])

    const handleWatchlistRemove = async (entry) => {
        const res = await REMOVE_WATCHLIST(username, entry.originalExpiry, entry.Exchange, entry.originalInstrument, entry.originalProduct, entry.call_put, entry.strikePrice);
        if (res.status === 200) toast.info("Item removed successfully", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
            hideProgressBar: false,
            pauseOnHover: true,
        });
    };

    return (
        <>

            {width > 700 ?

                <>
                    <div id="dynamic_mw_data">
                        <div id="mp_theme" className="row script_box mp_theme">
                            <div
                                style={{ cursor: "pointer" }}
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
                                            style={{ marginLeft: "50px" }}
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

                </>
                :
                <>
                    <div>

                        <div className='row mp_theme'>
                            <div className='col-xs-12' style={{ cursor: "pointer" }}>

                                <div className='watchlist-entry'>
                                    <div className='bcfb4-color script_title' style={{ fontSize: "small" }}>{diff < 0 ? <i className="decrease1 mdi mdi-arrow-down-drop-circle menu-icon"></i> : <i className="increase1 mdi mdi-arrow-up-drop-circle menu-icon"></i>} {entry.Exchange} {entry.originalProduct} {entry.originalExpiry}</div>

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

                </>}
        </>
    );
};

export default WatchlistContent;