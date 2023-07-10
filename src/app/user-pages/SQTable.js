import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SQUARE_OFF_FUNCTION } from "../../utils/API";
import { useSelector } from "react-redux";
import './SQTable.css';

export const SQTable = () => {

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

    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const socket = new WebSocket("ws://52.66.105.29:8020");

        socket.onopen = () => {
            console.log("Balance Connection Established");
            socket.send(username);
        };

        const parseData = (data) => {
            try {
                const parsedData = JSON.parse(`[${data}]`);
                return parsedData;
            } catch (error) {
                console.error("Error parsing data:", error);
                return [];
            }
        };

        socket.onmessage = async (event) => {
            const data = event.data;
            const parsedArray = parseData(data);
            setPortfolio(parsedArray[0]?.portfolio)
        };

        socket.onclose = () => {
            console.log("Balance Connection Closed");
        };

        return () => {
            socket.close();
        };
    }, [username]);

    const handleClick = async (e) => {
        e.preventDefault();

        const res = await SQUARE_OFF_FUNCTION(username, e.target.value);
        toast.info(res.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
            hideProgressBar: false,
            pauseOnHover: true,
        });
    }


    return (

        <div className="row">
            <div style={{ marginTop: "3rem", padding: "0" }} className="col-lg-12 grid-margin stretch-card">
                <div className="card" style={{ background: 'rgba(156, 162, 173, 0.2705882353)', borderRadius: '15px' }}>
                    <div className="card-body" style={{ color: 'white' }}>
                        <h4 className="card-title" style={{ color: 'white' }}>PortFolio</h4>
                        <div className="table-responsive">
                            <table className="table table-striped" style={{ color: 'white' }}>
                                <thead style={{ background: '#10151a' }}>
                                    <tr style={{ background: '#10151a' }}>

                                        <th> Exchange </th>
                                        <th> Script | Expiry </th>
                                        <th> Order Type</th>
                                        <th> Quantity </th>
                                        <th> Avarage Price </th>
                                        <th> Current Price </th>
                                        <th> Profit / Loss</th>
                                        <th> P/L with Brkg  </th>
                                        <th> Square Off </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        portfolio && portfolio.length > 0 ? portfolio.map((entry, index) => {

                                            const dateObj = new Date(entry.expiry);
                                            const day = dateObj.getDate();
                                            const month = dateObj.toLocaleString('default', { month: 'short' }).toUpperCase();
                                            const year = dateObj.getFullYear();
                                            const formattedDate = `${day}${month}${year}`;

                                            return (
                                                <tr>
                                                    <td> {entry.exchange ?? "XXXX"} </td>
                                                    <td> {entry.symbol.split("-")[0] ?? "-"} | {formattedDate ?? "-"} </td>
                                                    <td> {entry.order_type ?? "TYPE"} </td>
                                                    <td> {entry.quantity ?? "000"} </td>
                                                    <td> {entry.averagePrice ?? "000.0"} </td>
                                                    <td> {entry.currentPrice ?? "000.0"} </td>
                                                    <td> {entry.profitloss ? entry.profitloss : "000.0"} </td>
                                                    <td> {entry.profitlosswithbrkg ? entry.profitlosswithbrkg : "000.0"} </td>
                                                    <td> <button onClick={handleClick} value={entry.order_id} className='btn btn-primary'> S/O </button> </td>
                                                </tr>
                                            )
                                        }) : (
                                            <>
                                                <tr>
                                                    <td colSpan="10"> No data Found </td>
                                                </tr>
                                            </>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}