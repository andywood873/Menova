import '@/styles/globals.css';
import { darkTheme } from '@rainbow-me/rainbowkit';
import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import {
  RainbowKitProvider,
  connectorsForWallets,
} from '@rainbow-me/rainbowkit';
import {
  injectedWallet,
  rainbowWallet,
  metaMaskWallet,
  coinbaseWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';
import '@rainbow-me/rainbowkit/styles.css';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { polygonMumbai } from 'wagmi/chains';
import { particleWallet } from '@particle-network/rainbowkit-ext';
import merge from 'lodash.merge';
import { FormProvider } from '@/context/formContext';
import { DataProvider } from '@/context/DataContext';
import { ParticleNetwork } from '@particle-network/auth';

new ParticleNetwork({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  clientKey: process.env.NEXT_PUBLIC_CLIENT_KEY,
  appId: process.env.NEXT_PUBLIC_APP_ID,
});

const { provider, chains } = configureChains(
  [polygonMumbai],
  [
    jsonRpcProvider({
      rpc: (chain) => ({ http: chain.rpcUrls.default.http[0] }),
    }),
  ]
);

const particleWallets = [
  particleWallet({ chains, authType: 'google' }),
  particleWallet({ chains, authType: 'facebook' }),
  particleWallet({ chains, authType: 'apple' }),
  particleWallet({ chains }),
];

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_ID;

const connectors = connectorsForWallets([
  {
    groupName: 'Suggested',
    wallets: [
      ...particleWallets,
      injectedWallet({ chains }),
      rainbowWallet({ projectId, chains }),
      metaMaskWallet({ projectId, chains }),
      coinbaseWallet({ chains, appName: 'Galen' }),
      walletConnectWallet({ projectId, chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: connectors(chains),
  provider,
});

const myTheme = merge(darkTheme(), {
  colors: {
    accentColor: '#A020F0',
  },
});

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={myTheme} coolMode>
        <FormProvider>
          <DataProvider>
            <Component {...pageProps} />
          </DataProvider>
        </FormProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
