import Web3 from 'web3'

const addressFrom = '0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b'
const addressTo = '0xB90168C8CBcd351D069ffFdA7B71cd846924d551'
const web3 = new Web3('http://localhost:9933')

// Create transaction
const deploy = async () => {
        const { ethereum } = window as any
  console.log(`Attempting to make transaction from ${addressFrom} to ${addressTo}`)

  const createTransaction = await web3.eth.accounts.signTransaction(
    {
      from: addressFrom,
      to: addressTo,
      value: web3.utils.toWei('100', 'ether'),
      gas: '21000',
    },
    privKey
  )

  // Deploy transaction
  const createReceipt = await web3.eth.sendSignedTransaction(createTransaction.rawTransaction)
  console.log(`Transaction successful with hash: ${createReceipt.transactionHash}`)
}

export default deploy()
