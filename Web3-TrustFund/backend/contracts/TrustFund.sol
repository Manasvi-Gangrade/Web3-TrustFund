// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract TrustFund {
    address public owner;
    
    struct Fund {
        address payable recipient;
        uint256 amount;
        bool withdrawn;
    }

    Fund[] public funds;
    
    event FundCreated(address indexed recipient, uint256 amount);
    event FundWithdrawn(address indexed recipient, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    function createFund(address payable _recipient) public payable {
        require(msg.value > 0, "Fund amount must be greater than zero");
        funds.push(Fund(_recipient, msg.value, false));
        emit FundCreated(_recipient, msg.value);
    }

    function withdrawFunds(uint256 fundIndex) public {
        Fund storage fund = funds[fundIndex];
        require(msg.sender == fund.recipient, "Only the recipient can withdraw");
        require(!fund.withdrawn, "Funds already withdrawn");

        fund.withdrawn = true;
        fund.recipient.transfer(fund.amount);
        emit FundWithdrawn(fund.recipient, fund.amount);
    }

    function getFunds() public view returns (Fund[] memory) {
        return funds;
    }
}
