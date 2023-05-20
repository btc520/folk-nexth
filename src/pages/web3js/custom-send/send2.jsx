/* eslint-disable */

import Web3 from 'web3'
import { Button, Text, Heading, ListItem, UnorderedList, Input, Link } from '@chakra-ui/react'
import { resolve } from 'path'
import { useState, useEffect, useRef } from 'react'

export default function () {
  //const addr = ''
  //const { ethereum } = window

  const [Addr, setAddr] = useState('')
  const [To, setTo] = useState('0x64D05D76f528448F6DB887130135Ad1b86dcCE55')
  const [Value, setValue] = useState('0.0001')
  const [Data, setData] = useState('0x11')

  //const [Web4, SetWeb4] = useState()

  useEffect(() => {
    if (window.ethereum) {
      console.log('detect web3 ! ')
      ethereum.request({ method: 'eth_requestAccounts' }).then(
        (result) => {
          const Add = result[0]
          setAddr(Add)
          console.log('Addr: ' + Addr)
        },
        [Addr]
      )
    }
  })

  const Detect = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum)
      if (Addr != '') {
        web3.eth.sendTransaction(
          {
            //from: result[0], // 0x64D05D76f528448F6DB887130135Ad1b86dcCE55
            from: Addr,
            to: To,
            value: Value * 1000000000000000000,
            data: Data,
          },
          function (err, transactionHash) {
            if (!err) console.log(transactionHash + ' success')
          }
        )
      }
    }
  }

  return (
    <div>
      <h2>Hello World1 {Addr} </h2>
      <Input mt={5} value={To} onChange={(e) => setTo(e.target.value)} placeholder={To} />
      <Input mt={5} value={Value} onChange={(e) => setValue(e.target.value)} placeholder={Value} />
      <Input mt={5} value={Data} onChange={(e) => setData(e.target.value)} placeholder={Data} />

      <Button mt={5} onClick={Detect}>
        点我 - 登录
      </Button>
      <h2>Hello World</h2>
    </div>
  )
}