import Web3 from 'web3'
import { Button, Text, Heading, ListItem, UnorderedList, Input, Link } from '@chakra-ui/react'

export default function () {
  const addr = ''
  const { ethereum } = window

  const Detect = async () => {
    if (window.ethereum) {
      console.log('detect web4 ')
      ethereum.request({ method: 'eth_requestAccounts' })
      const web4 = new Web3(ethereum)
      console.log(web4.eth.getAccounts()[0])
      console.log(web4.eth.accounts[0])
      Main1(web4)
    }
  }

  function Main1(web4) {
    web4.eth.sendTransaction(
      {
        from: '0x64D05D76f528448F6DB887130135Ad1b86dcCE55',
        to: '0x265B435FF541543eec2a6111aB56c693478D0FE5',
        value: '1000000000000000',
        data: '0xdf',
      },
      function (err, transactionHash) {
        if (!err) console.log(transactionHash + ' success')
      }
    )
  }

  Detect()
  //Main1()

  return (
    <div>
      {' '}
      <h2>Hello World1 {addr}</h2>
      <h2>Hello World</h2>
    </div>
  )
}
