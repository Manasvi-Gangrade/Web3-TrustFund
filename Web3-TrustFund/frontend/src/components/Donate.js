import React, { useState } from "react";
import { ethers } from "ethers";

const Donate = ({ contract }) => {
    const [amount, setAmount] = useState("");

    const donate = async () => {
        if (!amount) return;
        const tx = await contract.createFund({ value: ethers.utils.parseEther(amount) });
        await tx.wait();
        alert("Donation Successful!");
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Amount (ETH)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={donate}>Donate</button>
        </div>
    );
};

export default Donate;
