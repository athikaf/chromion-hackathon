# 🌟 CrossChainDonate

_Decentralized, Cross-Chain Donations Powered by Avalanche, Chainlink CCIP, and AI_

---

## 🚀 Overview

**CrossChainDonate** is a blockchain-based donation platform designed to make fundraising:

✅ Cross-chain compatible with Chainlink CCIP  
✅ Transparent and secure on Avalanche  
✅ Beginner-friendly with AI-powered guidance

The platform enables users to donate directly on Avalanche or send funds from supported chains using CCIP, with an integrated ElizaOS AI Assistant simplifying the process for newcomers.

---

## 🎥 Video Demo

⚠️ **Note to Organizers:**  
We originally uploaded our demo video to YouTube; however, it appears to have been taken down unexpectedly due to reasons beyond our control (possibly automated flagging, copyright filters, or other unknown platform restrictions).

We sincerely apologize for this inconvenience,

Here's the reuploaded link:

Thank you for your understanding and consideration!

---

## 🎯 Features

- **On-Chain Donations:** Donate in AVAX directly to smart contracts deployed on Avalanche Fuji testnet
- **Cross-Chain Contributions:** Send funds from other chains (e.g., Sepolia) via Chainlink CCIP, seamlessly received on Avalanche
- **AI Donation Assistant:** ElizaOS AI agent explains causes, donation flow, and cross-chain concepts in plain language
- **Real-Time Donation History:** Frontend displays recent donations with cause, amount, and donor address
- **Transparent & Secure:** Smart contracts manage funds, with all transactions visible on-chain

---

## 🏗️ Architecture

Frontend (Next.js + Wagmi + RainbowKit) <br />
│<br />
├── AI Chatbot (ElizaOS agent runs separately)<br />
│<br />
├── Donation Contract (Avalanche Fuji)<br />
│<br />
└── CCIP Receiver Contract (Avalanche Fuji)<br />
↳ Accepts cross-chain tokens<br />
↳ Forwards funds to Donation Contract<br />

---

## ⚙️ Technologies Used

✅ Avalanche Fuji Testnet — Smart contract deployment  
✅ Chainlink CCIP — Cross-chain token transfer infrastructure  
✅ ElizaOS — AI agent for user guidance  
✅ Next.js — Modern, responsive frontend  
✅ RainbowKit + Wagmi — Wallet connection  
✅ Ethers.js — Blockchain interactions  
✅ Hardhat — Smart contract development and deployment  
✅ Tailwind CSS — Sleek, responsive UI styling

---

## 💡 How It Works

1. **Connect Wallet:** Users connect wallets on Avalanche Fuji or other supported chains
2. **Donate Directly or Cross-Chain:**
   - Direct donations via AVAX on Avalanche
   - Cross-chain donations using Chainlink CCIP
3. **AI Assistant:** Users can chat with the AI to learn about causes, donation process, or technical terms
4. **Transparency:**
   - All donations are logged on-chain
   - Events displayed on the frontend
   - Users can view real-time donation history

---

## 🔧 Setup & Run Locally

### 1️⃣ Clone the Repositories

````bash
git clone https://github.com/your-repo/crosschaindonate-frontend.git
git clone https://github.com/your-repo/elizaos-donation-agent.git

---

## ⚙️ Technologies Used

✅ Avalanche Fuji Testnet — Smart contract deployment
✅ Chainlink CCIP — Cross-chain token transfer infrastructure
✅ ElizaOS — AI agent for user guidance
✅ Next.js — Modern, responsive frontend
✅ RainbowKit + Wagmi — Wallet connection
✅ Ethers.js — Blockchain interactions
✅ Hardhat — Smart contract development and deployment
✅ Tailwind CSS — Sleek, responsive UI styling

---

## 💡 How It Works

1. **Connect Wallet:** Users connect wallets on Avalanche Fuji or other supported chains
2. **Donate Directly or Cross-Chain:**
   - Direct donations via AVAX on Avalanche
   - Cross-chain donations using Chainlink CCIP
3. **AI Assistant:** Users can chat with the AI to learn about causes, donation process, or technical terms
4. **Transparency:**
   - All donations are logged on-chain
   - Events displayed on the frontend
   - Users can view real-time donation history

---

## 🔧 Setup & Run Locally

### 1️⃣ Clone the Repositories

```bash
git clone https://github.com/your-repo/crosschaindonate-frontend.git
git clone https://github.com/your-repo/elizaos-donation-agent.git

### 2️⃣ Smart Contracts

```bash
cd your-contract-project
npm install
npx hardhat compile
npx hardhat run scripts/deploy.js --network fuji

✅ Save your deployed contract addresses (Donation Contract + CCIP Receiver Contract)

### 3️⃣ AI Agent Setup

```bash
cd elizaos-donation-agent
bun install -g @elizaos/cli
elizaos start

### 4️⃣ Frontend Setup

```bash
cd crosschaindonate-frontend
npm install

Create or update your .env.local file:

NEXT_PUBLIC_ELIZA_AGENT_URL=http://localhost:3001
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id

Start your frontend:

npm run dev
Open your application at:
http://localhost:3000

✅ The frontend connects to your deployed Donation contracts
✅ The AI Assistant connects to your local ElizaOS agent
✅ Users can donate, see real-time history, and chat with the AI assistant

## 🧩 Project Structure

crosschaindonate-frontend/
├── app/ # Next.js pages and layout
├── components/ # Reusable UI components (Chatbot, DonateForm, DonationsList)
├── constants/ # Contract ABIs and configuration files
├── styles/ # Global CSS and optional Tailwind setup

elizaos-donation-agent/
├── character.js # AI persona and assistant behavior definition
├── config files # ElizaOS project setup and environment configscrosschaindonate-frontend/
├── app/ # Next.js pages and layout
├── components/ # Reusable UI components (Chatbot, DonateForm, DonationsList)
├── constants/ # Contract ABIs and configuration files
├── styles/ # Global CSS and optional Tailwind setup

my-agent/
├── character.js # AI persona and assistant behavior definition
├── config files # ElizaOS project setup and environment configs

## 🏁 Tracks Applied

✅ Chainlink Grand Prize
✅ Cross-Chain Solutions (CCIP)
✅ ElizaOS AI Agent Track
✅ Avalanche Track

## 🎉 Challenges & Learnings

- Navigating Chainlink CCIP setup and configuring multi-network environments
- Deploying modular smart contracts that separate donation logic from CCIP handling
- Integrating and customizing ElizaOS to build a friendly AI donation assistant
- Simplifying blockchain complexity for users through approachable UI and AI-driven explanations
- Coordinating frontend, smart contracts, and AI agent together for a seamless, functional experience

## 🤖 Future Improvements

- Deploy AI agent to a public cloud server for production use
- Support additional donation causes beyond Education, Health, and Environment
- Integrate Chainlink Price Feeds to display live donation amounts in USD
- Expand to multiple destination chains for wider cross-chain support
- Implement user profiles, badges, and proof of donation certificates
- Add analytics for donation trends and cause-specific impact
- Enhance AI Assistant with real-time on-chain data awareness

## 💬 Questions? Contact

**Athika Fatima**
[LinkedIn](https://www.linkedin.com/in/athika-fatima/)
[Email](mailto:athika.fxz@gmail.com)
[Project Repository](https://github.com/athikaf/chromion-hackathon)
````
