// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Donation {
    event DonationMade(address indexed donor, uint256 amount, string cause);

    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function donate(string memory cause) external payable {
        require(msg.value > 0, "Donation must be > 0");
        emit DonationMade(msg.sender, msg.value, cause);
    }

    function withdraw() external {
        require(msg.sender == owner, "Only owner can withdraw");
        payable(owner).transfer(address(this).balance);
    }

    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }
}

//0xC05C9882d8Ac7DaCCeE4961265B11478713673C5