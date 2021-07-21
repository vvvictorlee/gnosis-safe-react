import { AbstractProvider } from 'web3-core'
import { getWeb3, getNetworkIdFrom } from 'src/logic/wallets/getWeb3'
import { EMPTY_DATA } from 'src/logic/wallets/ethTransactions'

const EIP712_NOT_SUPPORTED_ERROR_MSG = "EIP712 is not supported by user's wallet"

const generateTypedDataFrom = async ({
  baseGas,
  data,
  gasPrice,
  gasToken,
  nonce,
  operation,
  refundReceiver,
  safeAddress,
  safeTxGas,
  to,
  valueInWei,
}) => {
  const web3 = getWeb3()
  const networkId = await getNetworkIdFrom(web3)
  //const eip712WithChainId = semverSatisfies(safeVersion, '>=1.3.0')
  const typedData = {
    types: {
      EIP712Domain: [
        {
          type: 'uint256',
          name: 'chainId',
        },
        {
          type: 'address',
          name: 'verifyingContract',
        },
      ],
      SafeTx: [
        { type: 'address', name: 'to' },
        { type: 'uint256', name: 'value' },
        { type: 'bytes', name: 'data' },
        { type: 'uint8', name: 'operation' },
        { type: 'uint256', name: 'safeTxGas' },
        { type: 'uint256', name: 'baseGas' },
        { type: 'uint256', name: 'gasPrice' },
        { type: 'address', name: 'gasToken' },
        { type: 'address', name: 'refundReceiver' },
        { type: 'uint256', name: 'nonce' },
      ],
    },
    domain: {
      chainId: networkId,
      verifyingContract: safeAddress,
    },
    primaryType: 'SafeTx',
    message: {
      to,
      value: valueInWei,
      data,
      operation,
      safeTxGas,
      baseGas,
      gasPrice,
      gasToken,
      refundReceiver,
      nonce: Number(nonce),
    },
  }

  return typedData
}

export const getEIP712Signer = (version?: string) => async (txArgs) => {
  const web3 = getWeb3()
  const typedData = await generateTypedDataFrom(txArgs)

  let method = 'eth_signTypedData_v3'
  if (version === 'v4') {
    method = 'eth_signTypedData_v4'
  }
  if (!version) {
    method = 'eth_signTypedData'
  }

  const jsonTypedData = JSON.stringify(typedData)
  const signedTypedData = {
    jsonrpc: '2.0',
    method,
    params: version === 'v3' || version === 'v4' ? [txArgs.sender, jsonTypedData] : [jsonTypedData, txArgs.sender],
    from: txArgs.sender,
    id: new Date().getTime(),
  }

  return new Promise((resolve, reject) => {
    const provider = web3.currentProvider as AbstractProvider
    provider.sendAsync(signedTypedData, (err, signature) => {
      if (err) {
        reject(err)
        return
      }

      if (signature?.result == null) {
        reject(new Error(EIP712_NOT_SUPPORTED_ERROR_MSG))
        return
      }

      resolve(signature.result.replace(EMPTY_DATA, ''))
    })
  })
}
