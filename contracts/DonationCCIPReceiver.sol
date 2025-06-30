// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import { CCIPReceiver } from "@chainlink/contracts/src/v0.8/ccip/applications/CCIPReceiver.sol";
import { Client } from "@chainlink/contracts/src/v0.8/ccip/libraries/Client.sol";

interface IDonation {
    function donate(string memory cause) external payable;
}

contract CCIPReceiverDonation is CCIPReceiver {
    address public owner;
    IDonation public donationContract;

    constructor(address router, address donationContractAddress) CCIPReceiver(router) {
        owner = msg.sender;
        donationContract = IDonation(donationContractAddress);
    }

    function _ccipReceive(Client.Any2EVMMessage memory message) internal override {
        // Forward received funds to Donation contract
        uint256 amount = message.tokenAmounts[0].amount;

        require(address(this).balance >= amount, "Insufficient balance");

        // Send to Donation contract as donation to default cause
        donationContract.donate{value: amount}("Cross-Chain Donation");
    }

    // Allow contract to receive native tokens
    receive() external payable {}

    // Withdraw in emergencies
    function withdraw() external {
        require(msg.sender == owner, "Only owner can withdraw");
        payable(owner).transfer(address(this).balance);
    }
}
