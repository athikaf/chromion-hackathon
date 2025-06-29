"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import DonateForm from "../components/DonateForm";

export default function Home() {
  return (
    <div className="p-4">
      <ConnectButton />
      <DonateForm />
    </div>
  );
}
