import React, { useEffect, useState } from 'react'
import { FETCH_INVOICE } from '../../utils/API';
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

    useEffect(() => {
        fetchInvoice();
    }, [])

    const fetchInvoice = async () => {
        const res = await FETCH_INVOICE(username);
        // setInvoiceArray(res.invoice);
        console.log(res);
    }

    const [invoiceArray, setInvoiceArray] = useState([1]);
    const [bills, setBills] = useState();

    return (
        <div>
            <div className="row">

                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Invoice ({invoiceArray.length})</h4>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th> Bill No. </th>
                                            <th> From-Date </th>
                                            <th> To-Date </th>
                                            <th>Brokerage</th>
                                            <th> Net-Amount </th>
                                            <th>Bill-Amount</th>
                                            <th> Date-of-Bill </th>
                                            <th>View</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            invoiceArray?.map((entry) => {

                                                return (
                                                    <tr>
                                                        <td> 9939 </td>
                                                        <td> 2023-05-08 07:00:00 </td>
                                                        <td> 2023-05-13 00:12:26 </td>
                                                        <td> 3636.60 </td>
                                                        <td> 53001.00 </td>
                                                        <td> 49364.40 </td>
                                                        <td> 13-05-2023 (00:12)  </td>
                                                        <td> <button onClick={() => setBills([1])}>View Bill </button></td>
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
                    bills?.map((entry, index) => {

                        return (


                            <div className="col-12 grid-margin stretch-card">
                                <div className="card ">

                                    <div class="card-body">
                                        <div class="container-fluid">
                                            <h4 class="float-left"><i class="mdi mdi-earth"></i>{username}</h4>

                                            <h6 class="text-right">From: (<span id="from_date_field">2023-05-08</span>) To: (<span id="to_date_field">2023-05-13</span>)</h6>

                                            <hr></hr>
                                        </div>
                                        <div class="container-fluid d-flex justify-content-between">
                                            <div class="col-lg-3 pl-0">
                                            </div>
                                            <div class="col-lg-3 pr-0">
                                                <p class="mt-5 mb-2 text-right"><b>Invoice #9939</b></p>
                                                <p class="text-right"><b>Client ID: {username}</b><br></br> <b>Net Amount:</b> 53001.00<br></br> <b>Brokrage:</b> 3636.60 <br></br><br></br><b>Bill Amount:</b> Rs. 49364.40</p>
                                            </div>
                                        </div>

                                        <div class="row invoice_instu_box">
                                            <p class="textcenter invoice_instu_title">MCX SILVER 03DEC2021</p>
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
