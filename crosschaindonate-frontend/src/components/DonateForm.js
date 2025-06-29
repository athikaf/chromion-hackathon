"use client";

import { useState } from "react";
import { useAccount, useWalletClient } from "wagmi";
import { ethers } from "ethers";
import DonationArtifact from "../constants/DonationABI.json";

const DONATION_ADDRESS = "0xC05C9882d8Ac7DaCCeE4961265B11478713673C5";

export default function DonateForm() {
  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();
  const [cause, setCause] = useState("");
  const [amount, setAmount] = useState("");

  const handleDonate = async () => {
    if (!walletClient) return alert("Connect your wallet!");

    const provider = new ethers.BrowserProvider(walletClient);
    const signer = await provider.getSigner();

    const donation = new ethers.Contract(
      DONATION_ADDRESS,
      DonationArtifact.abi,
      signer
    );

    const tx = await donation.donate(cause, {
      value: ethers.parseEther(amount),
    });

    await tx.wait();
    alert("Donation successful!");
  };

  return (
    <div className="p-4 border rounded-xl">
      <h2 className="font-bold mb-2">Make a Donation</h2>
      <input
        className="border p-2 mb-2 w-full"
        placeholder="Cause (e.g. Education)"
        value={cause}
        onChange={(e) => setCause(e.target.value)}
      />
      <input
        className="border p-2 mb-2 w-full"
        placeholder="Amount in AVAX"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleDonate}
      >
        Donate
      </button>
    </div>
  );
}
