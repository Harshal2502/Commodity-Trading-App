import axios from "axios";
import { API_ROUTES } from "./constants";
import Cookies from 'js-cookie';


export const LOGIN = async (formdata, access_role) => {
  try {
    const res = await axios.post(API_ROUTES.LOGIN, formdata);

    sessionStorage.setItem('user_access', res.data.accesstoken);
    Cookies.set('user_refresh', res.data.refreshtoken, { httpOnly: false, secure: true, sameSite: 'strict', expires: 1 });

    const auth = await axios.post(API_ROUTES.AUTHUSER, { accesstoken: res.data.accesstoken });
    const result = access_role === auth.data.user.role;

    if (result) {
      return { auth, result }
    }
    else {
      const res = await LOGOUT();
      sessionStorage.removeItem("user_access");
    }

    return result;

  } catch (error) {
    return error;
  }
}



// export const CREATE_ADMIN = async (formdata) => {

//   try {
//     const res = await axios.post(API_ROUTES.CREATE_ADMIN, formdata);
//     return res.data;
//   } 
//   catch (error) {
//     return error;
//   }
// }

export const USER_REFRESH = async (token) => {

  const options = {
    refreshtoken: token
  };

  try {
    const res = await axios.post(API_ROUTES.USER_REFRESH, options)
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const CREATE_USER = async (formdata, admin) => {

  const options = {
    params: {
      admin
    },
  };

  try {
    const res = await axios.post(API_ROUTES.ADDUSER, formdata, options)
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const ADD_ADMIN = async (formdata, superadmin) => {

  const options = {
    params: {
      superadmin
    },
  };

  try {
    const res = await axios.post(API_ROUTES.ADDADMIN, formdata, options)
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const ADMIN_USERS = async (username) => {

  const options = {
    params: {
      username
    },
  };

  try {
    const res = await axios.get(API_ROUTES.ADMIN_USERS, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const SUPERADMIN_ADMINS = async (username) => {

  const options = {
    params: {
      username
    },
  };

  try {
    const res = await axios.get(API_ROUTES.SUPERADMIN_ADMINS, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const LOGOUT = async () => {

  try {
    const res = await axios.post(API_ROUTES.LOGOUT);

    sessionStorage.removeItem('user_access');
    Cookies.remove('user_refresh');

    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const ADMININFO = async (username) => {

  const options = {
    params: {
      username
    },
  };

  try {
    const res = await axios.get(API_ROUTES.ADMININFO, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const USERINFO = async (username) => {

  const options = {
    params: {
      username
    },
  };

  try {
    const res = await axios.get(API_ROUTES.USERINFO, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const DELETE_USER = async (admin, user) => {

  const options = {
    params: {
      username_admin: admin,
      username_user: user
    },
  };

  try {
    const res = await axios.delete(API_ROUTES.DELETE_USER, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const DELETE_ADMIN = async (superadmin, admin) => {

  const options = {
    params: {
      username_superadmin: superadmin,
      username_admin: admin
    },
  };

  try {
    const res = await axios.delete(API_ROUTES.DELETE_ADMIN, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const ORDER = async (username, quantity, symbol, exchange, price, expiry, order_type, type, data) => {

  data.InstrumentIdentifier = symbol;
  data.Exchange = exchange;

  const payload = {
    username: username,
    quantity: quantity,
    InstrumentIdentifier: symbol,
    exchange: exchange,
    data: data,
    expiry: expiry,
    order_type: order_type,
    limitprice: price
  };

  try {

    if (type === "market") {
      const res = await axios.post(API_ROUTES.MARKET_ORDER, payload);
      return res;
    }
    if (type == "limit") {
      const res = await axios.post(API_ROUTES.LIMIT_ORDER, payload);
      return res;
    }
  }
  catch (error) {
    return error;
  }

}

export const UPDATE_PASSWORD = async (username) => {

  const options = {
    params: {
      username: username,
    }
  };

  try {
    const res = await axios.post(API_ROUTES.UPDATE_PASSWORD, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const UPDATE_PASSWORD_USER = async (username, oldpassword, newpassword) => {

  const body = {
    oldpassword: oldpassword,
    newpassword: newpassword,
  }

  const options = {
    params: {
      username: username,
    }
  };

  console.log(body, options)

  try {
    const res = await axios.post(API_ROUTES.UPDATE_PASSWORD_USER, body, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const SET_WATCHLIST = async (username, expiry, exchange, Instrument, product, call_put, strikePrice) => {

  let options;

  Instrument === "OPTIDX" ? options = {
    params: {
      username: username,
      instrument: Instrument,
      exchange: exchange,
      expiry: expiry,
      product: product,
      call_put: call_put,
      strikePrice: strikePrice
    }
  } : options = {
    params: {
      username: username,
      instrument: Instrument,
      exchange: exchange,
      expiry: expiry,
      product: product
    }
  }

  try {
    const res = await axios.post(API_ROUTES.SET_WATCHLIST, {}, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const REMOVE_WATCHLIST = async (username, expiry, exchange, Instrument, product) => {

  const options = {
    params: {
      username: username,
      instrument: Instrument,
      exchange: exchange,
      expiry: expiry,
      product: product
    }
  };

  try {
    const res = await axios.post(API_ROUTES.REMOVE_WATCHLIST, {}, options);
    return res;
  }
  catch (error) {
    return error;
  }

}

export const GET_WATCHLIST = async (username) => {

  const options = {
    params: {
      username: username
    }
  };

  try {
    const res = await axios.get(API_ROUTES.GET_WATCHLIST, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const GET_ALL_ORDERS_BY_USER = async (username) => {

  const options = {
    params: {
      username: username
    }
  };

  try {
    const res = await axios.get(API_ROUTES.GET_ALL_ORDERS_BY_USER, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const GET_PENDING_ORDERS_USER = async (username) => {

  const options = {
    params: {
      username: username
    }
  };

  try {
    const res = await axios.get(API_ROUTES.GET_PENDING_ORDERS_USER, options);
    return res;
  }
  catch (error) {
    return error;
  }

}

export const GETALL_PENDING_ORDERS_ADMIN = async (username) => {

  const options = {
    params: {
      username: username
    }
  };

  try {
    const res = await axios.get(API_ROUTES.GET_ALL_PENDING_ORDERS_ADMIN, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const GETALL_ORDERS_ADMIN = async (username) => {

  const options = {
    params: {
      username: username
    }
  };

  try {
    const res = await axios.get(API_ROUTES.GETALL_ORDERS_ADMIN, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const GETALL_PLACED_ORDERS_ADMIN = async (username) => {

  const options = {
    params: {
      username: username
    }
  };

  try {
    const res = await axios.get(API_ROUTES.GETALL_PLACED_ORDERS_ADMIN, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const GETALL_MARKET_ORDERS_ADMIN = async (username) => {

  const options = {
    params: {
      username: username
    }
  };

  try {
    const res = await axios.get(API_ROUTES.GETALL_MARKET_ORDERS_ADMIN, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const GETALL_LIMIT_ORDERS_ADMIN = async (username) => {

  const options = {
    params: {
      username: username
    }
  };

  try {
    const res = await axios.get(API_ROUTES.GETALL_LIMIT_ORDERS_ADMIN, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const GETALL_SQRORDER_USER = async (username) => {

  const options = {
    params: {
      username: username
    }
  };

  try {
    const res = await axios.get(API_ROUTES.GETALL_SQRORDER_USER, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const PLACE_ALL_MARKET_ORDERS = async (username) => {

  const options = {
    params: {
      username: username
    }
  };

  try {
    const res = await axios.post(API_ROUTES.PLACE_ALL_MARKET_ORDERS, {}, options);
    return res;
  }
  catch (error) {
    return error;
  }

}

export const GETALL_PLACED_ORDER_USER = async (username) => {

  const options = {
    params: {
      username: username
    }
  };

  try {
    const res = await axios.get(API_ROUTES.GETALL_PLACED_ORDER_USER, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const GETALL_EXPIRED_ORDER_USER = async (username) => {

  const options = {
    params: {
      username: username
    }
  };

  try {
    const res = await axios.get(API_ROUTES.GETALL_EXPIRED_ORDER_USER, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const GETALL_CANCELED_ORDER_USER = async (username) => {

  const options = {
    params: {
      username: username
    }
  };

  try {
    const res = await axios.get(API_ROUTES.GETALL_CANCELED_ORDER_USER, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const WEEKLY_PL_USER = async (username) => {

  const options = {
    params: {
      username: username
    }
  };

  try {
    const res = await axios.get(API_ROUTES.WEEKLY_PL_USER, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const GET_PORTFOLIO_SINGLEUSER = async (username, placedOrders) => {

  const options = {
    params: {
      username: username,
      placedOrders: placedOrders
    }
  };

  try {
    const res = await axios.get(API_ROUTES.GET_PORTFOLIO_SINGLEUSER, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const SQUARE_OFF_FUNCTION = async (username, order_id) => {

  const options = {
    username: username,
    order_id: order_id
  };

  try {
    const res = await axios.post(API_ROUTES.SINGLE_ORDER_SQUARE_OFF, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const UPDATE_PORTFOLIO = async () => {

  try {
    const res = await axios.patch(API_ROUTES.UPDATE_PORTFOLIO);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const PLACE_ALL_LIMIT_ORDERS = async (username, limitOrdersData) => {

  const options = {
    username: username,
    limitOrdersData: limitOrdersData
  };

  try {
    const res = await axios.post(API_ROUTES.PLACE_ALL_LIMIT_ORDERS, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const GETALL_PENDING_LIMITORDERS_USER = async (username) => {

  const options = {
    params: {
      username: username,
    }
  };

  try {
    const res = await axios.get(API_ROUTES.GETALL_PENDING_LIMITORDERS_USER, options);
    return res;
  }
  catch (error) {
    return error;
  }

}

export const GETALL_PENDING_MARKETORDERS_USER = async (username) => {

  const options = {
    params: {
      username: username,
    }
  };

  try {
    const res = await axios.get(API_ROUTES.GETALL_PENDING_MARKETORDERS_USER, options);
    return res;
  }
  catch (error) {
    return error;
  }

}

export const GET_NOTIFICATIONS = async (username) => {

  const options = {
    params: {
      username: username,
    }
  };

  try {
    const res = await axios.get(API_ROUTES.GET_NOTIFICATIONS, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const GET_ADMIN_NOTIF = async (username) => {

  const options = {
    params: {
      username: username,
    }
  };

  try {
    const res = await axios.get(API_ROUTES.GET_ADMIN_NOTIF, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const GET_ACCOUNT_CONTENT = async (username) => {

  const options = {
    params: {
      username: username,
    }
  };

  try {
    const res = await axios.get(API_ROUTES.GET_ACCOUNT_CONTENT, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const GET_MARGIN_BY_USER = async (username) => {

  const options = {
    params: {
      username: username,
    }
  };

  try {
    const res = await axios.get(API_ROUTES.GET_MARGIN_BY_USER, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const CREDIT_CASHBALANCE_USER = async (username_admin, username_user, amount) => {

  const options = {
    params: {
      username_admin: username_admin,
      username_user: username_user,
      amount: amount
    },
  };

  try {
    const res = await axios.post(API_ROUTES.CREDIT_CASHBALANCE_USER, {}, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const CREDIT_CASHBALANCE_ADMIN = async (username_admin, username_user, amount) => {

  const options = {
    params: {
      username_superadmin: username_admin,
      username_admin: username_user,
      amount: amount
    },
  };

  try {
    const res = await axios.post(API_ROUTES.CREDIT_CASHBALANCE_ADMIN, {}, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const CREDIT_VIRTUALBALANCE_USER = async (username_admin, username_user, amount) => {

  const options = {
    params: {
      username_admin: username_admin,
      username_user: username_user,
      amount: amount
    },
  };

  try {
    const res = await axios.post(API_ROUTES.CREDIT_VIRTUALBALANCE_USER, {}, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const DEBIT_CASHBALANC_USER = async (username_admin, username_user, amount) => {

  const options = {
    params: {
      username_admin: username_admin,
      username_user: username_user,
      amount: amount
    },
  };

  try {
    const res = await axios.post(API_ROUTES.DEBIT_CASHBALANC_USER, {}, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const DEBIT_VIRTUALBALANC_USER = async (username_admin, username_user, amount) => {

  const options = {
    params: {
      username_admin: username_admin,
      username_user: username_user,
      amount: amount
    },
  };

  try {
    const res = await axios.post(API_ROUTES.DEBIT_VIRTUALBALANC_USER, {}, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const DEBIT_CASHBALANC_ADMIN = async (username_admin, username_user, amount) => {

  const options = {
    params: {
      username_superadmin: username_admin,
      username_admin: username_user,
      amount: amount
    },
  };

  try {
    const res = await axios.post(API_ROUTES.DEBIT_CASHBALANC_ADMIN, {}, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const GET_EXCHANGES = async () => {

  try {
    const res = await axios.get(API_ROUTES.GET_EXCHANGES);
    return res.data;
  }
  catch (err) {
    return err;
  }

}

export const GET_INSTRUMENTS = async (exchange) => {

  const options = {
    params: {
      exchange: exchange
    },
  };

  try {
    const res = await axios.get(API_ROUTES.GET_INSTRUMENTS, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const GET_PRODUCTS = async (exchange, instrument) => {

  const options = {
    params: {
      exchange: exchange,
      instrument: instrument
    },
  };

  try {
    const res = await axios.get(API_ROUTES.GET_PRODUCTS, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const GET_PRODUCTS_SINGLE = async (exchange) => {

  const options = {
    params: {
      exchange: exchange
    },
  };

  try {
    const res = await axios.get(API_ROUTES.GET_PRODUCTS, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const GET_EXPIRY = async (exchange, instrument, product) => {

  const options = {
    params: {
      exchange: exchange,
      instrument: instrument,
      product: product
    },
  };

  try {
    const res = await axios.get(API_ROUTES.GET_EXPIRY, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const FETCH_INVOICE = async (username) => {

  const options = {
    params: {
      username: username,

    },
  };

  try {
    const res = await axios.get(API_ROUTES.FETCH_INVOICE, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const GET_PORTFOLIO_ADMIN_SINGLEUSER = async (username) => {

  const options = {
    params: {
      username: username,

    },
  };

  try {
    const res = await axios.get(API_ROUTES.GET_PORTFOLIO_ADMIN_SINGLEUSER, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const GET_PORTFOLIO_ALLUSERS = async (username) => {

  const options = {
    params: {
      username_admin: username,

    },
  };

  try {
    const res = await axios.get(API_ROUTES.GET_PORTFOLIO_ALLUSERS, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const GET_CALL_PUT = async (exchange, instrument, product) => {

  const options = {
    params: {
      exchange: exchange,
      instrument: instrument,
      product: product
    },
  };

  try {
    const res = await axios.get(API_ROUTES.GET_CALL_PUT, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const GET_STRIKE_PRICE = async (exchange, instrument, product, callput) => {

  const options = {
    params: {
      exchange: exchange,
      instrument: instrument,
      product: product,
      callput: callput
    },
  };

  try {
    const res = await axios.get(API_ROUTES.GET_STRIKE_PRICE, options);
    return res.data;
  }
  catch (error) {
    return error;
  }

}

export const EDIT_USER = async (admin, user, formData) => {

  const query = {
    params: {
      username_admin: admin,
      username_user: user,
    },
  };

  const body = {
    MCX_allow: formData.MCX_allow,
    FONSE_allow: formData.FONSE_allow,
    brokereage_MCX: formData.brokereage_MCX,
    brokereage_NFO: formData.brokereage_NFO,
    profit_limit: formData.profit_limit,
    margin_limit: formData.margin_limit,
  };

  console.log(query)
  console.log(body)

  try {
    const res = await axios.patch(API_ROUTES.EDIT_USER, query, body);
    return res.data;
  }
  catch (error) {
    return error;
  }

}
