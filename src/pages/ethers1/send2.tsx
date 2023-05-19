import { useEffect, useState } from 'react'
//import './App.module.css'
import contract from './abi1.json'
import { ethers } from 'ethers'

const contractAddress = '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2'
const abi = contract.abi

function App() {
  const [currentAccount, setCurrentAccount] = useState(null)

  const checkWalletIsConnected = async () => {
    const { ethereum } = window

    if (!ethereum) {
      console.log('Make sure you have Metamask installed!')
      return
    } else {
      console.log("Wallet exists! We're ready to go!")
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' })

    if (accounts.length !== 0) {
      const account = accounts[0]
      console.log('Found an authorized account: ', account)
      setCurrentAccount(account)
    } else {
      console.log('No authorized account found')
    }
  }

  const connectWalletHandler = async () => {
    const { ethereum } = window

    if (!ethereum) {
      alert('Please install Metamask!')
    }

    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      console.log('Found an account! Address: ', accounts[0])
      setCurrentAccount(accounts[0])
    } catch (err) {
      console.log(err)
    }
  }

  const mintNftHandler = async () => {
    try {
      const { ethereum } = window

      if (ethereum) {
        const provider = new ethers.BrowserProvider(ethereum)
        const signer = await provider.getSigner()
        const nftContract = new ethers.Contract(contractAddress, abi, signer)

        console.log('Initialize payment')
        //let nftTxn = await nftContract.mint(1, { value: ethers.parseEther('0.01') })
        let nftTxn = await nftContract.mint()

        console.log('Mining... please wait')
        await nftTxn.wait()

        console.log(`Mined, see transaction: https://etherscan.io/tx/${nftTxn.hash}`)
      } else {
        console.log('Ethereum object does not exist')
      }
    } catch (err) {
      console.log(err)
    }
  }

  const connectWalletButton = () => {
    return <button onClick={connectWalletHandler}>Connect Wallet</button>
  }

  const mintNftButton = () => {
    return <button onClick={mintNftHandler}>Mint NFT</button>
  }

  useEffect(() => {
    checkWalletIsConnected()
  }, [])

  return (
    <div>
      <h1>Scrappy Squirrels Tutorial</h1>
      <div>{currentAccount ? mintNftButton() : connectWalletButton()}</div>
    </div>
  )
}

export default App
