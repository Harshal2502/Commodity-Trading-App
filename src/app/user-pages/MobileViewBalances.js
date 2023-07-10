import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const MobileViewBalances = () => {


    const { username } = useSelector((state) => {
        if (!state) {
            return {
                username: null,
            };
        }
        return {
            username: state.username,
        };
    });

    const [PL, setPL] = useState();
    const [balance, setBalance] = useState();

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
            setPL(parsedArray[0]?.weeklyPL);
            setBalance(parsedArray[0]?.availableBalance);
        };

        socket.onclose = () => {
            console.log("Balance Connection Closed");
        };

        return () => {
            socket.close();
        };
    }, [username]);

    return (
        <div
            style={{
                color: "white",
                display: "flex",
                width: "100%",
                justifyContent: "space-evenly",
                marginBottom: "20px",
                marginTop: "10px",
            }}
        >
            <div className="" style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
                <span style={{ color: "#ae66ff", fontWeight: "bold" }}> Weekly PL : </span> <span style={{ fontWeight: "bold" }}>{PL ?? "0.00"}</span>
            </div>
            <div
                className=""
                style={{
                    fontSize: "14px",
                    marginLeft: "10px",
                    whiteSpace: "nowrap",
                }}
            >
                <span style={{ color: "#ae66ff", fontWeight: "bold" }}>Balance : </span> <span style={{ fontWeight: "bold" }}>{balance ?? "0.00" }</span>
            </div>
        </div>
    )
}