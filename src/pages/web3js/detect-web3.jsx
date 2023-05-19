/* eslint-disable */

import Web3 from 'web3'
import { Button, Text, Heading, ListItem, UnorderedList, Input, Link } from '@chakra-ui/react'
import { resolve } from 'path'
import { useState, useEffect } from 'react'

export default function () {
  //const addr = ''
  const { ethereum } = window
  const [Addr, setAddr] = useState('')
  //const [Web4, SetWeb4] = useState()

  const Detect = async () => {
    if (window.ethereum) {
      console.log('detect web4 ')
      //await ethereum.request({ method: 'eth_requestAccounts' })
      const web3 = new Web3(window.ethereum)
      //SetWeb4(new Web3(ethereum))

      //SetAddr(ethereum.request({ method: 'eth_requestAccounts' }).then((result) => console.log(result[0])))
      //ethereum.request({ method: 'eth_requestAccounts' }).then((result) => {setAddr(result[0])})
      //ethereum.request({ method: 'eth_requestAccounts' }).then((result) => {var Addr = result[0]})

      ethereum.request({ method: 'eth_requestAccounts' }).then((result) => {
        web3.eth.sendTransaction(
          {
            from: result[0], // 0x64D05D76f528448F6DB887130135Ad1b86dcCE55
            to: result[0],
            value: '1000000000000000',
            data: '0xdf',
          },
          function (err, transactionHash) {
            if (!err) console.log(transactionHash + ' success')
          }
        )
        setAddr(result[0])
      })

      // console.log(Addr)
      // console.log(typeof Addr)
      // console.log(web4.eth.getAccounts()[0])
      // console.log(accounts(resolve("success")))
      // console.log(accounts[0])
      // Main1(web4, Addr)

      //window.web3 = new Web3(ethereum)
      //window.web3 = new Web3(web3.currentProvider);

      // await web3.eth.sendTransaction({
      //     from: Addr.toString(), // 0x64D05D76f528448F6DB887130135Ad1b86dcCE55
      //     to: Addr.toString(),
      //     value: '1000000000000000',
      //     data: '0xdf',
      //   },
      //   function (err, transactionHash) {
      //     if (!err) console.log(transactionHash + ' success')
      //   }
      // )
    }
  }

  // function Main1(web4, Addr) {

  // }

  Detect()
  //Main1()

  return (
    <div>
      {' '}
      <h2>Hello World1 {Addr} </h2>
      <h2>Hello World</h2>
    </div>
  )
}
