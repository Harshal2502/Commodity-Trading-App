import React from "react";
import { useState } from "react";
import Modal from 'react-modal';

const WatchlistContent = ({ colorClass, colorClass1, colorClass2, entry, index, formattedDate, userTable }) => {

    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <>
            <div id="dynamic_mw_data">

                <div id='mp_theme' className='row script_box mp_theme'>
                    <div className='col-xs-12' onClick={toggleModal} style={{ cursor: "pointer" }}>

                        <div className='watchlist-entry' id='scrip_box_wrapper_number_"+result.instrument_token+"'>
                            <div className='bcfb4-color script_title' style={{ fontSize: "small" }}><span id='up_down_dynamic_aerrow_"+result.instrument_token+"'></span>{entry.Exchange} {entry.InstrumentIdentifier.split("-")[0]} {formattedDate}</div>

                            <div className='row' id='script_profile_id_is_"+result.instrument_token+"' style={{ marginLeft: "0" }} >
                                <div className='col-xs-4 col-lg-4 left_side_mp_theme'>
                                    <div id='ltp_single_entity_"+result.instrument_token+"' className={`ltp ${colorClass2}`}>{entry.LastTradePrice}</div>
                                    <div id='net_change_single_entity_"+result.instrument_token+"' className="net_change">+000.00</div>
                                </div>
                                <div className='col-xs-8 col-lg-8 right_side_mp_theme'>
                                    <div className='row' style={{ display: "flex", justifyContent: "center" }}>
                                        <div className='col-xs-6 col-lg-3 text-right sell_price_wrapper_mp_theme'>
                                            <div id='sell_price_single_entity_"+result.instrument_token+"' className={`sell_price ${colorClass1}`} >{entry.SellPrice}</div>
                                        </div>
                                        <div className='col-xs-6 col-lg-3 text-left buy_price_wrapper_mp_theme'>
                                            <div id='buy_price_single_entity_"+result.instrument_token+"' className={`buy_price ${colorClass}`} >{entry.BuyPrice}</div>
                                        </div>
                                    </div>
                                    <div style={{ color: "#000" }} className='mini_footer_mw_single_entity row'>
                                        <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }} className='mini_footer_mw_single_entity row'>
                                            <div id='open_price_single_entity_"+result.instrument_token+"' className='script_entity col-xs-4 bcfb4-color text-right'><div className='open_price' style={{ fontSize: "small" }}><p>O: {entry.Open}</p></div></div>
                                            <div id='high_price_single_entity_"+result.instrument_token+"' className='script_entity col-xs-4 bcfb4-color text-center'><div className='high_price' style={{ fontSize: "small" }}><p>H: {entry.High}</p></div></div>
                                            <div id='low_price_single_entity_"+result.instrument_token+"' className='script_entity col-xs-4 bcfb4-color text-left'><div className='low_price' style={{ fontSize: "small" }}><p>L: {entry.Low}</p></div></div>
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
                        width: "50%",
                        margin: "59px auto 0 auto",
                        textAlign: "center",
                        backgroundColor: "#ffffff",
                        color: "#111111",
                        zIndex: "999",
                        height: "auto",
                        maxHeight: "400px",
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
                    <div style={{ display: "flex", justifyContent: "space-between", margin: "2rem 3rem" }}>
                        <div>
                            <h3 style={{ marginBottom: 0 }}>{entry.InstrumentIdentifier.split("-")[0]}</h3>
                            <p>{formattedDate}</p>
                        </div>
                        <div>
                            <h3 style={{ marginBottom: 0 }}>{entry.AverageTradedPrice}</h3>
                            <p>-44.50</p>
                        </div>
                    </div>

                    <hr />

                    <div style={{ display: "flex", justifyContent: "space-around", margin: "2rem 3rem" }}>
                        <div>
                            <p>High : {entry.High}</p>
                            <p>Low : {entry.Low}</p>
                        </div>
                        <div>
                            <p>Open : {entry.Open}</p>
                            <p>Close : {entry.SellPrice}</p>
                        </div>
                    </div>

                    <hr />

                    <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "2rem" }}>
                        <div>
                            <p>Buy</p>
                            <h3>{entry.BuyPrice}</h3>
                        </div>
                        <div>
                            <p>Sell</p>
                            <h3>{entry.SellPrice}</h3>
                        </div>
                    </div>
                </div>

            </Modal >
        </>
    );
};

export default WatchlistContent;