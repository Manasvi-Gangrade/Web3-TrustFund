import React, { useState } from "react";
import "../styles/funds.css";

const Funds = ({ contract }) => {
    const [fundIndex, setFundIndex] = useState("");

    const withdrawFunds = async () => {
        if (fundIndex === "") return;
        const tx = await contract.withdrawFunds(fundIndex);
        await tx.wait();
        alert("Funds Withdrawn!");
    };

    return (
        <div>
            <h2>Manage Your Funds</h2>
            <input
                type="text"
                placeholder="Fund Index"
                value={fundIndex}
                onChange={(e) => setFundIndex(e.target.value)}
            />
            <button onClick={withdrawFunds}>Withdraw</button>
        </div>
    );
};

export default Funds;
