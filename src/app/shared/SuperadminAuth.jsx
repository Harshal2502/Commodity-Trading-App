import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Cookies from "js-cookie";
import { setAccessrole, setUsername } from "../../redux/action/action";
import { API_ROUTES } from "../../utils/constants";
import axios from "axios";
import { USER_REFRESH } from "../../utils/API";

export function SuperadminAuth({ children }) {

    const dispatch = useDispatch();
    const location = useLocation();
    
    const [loading, setLoading] = useState(true);
    const { accessrole } = useSelector((state) => {
        if (!state) {
            return {
                accessrole: null
            };
        }
        return {
            accessrole: state.accessrole
        };
    });

    const auth1 = async () => {

        try {
            const response = await axios.post(API_ROUTES.AUTHUSER, { accesstoken: sessionStorage.getItem('user_access') });
            dispatch(setUsername(response.data.user.username));
            dispatch(setAccessrole(response.data.user.role));
        }
        catch (err) {
            const res = await USER_REFRESH(Cookies.get('user_refresh'))
            sessionStorage.setItem('user_access', res.accesstoken);

            const response = await axios.post(API_ROUTES.AUTHUSER, { accesstoken: sessionStorage.getItem('user_access') });
            console.log(response)

            dispatch(setUsername(response.data.user.username));
            dispatch(setAccessrole(response.data.user.role));
        }
        finally {
            setLoading(false);
        }

    };

    useEffect(() => {
        auth1();
    }, []);

    const currentPath = window.location.pathname;

    if (loading) {
        return <div style={{ textAlign: "center" }}><span className="loader"></span></div>;
    }

    if (!accessrole) {
        return <Navigate to="/supermaster_login" state={{ from: location }} />;
    }

    if(accessrole !== "superadmin") {
        return <Navigate to="/error-pages/error-404" state={{ from: location }} />;
    }


    return children;
}
