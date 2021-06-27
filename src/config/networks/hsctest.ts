import xDaiLogo from 'src/config/assets/token_xdai.svg'
import { EnvironmentSettings, ETHEREUM_NETWORK, FEATURES, NetworkConfig, WALLETS } from 'src/config/networks/network.d'

const baseConfig: EnvironmentSettings = {
  clientGatewayUrl: 'https://safe-client.hoosmartchain.com/v1',
  txServiceUrl: 'https://safe-transaction.hoosmartchain.com/api/v1',
  safeUrl: 'https://gnosis-safe.hoosmartchain.com',
  safeAppsUrl: 'https://gnosis-safe.hoosmartchain.com',
  gasPrice: 1e9,
  rpcServiceUrl: 'https://http-testnet.hoosmartchain.com',
  networkExplorerName: 'hsctest',
  networkExplorerUrl: 'https://testnet.hscscan.com',
  networkExplorerApiUrl: 'https://testnet.hscscan.com',
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
