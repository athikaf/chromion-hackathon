"use client";

import { WagmiConfig } from "wagmi";
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { avalancheFuji } from "wagmi/chains";
import { useState } from "react";

export default function Providers({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  const config = getDefaultConfig({
    appName: "CrossChainDonate",
    projectId: "75ec356a3434d8431b4ebdcceb0efa45",
    chains: [avalancheFuji],
  });

  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={config}>
        <RainbowKitProvider chains={config.chains}>
          {children}
        </RainbowKitProvider>
      </WagmiConfig>
    </QueryClientProvider>
  );
}
