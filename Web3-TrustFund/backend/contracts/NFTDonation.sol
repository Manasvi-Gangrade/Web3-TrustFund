// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTDonation is ERC721, Ownable {
    uint256 public nextTokenId;

    constructor() ERC721("DonationNFT", "DNFT") {}

    function mintNFT(address recipient) external onlyOwner {
        _safeMint(recipient, nextTokenId);
        nextTokenId++;
    }
}
