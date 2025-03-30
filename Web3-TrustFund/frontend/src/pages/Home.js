import React from "react";
import Donate from "../components/Donate";

const Home = ({ contract }) => {
    return (
        <div>
            <h1>Welcome to Web3 TrustFund</h1>
            <Donate contract={contract} />
        </div>
    );
};

export default Home;
