"use client";
import Chatbot from "../components/Chatbot";
import DonateForm from "../components/DonateForm";
import DonationsList from "../components/DonationsList";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">
          CrossChainDonate
        </h1>

        <div className="flex justify-center mb-4">
          <ConnectButton />
        </div>

        <DonateForm />
        <DonationsList />
      </div>

      <div className="max-w-xl w-full mt-6">
        <Chatbot />
      </div>
    </div>
  );
}
