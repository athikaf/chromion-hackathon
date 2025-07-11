require("@nomicfoundation/hardhat-toolbox");

require("@nomicfoundation/hardhat-toolbox"); // if not already

require("dotenv").config();

module.exports = {
  solidity: "0.8.28",
  networks: {
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
