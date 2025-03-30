const hre = require("hardhat");

async function main() {
    const TrustFund = await hre.ethers.getContractFactory("TrustFund");
    const trustFund = await TrustFund.deploy();
    await trustFund.deployed();
    console.log("TrustFund deployed to:", trustFund.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
