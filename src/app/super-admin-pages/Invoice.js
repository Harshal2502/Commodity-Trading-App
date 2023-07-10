import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap';

export class Invoices extends Component {
  render() {
    return (
      <div>
        {/* <div className="page-header">
          <h3 className="page-title"> Invoice  </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Invoice </a></li>
              <li className="breadcrumb-item active" aria-current="page">Your Bill Invoice</li>
            </ol>
          </nav>
        </div> */}
         <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">                
                <form className="form-inline">                           
                             
                  <select class="form-control mb-2 mr-sm-2 col-md-10 col-lg-6 col-xl-9" >
                    <option selected disabled>Please Select</option>
                    <option vaue="order">Clients (All)</option>
                    <option value="pending">Sameer123</option>
                    <option value="excuted">Harshal123</option>
                    <option value="cancelled">Bhargav123</option>
                    <option value="expired">Perin123</option>
                    </select>
                 <button type="submit" className="btn btn-gradient-primary mb-2">Show</button>
                </form>
              </div>
            </div>
          </div>
        <div className="row">
          
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Invoices (0)</h4>
                {/* <p className="card-description"> Add className <code>.table-striped</code>
                </p> */}
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                       
                        <th> Bill No. </th>  
                        <th>  UserCode </th>                       
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
                      <tr>
                       
                        <td> 9939 </td>    
                        <td> sam321 </td>                       
                        <td> 2023-05-08 07:00:00 </td>
                        <td> 2023-05-13 00:12:26 </td>
                        <td> 3636.60 </td> 
                        <td> 53001.00 </td>
                        <td> 49364.40 </td> 
                        <td> 13-05-2023 (00:12)  </td>
                        <td> <span onclick="get_invoice()">View Bill </span></td>              
                      </tr>

                      <tr>
                        
                        <td> 9719 </td>   
                        <td> abhay321 </td>                     
                        <td> 2023-05-01 07:00:00 </td>
                        <td> 2023-05-06 00:12:20 </td>
                        <td> 2223.09 </td>  
                        <td> 84160.00 </td>
                        <td> 81936.90 </td>  
                        <td> 06-05-2023 (00:12)  </td>
                        <td> <span onclick="get_invoice()">View Bill </span></td>    
                       
                        
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
         
         
          <div className="col-12 grid-margin stretch-card">
            <div className="card ">
             
            <div class="card-body">
                <div class="container-fluid">
                <h4 class="float-left"><i class="mdi mdi-earth"></i>Democ</h4>
               
                        <h6 class="text-right">From: (<span id="from_date_field">2021-10-25</span>) To: (<span id="to_date_field">2021-10-30</span>)</h6>
                    
                    <hr></hr>
                </div>
                    <div class="container-fluid d-flex justify-content-between">
                        <div class="col-lg-3 pl-0">
                            {/* <p class="mt-5 mb-2"><b>Purple React Admin</b></p>
                            <p>104,<br></br>Minare SK,<br></br>Canada, K1A 0G9.</p> */}
                        </div>
                            <div class="col-lg-3 pr-0">
                                <p class="mt-5 mb-2 text-right"><b>Invoice #209</b></p>
                                <p class="text-right"><b>Client ID:democ</b><br></br> <b>Net Amount:</b> -189990.00<br></br> <b>Brokrage:</b> 357.18 <br></br><br></br><b>Bill Amount:</b> Rs. -190347.00</p>
                            </div>
                    </div>
                    {/* <div class="container-fluid d-flex justify-content-between">
                        <div class="col-lg-3 pl-0">
                            <p class="mb-0 mt-5">Invoice Date : 23rd Jan 2016</p>
                            <p>Due Date : 25th Jan 2017</p>
                        </div>
                    </div> */}
                    
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


                    <div class="row invoice_instu_box">
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
                    </div>
                    
                       
            </div>
            
            
            </div>
          </div>
         
        

        </div>
      </div>
    )
  }
}

export default Invoices
