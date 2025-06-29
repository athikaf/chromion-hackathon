"use client";

import { useEffect, useState } from "react";
import { ethers } from "ethers";
import DonationArtifact from "../constants/DonationABI.json";
import { DONATION_CONTRACT_ADDRESS } from "../constants/config";

export default function DonationsList() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        if (typeof window.ethereum !== "undefined") {
          const provider = new ethers.BrowserProvider(window.ethereum);

          const contract = new ethers.Contract(
            DONATION_CONTRACT_ADDRESS,
            DonationArtifact.abi,
            provider
          );

          const latestBlock = await provider.getBlockNumber();
          const fromBlock = Math.max(latestBlock - 2000, 0);

          const filter = contract.filters.DonationMade();

          const events = await contract.queryFilter(
            filter,
            fromBlock,
            latestBlock
          );

          const formatted = events.map((e) => ({
            donor: e.args.donor,
            amount: ethers.formatEther(e.args.amount),
            cause: e.args.cause,
          }));

          setDonations(formatted);
        }
      } catch (err) {
        console.error("Error fetching donations:", err);
      }
    };

    fetchDonations();
  }, []);

  return (
    <div className="p-4 border mt-4 rounded-xl">
      <h2 className="font-bold mb-2">Recent Donations</h2>
      {donations.length === 0 ? (
        <p>No donations yet.</p>
      ) : (
        <ul>
          {donations.map((d, i) => (
            <li key={i} className="mb-2">
              <strong>{d.donor}</strong> donated {d.amount} AVAX to{" "}
              <em>{d.cause}</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
