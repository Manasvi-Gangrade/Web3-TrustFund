// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract DAO {
    address public admin;
    struct Proposal {
        string description;
        uint256 votes;
        bool executed;
    }

    Proposal[] public proposals;

    event ProposalCreated(uint256 proposalId, string description);
    event Voted(uint256 proposalId, uint256 votes);
    event ProposalExecuted(uint256 proposalId);

    constructor() {
        admin = msg.sender;
    }

    function createProposal(string memory _description) public {
        proposals.push(Proposal(_description, 0, false));
        emit ProposalCreated(proposals.length - 1, _description);
    }

    function vote(uint256 _proposalId) public {
        Proposal storage proposal = proposals[_proposalId];
        require(!proposal.executed, "Already executed");
        proposal.votes++;
        emit Voted(_proposalId, proposal.votes);
    }

    function executeProposal(uint256 _proposalId) public {
        Proposal storage proposal = proposals[_proposalId];
        require(!proposal.executed, "Already executed");
        require(proposal.votes > 2, "Not enough votes");

        proposal.executed = true;
        emit ProposalExecuted(_proposalId);
    }
}
