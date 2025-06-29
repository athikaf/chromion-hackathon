"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import DonateForm from "../components/DonateForm";
import DonationsList from "../components/DonationsList";

export default function Home() {
  return (
    <div className="p-4">
      <ConnectButton />
      <DonateForm />
      <DonationsList />
    </div>
  );
}
