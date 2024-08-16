import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider, getDefaultConfig, lightTheme } from '@rainbow-me/rainbowkit';

import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  metaMaskWallet,
  rainbowWallet,
  coinbaseWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';

import {
  base,
  linea,
  scroll,
} from 'wagmi/chains';

import { ScrollToTop } from '@/components/scroll-to-top';
import AboutPage from '@/routes/about';
import HomePage from '@/routes/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [metaMaskWallet, rainbowWallet, coinbaseWallet, walletConnectWallet],
    },
  ],
  { appName: 'RainbowKit App', projectId: 'YOUR_PROJECT_ID' },
);

const config = getDefaultConfig({
  connectors,
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [base, linea, scroll],
});

const client = new QueryClient();

export default function App() {
  const basename = import.meta.env.BASE_URL;

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider
          modalSize="compact"
          locale="en-US"
          theme={lightTheme({
            accentColor: '#4f46e5',
            accentColorForeground: 'white',
            borderRadius: 'small',
            fontStack: 'system',
            overlayBlur: 'small',
          })}>
          <BrowserRouter basename={basename}>
            <ScrollToTop>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
              </Routes>
            </ScrollToTop>
          </BrowserRouter>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
