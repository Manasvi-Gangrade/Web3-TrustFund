# Web3-TrustFund
This repo consists of Web3 TrustFund, a decentralized crowdfunding platform on Ethereum (Polygon Mumbai Testnet). Users can create trust funds, accept crypto/NFT donations, and manage funds via a DAO. Built with Solidity (smart contracts), Node.js (backend), and React.js (frontend) for a seamless Web3 experience.

Project Overview :
Web3 TrustFund is a decentralized crowdfunding platform that leverages blockchain technology to ensure transparent, trustless, and secure fundraising. It allows users to:
Create trust funds for specific causes.
Accept donations in cryptocurrency & NFTs.
Manage funds through a DAO (Decentralized Autonomous Organization).

This project integrates Ethereum smart contracts, IPFS for data storage, and DAO governance to ensure fairness and security in fund management.

Tech Stack :
Smart Contracts (Solidity)
TrustFund.sol – Manages fund creation & withdrawals.
NFTDonation.sol – Handles NFT-based donations.
DAO.sol – Implements decentralized governance.
Backend (Node.js, Express, Hardhat)
Handles API requests for fund management & contract interaction.
Uses IPFS for decentralized storage.
Deploys & tests smart contracts using Hardhat.
Frontend (React.js)
--> User-friendly UI for fund creation & donations.
--> Web3.js & Ethers.js for smart contract interaction.
Metamask integration for easy crypto payments.

Folder Structure :

Web3-TrustFund/
│── backend/  
│   ├── contracts/  
│   │   ├── TrustFund.sol  
│   │   ├── NFTDonation.sol  
│   │   ├── DAO.sol  
│   ├── scripts/  
│   │   ├── deploy.js  
│   ├── test/  
│   │   ├── testTrustFund.js  
│   ├── hardhat.config.js  
│   ├── package.json  
│   ├── .env  
│── frontend/  
│   ├── src/  
│   │   ├── components/  
│   │   │   ├── Donate.js  
│   │   │   ├── CreateFund.js  
│   │   │   ├── Dashboard.js  
│   │   ├── pages/  
│   │   │   ├── Home.js  
│   │   │   ├── Funds.js  
│   ├── public/  
│   ├── styles/  
│   ├── package.json  
│   ├── .env  
│── README.md  

Setup & Installation
1. Clone the repository
git clone https://github.com/your-username/Web3-TrustFund.git  
cd Web3-TrustFund

2. Install Dependencies
# Backend  
cd backend  
npm install  

# Frontend  
cd ../frontend  
npm install \

3. Configure Environment Variables
Create a .env file in both backend/ and frontend/ directories.

Backend (backend/.env)
INFURA_API_KEY=your_infura_api_key  
PRIVATE_KEY=your_wallet_private_key  
MUMBAI_RPC_URL=https://polygon-mumbai.infura.io/v3/YOUR_PROJECT_ID 

Frontend (frontend/.env)
REACT_APP_BACKEND_URL=http://localhost:5000  
REACT_APP_CONTRACT_ADDRESS=0x123456...  

Deployment Guide

Backend (Hardhat & Node.js)
Compile Smart Contracts:
cd backend  
npx hardhat compile  

Deploy on Mumbai Testnet:
npx hardhat run scripts/deploy.js --network mumbai  

Start Backend Server:
npm start  

Frontend (React.js)
Run Frontend Locally:
cd frontend  
npm start  

Build & Deploy:
npm run build  

Deploy frontend using Vercel, Netlify, or GitHub Pages.

Features
Smart contract-based fund management
NFT donations supported
Decentralized DAO governance
Metamask wallet integration
Secure transactions on Polygon Mumbai Testnet

License
This project is open-source under the MIT License.

Developed by: Code Buddies
GitHub Repo: https://github.com/Manasvi-Gangrade/Web3-TrustFund

