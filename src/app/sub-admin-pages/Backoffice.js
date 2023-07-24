import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { FETCH_BACKOFFICE_SUBADMIN } from '../../utils/API';

export const Backoffice = () => {

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

  const [array, setArray] = useState();

  useEffect(() => {

    const fun = async () => {
      const res = await FETCH_BACKOFFICE_SUBADMIN(username);
      const singleArray = [].concat(...res);
      setArray(singleArray);
    }

    fun();
  }, [])

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> Backoffice </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}> Backoffice </a></li>
            <li className="breadcrumb-item active" aria-current="page"> Your Backoffice Details </li>
          </ol>
        </nav>
      </div>
      <div className="row">

        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title"> Backoffice ({array?.length}) </h4>

              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>

                      <th> Payeename </th>
                      <th> Payment Type </th>
                      <th> Amount </th>
                      <th> Type </th>


                    </tr>
                  </thead>

                  <tbody>

                    {
                      array?.length > 0 ? array?.map((entry) => {
{/* 
                        const dateObj = new Date(entry.createdAt);
                        const day = dateObj.getDate();
                        const month = dateObj.toLocaleString('default', { month: 'short' }).toUpperCase();
                        const year = dateObj.getFullYear();
                        const formattedDate = `${day}${month}${year}`; */}

                        return (
                          <tr>

                            <td> {entry?.username ?? "-"} </td>
                            <td> {entry?.payment_events.p_type ?? "-"} </td>
                            <td> {entry?.payment_events.price ?? "-"} </td>
                            <td> {entry?.payment_events.type ?? "-"} </td>
                          </tr>
                        )

                      }) : (
                        <>
                          <td>-</td>
                          <td>Nothing to see here yet!</td>
                          <td>-</td>
                          <td>-</td>
                        </>
                      )
                    }


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


export default Backoffice
