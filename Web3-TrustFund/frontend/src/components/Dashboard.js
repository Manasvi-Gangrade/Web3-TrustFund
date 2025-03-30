import React, { useEffect, useState } from "react";
import "../styles/dashboard.css";

const Dashboard = ({ contract }) => {
    const [funds, setFunds] = useState([]);

    useEffect(() => {
        const fetchFunds = async () => {
            const fetchedFunds = await contract.getFunds();
            setFunds(fetchedFunds);
        };
        fetchFunds();
    }, [contract]);

    return (
        <div>
            <h2>Funds Dashboard</h2>
            {funds.map((fund, index) => (
                <div key={index}>
                    <p>Recipient: {fund.recipient}</p>
                    <p>Amount: {fund.amount.toString()} Wei</p>
                    <p>Withdrawn: {fund.withdrawn ? "Yes" : "No"}</p>
                </div>
            ))}
        </div>
    );
};

export default Dashboard;
