import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
  scroll,
  linea,
} from 'wagmi/chains';

const enableTestnets = typeof process !== 'undefined' && process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true';

export const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    scroll,
    linea,
    ...(enableTestnets ? [sepolia] : []),
  ],
  ssr: true,
});
