import hscLogo from 'src/config/assets/token_hsc.svg'
import { EnvironmentSettings, ETHEREUM_NETWORK, FEATURES, NetworkConfig, WALLETS } from 'src/config/networks/network.d'

const baseConfig: EnvironmentSettings = {
  clientGatewayUrl: 'https://safe-client-app.hoosmartchain.com/v1',
  txServiceUrl: 'https://safe-transaction-app.hoosmartchain.com/api/v1',
  safeUrl: 'https://gnosis-safe-app.hoosmartchain.com/',
  safeAppsUrl: 'https://gnosis-safe.hoosmartchain.com',
  gasPrice: 1e9,
  rpcServiceUrl: 'https://http-mainnet2.hoosmartchain.com',
  networkExplorerName: 'hsc',
  networkExplorerUrl: 'https://hooscan.com',
  networkExplorerApiUrl: 'https://hooscan.com/api',
}

const hsc: NetworkConfig = {
  environment: {
    dev: {
      ...baseConfig,
    },
    staging: {
      ...baseConfig,
    },
    production: {
      ...baseConfig,
      safeAppsUrl: 'https://safe-apps-app.hoosmartchain.com',
    },
  },
  network: {
    id: ETHEREUM_NETWORK.HSC,
    backgroundColor: '#48A8A6',
    textColor: '#ffffff',
    label: 'HSC',
    isTestNet: false,
    nativeCoin: {
      address: '0x0000000000000000000000000000000000000000',
      name: 'HOO',
      symbol: 'HOO',
      decimals: 18,
      logoUri: hscLogo,
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

export default hsc
