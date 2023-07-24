import React, { useEffect, useState } from 'react'
import { FETCH_INVOICE, FETCH_INVOICE_USER } from '../../utils/API';
import { useSelector } from 'react-redux';

export const Invoice = () => {

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

    const [invoiceArray, setInvoiceArray] = useState([1]);
    const [bill, setBill] = useState();


    useEffect(() => {
        fetchInvoice();
    }, []);

    const fetchInvoice = async () => {
        const res = await FETCH_INVOICE_USER(username);
        console.log(res)
        setInvoiceArray(res);
    }


    return (
        <div>
            <div className="row">

                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Invoice ({invoiceArray?.length})</h4>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th> Bill No. </th>
                                            <th> From-Date </th>
                                            <th> To-Date </th>
                                            <th> Brokerage </th>
                                            <th> Net-Amount </th>
                                            <th> Bill-Amount </th>
                                            <th> Date-of-Bill </th>
                                            <th> View </th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            invoiceArray?.map((entry) => {

                                                const dateObj = new Date(entry?.createdAt);
                                                const day = dateObj.getDate();
                                                const month = dateObj.toLocaleString('default', { month: 'short' }).toUpperCase();
                                                const year = dateObj.getFullYear();
                                                const formattedDate = `${day}${month}${year}`;

                                                const dateObj1 = new Date(entry?.from);
                                                const day1 = dateObj1.getDate();
                                                const month1 = dateObj1.toLocaleString('default', { month: 'short' }).toUpperCase();
                                                const year1 = dateObj1.getFullYear();
                                                const formattedDate1 = `${day1}${month1}${year1}`;

                                                const dateObj2 = new Date(entry?.to);
                                                const day2 = dateObj2.getDate();
                                                const month2 = dateObj2.toLocaleString('default', { month: 'short' }).toUpperCase();
                                                const year2 = dateObj2.getFullYear();
                                                const formattedDate2 = `${day2}${month2}${year2}`;

                                                return (
                                                    <tr>
                                                        <td> {entry?.billno ?? "-"} </td>
                                                        <td> {formattedDate1 ?? "-"} </td>
                                                        <td> {formattedDate2 ?? "-"} </td>
                                                        <td> {entry?.brokerage ?? "-"} </td>
                                                        <td> {entry?.netamount ?? "-"} </td>
                                                        <td> {entry?.billamount ?? "-"} </td>
                                                        <td> {formattedDate ?? "-"} </td>
                                                        <td> <button onClick={() => setBill([entry])}> View Bill </button></td>
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


                {
                    bill?.map((entry, index) => {

                        const dateObj = new Date(entry?.createdAt);
                        const day = dateObj.getDate();
                        const month = dateObj.toLocaleString('default', { month: 'short' }).toUpperCase();
                        const year = dateObj.getFullYear();
                        const formattedDate = `${day}${month}${year}`;

                        const dateObj1 = new Date(entry?.from);
                        const day1 = dateObj1.getDate();
                        const month1 = dateObj1.toLocaleString('default', { month: 'short' }).toUpperCase();
                        const year1 = dateObj1.getFullYear();
                        const formattedDate1 = `${day1}${month1}${year1}`;

                        const dateObj2 = new Date(entry?.to);
                        const day2 = dateObj2.getDate();
                        const month2 = dateObj2.toLocaleString('default', { month: 'short' }).toUpperCase();
                        const year2 = dateObj2.getFullYear();
                        const formattedDate2 = `${day2}${month2}${year2}`;

                        return (


                            <div className="col-12 grid-margin stretch-card">
                                <div className="card ">

                                    <div class="card-body">
                                        <div class="container-fluid">
                                            <h4 class="float-left"><i class="mdi mdi-earth"></i>{entry.username}</h4>

                                            <h6 class="text-right">From: (<span id="from_date_field">{formattedDate1}</span>) To: (<span id="to_date_field">{formattedDate2}</span>)</h6>

                                            <hr></hr>
                                        </div>
                                        <div class="container-fluid d-flex justify-content-between">
                                            <div class="col-lg-3 pl-0">
                                            </div>
                                            <div class="col-lg-3 pr-0">
                                                <p class="mt-5 mb-2 text-right"><b>Invoice #{entry.billno}</b></p>
                                                <p class="text-right"><b>Client ID: {entry.username}</b><br></br> <b>Net Amount:</b> {entry.netamount} <br></br> <b>Brokrage:</b> {entry.brokerage} <br></br><br></br><b>Bill Amount:</b> Rs. {entry.billamount}</p>
                                            </div>
                                        </div>

                                        <div class="row invoice_instu_box">
                                            <p class="textcenter invoice_instu_title"> {entry?.orders[0].InstrumentIdentifier.split("_")[0]} {entry?.orders[0].InstrumentIdentifier.split("_")[1]} {entry?.orders[0].InstrumentIdentifier.split("_")[2]} </p>
                                            <div class="container-fluid mt-5 d-flex justify-content-center w-100">

                                                <div class="col-xs-6 table-responsive w-100">
                                                    <h4 class="text-center">BUY SIDE</h4>
                                                    <table class="table table-size">
                                                        <thead >
                                                            <tr class="bg-dark text-white">
                                                                <th>Date and Time</th>
                                                                <th>Regular/CF</th>
                                                                <th class="text-right">Qty</th>
                                                                <th class="text-right">Price</th>
                                                                <th class="text-right">Brokrage</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr class="text-right">
                                                                <td class="text-left">25-10-2021 (07:01) </td>
                                                                <td class="text-left">BroughtForward</td>
                                                                <td>100</td>
                                                                <td>18138.80</td>
                                                                <td>0.00</td>
                                                            </tr>
                                                            <tr class="text-right">
                                                                <td class="text-left"><b>Total</b></td>
                                                                <td class="text-left"> </td>
                                                                <td><b>100.00</b></td>
                                                                <td><b>18138.80</b></td>
                                                                <td><b>0.00</b></td>
                                                            </tr>
                                                            <tr class="text-right">
                                                                <td class="text-left"><b>Net Total (Rs):</b></td>
                                                                <td class="text-left"></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                            </tr>
                                                            <tr class="text-right">
                                                                <td class="text-left"><b>Brokrage (Rs):</b></td>
                                                                <td class="text-left"></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                            </tr>
                                                            <tr class="text-right">
                                                                <td class="text-left"><b>Total (Rs):</b></td>
                                                                <td class="text-left"></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                            </tr>
                                                        </tbody>

                                                    </table>
                                                </div>
                                                <div class="col-xs-6 table-responsive w-100">
                                                    <h4 class="text-center">SELL SIDE</h4>
                                                    <table class="table">
                                                        <thead>
                                                            <tr class="bg-dark text-white">
                                                                <th>Date and Time</th>
                                                                <th>Regular/CF</th>
                                                                <th class="text-right">Qty</th>
                                                                <th class="text-right">Price</th>
                                                                <th class="text-right">Brokrage</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr class="text-right">
                                                                <td class="text-left">28-10-2021 (15:30) </td>
                                                                <td class="text-left">regular</td>
                                                                <td>100</td>
                                                                <td>17858.90</td>
                                                                <td>357.18</td>
                                                            </tr>
                                                            <tr class="text-right">
                                                                <td class="text-left"><b>Total</b></td>
                                                                <td class="text-left"></td>
                                                                <td><b>100.00</b></td>
                                                                <td><b>17858.90</b></td>
                                                                <td><b>357.18</b></td>
                                                            </tr>
                                                            <tr class="text-right">
                                                                <td class="text-left"></td>
                                                                <td class="text-left">-27990.00</td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                            </tr>
                                                            <tr class="text-right">
                                                                <td class="text-left"></td>
                                                                <td class="text-left">357.18</td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                            </tr>

                                                            <tr class="text-right">
                                                                <td class="text-left"></td>
                                                                <td class="text-left">-28347.18</td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                            </tr>
                                                        </tbody>

                                                    </table>
                                                </div>
                                            </div>
                                        </div>


                                        {/* <div class="row invoice_instu_box">
                                            <p class="textcenter invoice_instu_title">FONSE NIFTY 28OCT2021</p>
                                            <div class="container-fluid mt-5 d-flex justify-content-center w-100">

                                                <div class="col-xs-6 table-responsive w-100">
                                                    <h4 class="text-center">BUY SIDE</h4>
                                                    <table class="table table-size">
                                                        <thead >
                                                            <tr class="bg-dark text-white">
                                                                <th>Date and Time</th>
                                                                <th>Regular/CF</th>
                                                                <th class="text-right">Qty</th>
                                                                <th class="text-right">Price</th>
                                                                <th class="text-right">Brokrage</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr class="text-right">
                                                                <td class="text-left">25-10-2021 (07:01) </td>
                                                                <td class="text-left">BroughtForward</td>
                                                                <td>100</td>
                                                                <td>18138.80</td>
                                                                <td>0.00</td>
                                                            </tr>
                                                            <tr class="text-right">
                                                                <td class="text-left"><b>Total</b></td>
                                                                <td class="text-left"> </td>
                                                                <td><b>100.00</b></td>
                                                                <td><b>18138.80</b></td>
                                                                <td><b>0.00</b></td>
                                                            </tr>
                                                            <tr class="text-right">
                                                                <td class="text-left"><b>Net Total (Rs):</b></td>
                                                                <td class="text-left"></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                            </tr>
                                                            <tr class="text-right">
                                                                <td class="text-left"><b>Brokrage (Rs):</b></td>
                                                                <td class="text-left"></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                            </tr>
                                                            <tr class="text-right">
                                                                <td class="text-left"><b>Total (Rs):</b></td>
                                                                <td class="text-left"></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                            </tr>
                                                        </tbody>

                                                    </table>
                                                </div>
                                                <div class="col-xs-6 table-responsive w-100">
                                                    <h4 class="text-center">SELL SIDE</h4>
                                                    <table class="table">
                                                        <thead>
                                                            <tr class="bg-dark text-white">
                                                                <th>Date and Time</th>
                                                                <th>Regular/CF</th>
                                                                <th class="text-right">Qty</th>
                                                                <th class="text-right">Price</th>
                                                                <th class="text-right">Brokrage</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr class="text-right">
                                                                <td class="text-left">28-10-2021 (15:30) </td>
                                                                <td class="text-left">regular</td>
                                                                <td>100</td>
                                                                <td>17858.90</td>
                                                                <td>357.18</td>
                                                            </tr>
                                                            <tr class="text-right">
                                                                <td class="text-left"><b>Total</b></td>
                                                                <td class="text-left"></td>
                                                                <td><b>100.00</b></td>
                                                                <td><b>17858.90</b></td>
                                                                <td><b>357.18</b></td>
                                                            </tr>
                                                            <tr class="text-right">
                                                                <td class="text-left"></td>
                                                                <td class="text-left">-27990.00</td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                            </tr>
                                                            <tr class="text-right">
                                                                <td class="text-left"></td>
                                                                <td class="text-left">357.18</td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                            </tr>

                                                            <tr class="text-right">
                                                                <td class="text-left"></td>
                                                                <td class="text-left">-28347.18</td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                            </tr>
                                                        </tbody>

                                                    </table>
                                                </div>
                                            </div>
                                        </div> */}


                                    </div>


                                </div>
                            </div>

                        )
                    })}
            </div>
        </div>
    )
}

export default Invoice
