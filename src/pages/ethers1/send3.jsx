import React, { Component } from 'react'

import ERC20_ABI from './DAI.json'

import { ethers } from 'ethers'

class Metamask extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  async connectToMetamask() {
    const provider = new ethers.BrowserProvider(window.ethereum)
    const accounts = await provider.send('eth_requestAccounts', [])
    const balance = await provider.getBalance(accounts[0])
    const balanceInEther = ethers.formatEther(balance)
    const block = await provider.getBlockNumber()

    provider.on('block', (block) => {
      this.setState({ block })
    })

    const daiContract = new ethers.Contract('0x6b175474e89094c44da98b954eedeac495271d0f', ERC20_ABI, provider)
    const tokenName = await daiContract.name()
    const tokenBalance = await daiContract.balanceOf(accounts[0])
    const tokenUnits = await daiContract.decimals()
    const tokenBalanceInEther = ethers.formatUnits(tokenBalance, tokenUnits)

    this.setState({ selectedAddress: accounts[0], balance: balanceInEther, block, tokenName, tokenBalanceInEther })
  }

  async sendDaiTo(to, amountInEther) {
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()

    const daiContract = new ethers.Contract('0x6b175474e89094c44da98b954eedeac495271d0f', ERC20_ABI, provider)

    const tokenUnits = await daiContract.decimals()
    const tokenAmountInEther = ethers.parseUnits(amountInEther, tokenUnits)

    const daiContractWithSigner = daiContract.connect(signer)
    daiContractWithSigner.transfer('0x708Ef16bF16Bb9f14CfE36075E9ae17bCd1C5B40', tokenAmountInEther)
  }

  renderMetamask() {
    if (!this.state.selectedAddress) {
      return <button onClick={() => this.connectToMetamask()}>Connect to Metamask</button>
    } else {
      return (
        <div>
          <p>Welcome {this.state.selectedAddress}</p>
          <p>Your ETH Balance is: {this.state.balance}</p>
          <p>Current ETH Block is: {this.state.block}</p>
          <p>
            Balance of {this.state.tokenName} is: {this.state.tokenBalanceInEther}
          </p>
          <button onClick={() => this.sendDaiTo('0x708Ef16bF16Bb9f14CfE36075E9ae17bCd1C5B40', '1')}>Donate 1 DAI</button>
        </div>
      )
    }
  }

  render() {
    return <div>{this.renderMetamask()}</div>
  }
}

export default Metamask
