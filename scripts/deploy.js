const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  // Deploy Donation
  const Donation = await hre.ethers.getContractFactory("Donation");
  const donation = await Donation.deploy();
  await donation.deployed();
  console.log(`Donation deployed at: ${donation.address}`);

  // Deploy CCIP Receiver
  const routerAddress = "0x88E492127709447A5ABEFdaB8788a15B4567589E"; // Fuji CCIP Router
  const CCIPReceiver = await hre.ethers.getContractFactory(
    "CCIPReceiverDonation"
  );
  const receiver = await CCIPReceiver.deploy(routerAddress, donation.address);
  await receiver.deployed();
  console.log(`CCIP Receiver deployed at: ${receiver.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
