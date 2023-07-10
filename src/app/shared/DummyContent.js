import React from "react";

export function DummyContent() {

    return (<>
        <div id="dynamic_mw_data">
            <div id="mp_theme" className="row script_box mp_theme">
                <div className="col-xs-12" style={{
                    cursor: "not-allowed"
                }}>
                    <div className="watchlist-entry" id='scrip_box_wrapper_number_"+result.instrument_token+"'>
                        <div className="bcfb4-color script_title" style={{
                            fontSize: "small",
                            display: "flex"
                        }}>
                            <span id='up_down_dynamic_aerrow_"+result.instrument_token+"'></span>
                            <div style={{
                                whiteSpace: "nowrap"
                            }}>
                                XXXX XXXX 00XXX0000
                            </div>
                            <div className="col-xs-8 col-lg-2 right_side_mp_theme">
                                <div className="row" style={{
                                    display: "flex"
                                }}>
                                    <div className="col-xs-6 col-lg-6 text-right sell_price_wrapper_mp_theme">
                                        <div id='sell_price_single_entity_"+result.instrument_token+"' className="sell_price">
                                            0000.00
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-lg-6 text-left buy_price_wrapper_mp_theme">
                                        <div id='buy_price_single_entity_"+result.instrument_token+"' className="buy_price">
                                            0000.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id='ltp_single_entity_"+result.instrument_token+"' className="ltp" style={{
                                marginLeft: "50px"
                            }}>
                                0000.00
                            </div>
                            <div className="ltp" style={{
                                marginLeft: "50px"
                            }}>
                                0.0%
                            </div>
                            <div className="col-xs-4 col-lg-2 left_side_mp_theme" style={{
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                <div id='net_change_single_entity_"+result.instrument_token+"' className="net_change">
                                    +000.00
                                </div>
                            </div>

                            <div style={{
                                display: "flex",
                                justifyContent: "space-around",
                                width: "100%",
                                flexWrap: "nowrap"
                            }} className="mini_footer_mw_single_entity row">
                                <div id='high_price_single_entity_"+result.instrument_token+"' className="script_entity col-xs-4 bcfb4-color text-center">
                                    <div className="high_price" style={{
                                        fontSize: "small"
                                    }}>
                                        <div style={{
                                            whiteSpace: "nowrap"
                                        }}>
                                            000.0
                                        </div>
                                    </div>
                                </div>

                                <div id='low_price_single_entity_"+result.instrument_token+"' className="script_entity col-xs-4 bcfb4-color text-left">
                                    <div className="low_price" style={{
                                        fontSize: "small"
                                    }}>
                                        <div style={{
                                            whiteSpace: "nowrap"
                                        }}>
                                            000.0
                                        </div>
                                    </div>
                                </div>
                                <div id='open_price_single_entity_"+result.instrument_token+"' className="script_entity col-xs-4 bcfb4-color text-right">
                                    <div className="open_price" style={{
                                        fontSize: "small"
                                    }}>
                                        <div style={{
                                            whiteSpace: "nowrap"
                                        }}>
                                            000.0
                                        </div>
                                    </div>
                                </div>
                                <div id='low_price_single_entity_"+result.instrument_token+"' className="script_entity col-xs-4 bcfb4-color text-left">
                                    <div className="low_price" style={{
                                        fontSize: "small",
                                        marginRight: "10px"
                                    }}>
                                        <div style={{
                                            whiteSpace: "nowrap"
                                        }}>
                                            000.0
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{
                                width: "290px",
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                <img style={{
                                    width: "18px"
                                }} src={require("../../assets/images/close.svg")} alt="logo" />
                            </div>
                        </div>

                        <div className="row" id='script_profile_id_is_"+result.instrument_token+"' style={{
                            marginLeft: "0"
                        }}></div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
