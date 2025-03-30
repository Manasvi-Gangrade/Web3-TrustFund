import React, { useState } from "react";
import { ethers } from "ethers";
import "../styles/createfund.css";

const CreateFund = ({ contract }) => {
    const [recipient, setRecipient] = useState("");
    const [amount, setAmount] = useState("");

    const createFund = async () => {
        if (!recipient || !amount) return;
        const tx = await contract.createFund(recipient, { value: ethers.utils.parseEther(amount) });
        await tx.wait();
        alert("Fund Created!");
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Recipient Address"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
            />
            <input
                type="text"
                placeholder="Amount (ETH)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={createFund}>Create Fund</button>
        </div>
    );
};

export default CreateFund;
