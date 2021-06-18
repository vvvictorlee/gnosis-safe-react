import xDaiLogo from 'src/config/assets/token_xdai.svg'
import { EnvironmentSettings, ETHEREUM_NETWORK, FEATURES, NetworkConfig, WALLETS } from 'src/config/networks/network.d'

const baseConfig: EnvironmentSettings = {
  clientGatewayUrl: 'https://gnosis-safe.hoosmartchain.com',
  txServiceUrl: 'https://gnosis-safe.hoosmartchain.com',
  safeUrl: 'https://gnosis-safe.hoosmartchain.com',
  safeAppsUrl: 'https://gnosis-safe.hoosmartchain.com',
  gasPrice: 1e9,
  rpcServiceUrl: 'https://http-testnet.hoosmartchain.com',
  networkExplorerName: 'Blockscout',
  networkExplorerUrl: 'https://blockscout.com/poa/xdai',
  networkExplorerApiUrl: 'https://blockscout.com/poa/xdai/api',
}

const hsctest: NetworkConfig = {
  environment: {
    dev: {
      ...baseConfig,
    },
    staging: {
      ...baseConfig,
    },
    production: {
      ...baseConfig,
      safeAppsUrl: 'https://gnosis-safe.hoosmartchain.com',
    },
  },
  network: {
    id: ETHEREUM_NETWORK.HSCTEST,
    backgroundColor: '#48A8A6',
    textColor: '#ffffff',
    label: 'HSCTEST',
    isTestNet: false,
    nativeCoin: {
      address: '0x0000000000000000000000000000000000000000',
      name: 'HSCTEST',
      symbol: 'HSCTEST',
      decimals: 18,
      logoUri: xDaiLogo,
    },
  },
  disabledWallets: [
    WALLETS.TREZOR,
    WALLETS.LEDGER,
    WALLETS.COINBASE,
    WALLETS.FORTMATIC,
    WALLETS.OPERA,
    WALLETS.OPERA_TOUCH,
    WALLETS.TORUS,
    WALLETS.TRUST,
    WALLETS.WALLET_LINK,
    WALLETS.AUTHEREUM,
    WALLETS.LATTICE,
  ],
  disabledFeatures: [FEATURES.DOMAIN_LOOKUP],
}

export default hsctest
