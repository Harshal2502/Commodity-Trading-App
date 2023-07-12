import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap';

export class Backoffice extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Backoffice  </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Backoffice </a></li>
              <li className="breadcrumb-item active" aria-current="page">Your Backoffice Details</li>
            </ol>
          </nav>
        </div>
        <div className="row">

          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Backoffice (0)</h4>

                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>

                        <th> Date </th>
                        <th> Type </th>
                        <th> Detail </th>
                        <th>Amount</th>


                      </tr>
                    </thead>
                    <tbody>
                      <tr>

                        <td> Herman Beck </td>
                        <td> $ 77.99 </td>
                        <td> May 15, 2015 </td>
                        <td> Herman Beck </td>
                      </tr>

                      <tr>

                        <td> Herman Beck </td>
                        <td> $ 77.99 </td>
                        <td> May 15, 2015 </td>
                        <td> Herman Beck </td>


                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>


          <div className="col-12 grid-margin stretch-card" style={{ marginBottom: 0 }}>
            <div className="card btn btn-gradient-dark">
              <div className="card-body text-center" style={{ paddingBottom: 0, paddingTop: "1rem", display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                <div>
                  <span >Net Total with Brkg</span>
                  <h4 >59538.9</h4>
                </div>
                <div>
                  <span >Net Total with Brkg</span>
                  <h4 >59538.9</h4>
                </div>
              </div>

            </div>
          </div>
          <div className="col-12 grid-margin stretch-card">
            <div className="card btn btn-gradient-dark">
              <div style={{ paddingTop: 0, paddingBottom: "1rem" }} className="card-body text-center">
                <span >Net Total with Brkg</span>
                <h4 >59538.9</h4>
              </div>

            </div>
          </div>




        </div>
      </div>
    )
  }
}

export default Backoffice
