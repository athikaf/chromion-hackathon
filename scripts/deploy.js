const hre = require("hardhat");

async function main() {
  const donation = await hre.ethers.deployContract("Donation");
  console.log(`Donation contract deployed at ${donation.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
