import { useState } from 'react'
import type { Address } from 'wagmi'
import { useContractRead } from 'wagmi'
import { useAccount, useBalance, useContractWrite, usePrepareContractWrite, useWaitForTransaction, useNetwork, erc20ABI } from 'wagmi'
import { useDebounce } from 'usehooks-ts'

import { USDTConfig } from 'components/USDT'

import { Button, Text, Heading, ListItem, UnorderedList } from '@chakra-ui/react'

// import { useState } from "react"


const YourInfo = () => {
  const [tokenContract, setTokenContract] = useState('')
  const { chain } = useNetwork()
  const { address } = useAccount()

  const debouncedTokenContract = useDebounce('', 500)
  const balance = useBalance({
    address,
    token: debouncedTokenContract as `0x{string}`,
  })

  const bl = balance.data?.formatted
  console.log(bl)

  return <Text mt={2}> your balance of contract is: {bl}</Text>
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
        <YourInfo />
        <ReadC />
      </div>
    </div>
  )
}
