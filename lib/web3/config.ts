import '@walletconnect/react-native-compat';
import { createAppKit, defaultWagmiConfig } from '@reown/appkit-wagmi-react-native';
import { mainnet, arbitrum, polygon, baseSepolia, bscTestnet } from '@reown/appkit/networks';

// Use Expo environment variables (EXPO_PUBLIC_ prefix)
const projectId = process.env.EXPO_PUBLIC_REOWN_PROJECT_ID || 'your_reown_project_id';

const metadata = {
  name: 'Liquid Glass Crypto Fantasy',
  description: 'Crypto Fantasy Contest Platform with Liquid Glass UI',
  url: 'https://your-app-domain.com',
  icons: ['https://your-app-icon-url.com/icon.png'],
};

// Create array with proper typing
const networks = [bscTestnet, mainnet, arbitrum, polygon, baseSepolia] as const;

const wagmiConfig = defaultWagmiConfig({
  chains: networks,
  projectId,
  metadata,
});

createAppKit({
  projectId,
  wagmiConfig,
  metadata,
  features: {
    email: true,
    socials: [],
    emailShowWallets: true,
  },
});

export { wagmiConfig };