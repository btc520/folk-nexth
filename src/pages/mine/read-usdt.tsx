import { useState } from 'react'
import type { Address } from 'wagmi'
import { useContractRead, useBlockNumber } from 'wagmi'
import { useAccount, useBalance, useContractWrite, usePrepareContractWrite, useWaitForTransaction, useNetwork, erc20ABI } from 'wagmi'
import { useDebounce } from 'usehooks-ts'

import { USDTConfig } from 'components/USDT'

import { Button, Text, Heading, ListItem, UnorderedList } from '@chakra-ui/react'

// import { useState } from "react"

const BlockData = () => {
  const [tokenContract, setTokenContract] = useState('')
  const { chain } = useNetwork()
  const block = useBlockNumber({ watch: true })
  const network = useNetwork()
  const explorerUrl = network.chain?.blockExplorers?.default.url
  return (
    <div>
      <Text mt={2}>
        {network.chain?.name ?? 'Ethereum'} | Curtrent Block # {block.data?.toString()}
      </Text>
    </div>
  )
}

const YourInfo = () => {
  const { address } = useAccount()

  const ETH_cont = useDebounce('', 500)
  const ETH_balance = useBalance({
    address,
    token: ETH_cont as `0x{string}`,
  })
  console.log(ETH_balance.data?.formatted)

  const GTC_cont = useDebounce('0xDe30da39c46104798bB5aA3fe8B9e0e1F348163F', 500)
  const GTC_balance = useBalance({
    address,
    token: GTC_cont as `0x{string}`,
  })
  console.log(GTC_balance.data?.formatted)

  return (
    <div>
      <Text mt={2}> your balance of ETH is: {ETH_balance.data?.formatted}</Text>
      <Text mt={2}> your balance of GTC is: {GTC_balance.data?.formatted}</Text>
    </div>
  )

}

const ReadC = () => {
  const name = useContractRead({ ...USDTConfig, functionName: 'name' })
  console.log(name.data)

  const decimals = useContractRead({ ...USDTConfig, functionName: 'decimals' })
  console.log(decimals.data)

  const bal = useContractRead({ ...USDTConfig, functionName: 'balanceOf', args: ['0x64D05D76f528448F6DB887130135Ad1b86dcCE55'] })
  console.log(bal.data)

  const allo = useContractRead({
    ...USDTConfig,
    functionName: 'allowance',
    args: ['0x64D05D76f528448F6DB887130135Ad1b86dcCE55', '0x64D05D76f528448F6DB887130135Ad1b86dcCE55'],
  })
  console.log(allo.data)

  const TS = useContractRead({ ...USDTConfig, functionName: '_totalSupply' })
  console.log(allo.data)

  return (
    <div>
      <Heading mt={4}> ERC20_USDT Contract Info: </Heading>
      <Text mt={2}> Name: {name.data?.toString()}</Text>
      <Text mt={2}> Decimals: {decimals.data?.toString()}</Text>
      <Text mt={2}> BalanceOf: {bal.data?.toString()}</Text>
      <Text mt={2}> Allowance: {allo.data?.toString()}</Text>
      <Text mt={2}> _totalSupply: {TS.data?.toString()}</Text>
    </div>
  )
}
export default function ReadCont() {
  return (
    <div>
      <div>
        <BlockData />
        <YourInfo />
        <ReadC />
      </div>
    </div>
  )
}
