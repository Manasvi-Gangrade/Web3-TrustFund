const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TrustFund Contract", function () {
    let TrustFund, trustFund, owner, addr1;

    beforeEach(async function () {
        [owner, addr1] = await ethers.getSigners();
        TrustFund = await ethers.getContractFactory("TrustFund");
        trustFund = await TrustFund.deploy();
        await trustFund.deployed();
    });

    it("Should allow users to create a fund", async function () {
        await trustFund.createFund(addr1.address, { value: ethers.utils.parseEther("1") });
        const funds = await trustFund.getFunds();
        expect(funds.length).to.equal(1);
    });

    it("Should allow the recipient to withdraw funds", async function () {
        await trustFund.createFund(addr1.address, { value: ethers.utils.parseEther("1") });
        await trustFund.connect(addr1).withdrawFunds(0);
        const funds = await trustFund.getFunds();
        expect(funds[0].withdrawn).to.equal(true);
    });
});
