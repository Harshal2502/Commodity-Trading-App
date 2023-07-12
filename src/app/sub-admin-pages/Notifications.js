import React, { useEffect, useState } from 'react'
import { GET_ADMIN_NOTIF, GET_NOTIFICATIONS } from '../../utils/API';
import { useSelector } from 'react-redux';

export const Notificationss = () => {

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

  const [notifics, setNotifics] = useState();

  useEffect(() => {
    getNotifics();
  }, [])

  const getNotifics = async () => {
    const res = await GET_ADMIN_NOTIF(username);
    const singleArray = [].concat(...res);
    setNotifics(singleArray);
  }

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> Notifications </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Notifications</a></li>
            <li className="breadcrumb-item active" aria-current="page">Your Notifications</li>
          </ol>
        </nav>
      </div>


      <div className="row">

        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div class="card-body">
              <h4 class="card-title">Notifications</h4>

              {notifics?.length > 0 ? notifics.map((entry, index) => {
                const classNames = [
                  'alert-primary',
                  'alert-secondary',
                  'alert-success',
                  'alert-danger',
                  'alert-warning',
                  'alert-info',
                  {/* 'alert-dark' */}
                ];

                const className = classNames[index % classNames.length];

                const dateObj3 = new Date(entry.createdAt);
                const day3 = dateObj3.getDate();
                const month3 = dateObj3.toLocaleString('default', { month: 'short' }).toUpperCase();
                const year3 = dateObj3.getFullYear();
                const time3 = dateObj3.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
                const formattedDate3 = `${day3}${month3}${year3} (${time3})`;

                return (
                  <div role="alert" className={`fade alert ${className} show`}>
                    <h6><i className="mdi mdi-account"></i>[{entry.username}] {formattedDate3} </h6>
                    {entry.notificationText}
                  </div>
                );
              }) :
                <div role="alert" class="fade alert alert-primary show">
                  Nothing to see here yet!
                </div>
              }


              {/* <div role="alert" class="fade alert alert-secondary show">This is a secondary alert—check it out!</div>
              <div role="alert" class="fade alert alert-success show">This is a success alert—check it out!</div>
              <div role="alert" class="fade alert alert-danger show">This is a danger alert—check it out!</div>
              <div role="alert" class="fade alert alert-warning show">This is a warning alert—check it out!</div>
              <div role="alert" class="fade alert alert-info show">This is a info alert—check it out!</div>
              <div role="alert" class="fade alert alert-light show">This is a light alert—check it out!</div>
              <div role="alert" class="fade alert alert-dark show">This is a dark alert—check it out!</div> */}
            </div>
          </div>
        </div>




      </div>
    </div >
  )
}

export default Notificationss
