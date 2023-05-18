import { Head } from 'components/layout/Head'
import { HeadingComponent } from 'components/layout/HeadingComponent'
import { CardList } from 'components/layout/CardList'
import { Code, Text, Link } from '@chakra-ui/react'

import SignIcon from 'assets/icons/fingerprint.png'
import AuthIcon from 'assets/icons/auth.png'
import PassportIcon from 'assets/icons/passport.png'
import CustomIcon from 'assets/icons/custom.png'
import EtherIcon from 'assets/icons/ethereum.png'
import TokenIcon from 'assets/icons/token.png'
import NFTIcon from 'assets/icons/nft.png'
import ENSIcon from 'assets/icons/ens.png'

export const ExampleItems = [
  {
    title: 'Abyss 交互',
    description: '自动签到, 需要输入 token',
    image: SignIcon.src,
    url: '/m/abyss2',
  },
  {
    title: '读取合约和区块恋信息',
    description: '读取contract usdt 的信息',
    image: SignIcon.src,
    url: '/m/read-usdt',
  },
  {
    title: 'Sign & verify messages',
    description: 'Keys can be used to sign any kind of messages. This is useful to verify a message was sent by a specific account.',
    image: SignIcon.src,
    url: '/e/sign',
  },
  {
    title: '以太坊签名 Sign-in with Ethereum',
    description: 'Sign-in with Ethereum is a new form of authentication that enables users to control their identity with their Ethereum account.',
    image: AuthIcon.src,
    url: '/e/siwe',
  },
  {
    title: 'Gitcoin Passport',
    description:
      'Gitcoin Passport is an identity protocol that proves your trustworthiness without needing to collect personally identifiable information.',
    image: PassportIcon.src,
    url: '/e/passport',
  },
  {
    title: 'Custom Contract',
    description: 'This example shows a custom Solidity smart contract deployed using Hardhat. You can find sample contract under /contracts.',
    image: CustomIcon.src,
    url: '/e/custom-message',
  },
  {
    title: ' 捐赠 Send Ether',
    description: 'Sending Ether to another address is the most basic, common transaction that you can do.',
    image: EtherIcon.src,
    url: '/e/send-ether',
  },
  {
    title: 'Send ERC20 Token',
    description: 'ERC20 introduces a standard interface for fungible tokens. Use this example to send any ERC20 to another address.',
    image: TokenIcon.src,
    url: '/e/send-erc20',
  },
  {
    title: 'Mint NFT',
    description: 'A Non-Fungible Token (NFT) is used to identify something or someone in a unique way. Use this ERC721 example to mint your own NFT.',
    image: NFTIcon.src,
    url: '/e/mint-nft',
  },
  {
    title: 'Fetch ENS',
    description:
      'Fetch Ethereum Name Service names to Ethereum addresses using a decentralized domain name system that maps human-readable names to addresses.',
    image: ENSIcon.src,
    url: '/e/fetch-ens',
  },
]

export default function Examples() {
  return (
    <>
      <Head />

      <main>
        <HeadingComponent as="h2"> 专业 web3 仿站 </HeadingComponent>
        <Text pb={4}>
          以下都是可以捐赠的功能, 欢迎使用 联系我 <Link href="https://twitter.com/gm1thai">twitter-gm1thai</Link>{' '}
        </Text>

        <CardList title="试试就试试" items={ExampleItems} />
      </main>
    </>
  )
}
