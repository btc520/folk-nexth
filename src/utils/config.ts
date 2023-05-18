import { ThemingProps } from '@chakra-ui/react'
import { mainnet, sepolia, polygon, optimism, arbitrum, goerli, zkSync } from '@wagmi/chains'
//import { goerli } from 'viem/chains'

export const SITE_NAME = '名字叫叼毛'
export const SITE_DESCRIPTION = ' 一个专业做 web3 炸片的网站 '
export const SITE_URL = 'https://web-3-sepia.vercel.app'

export const THEME_INITIAL_COLOR = 'system'
export const THEME_COLOR_SCHEME: ThemingProps['colorScheme'] = 'gray'
export const THEME_CONFIG = {
  initialColorMode: THEME_INITIAL_COLOR,
}

export const SOCIAL_TWITTER = 'gm1thai'
export const SOCIAL_GITHUB = 'btc520/web3'

export const ETH_CHAINS = [mainnet, sepolia, polygon, optimism, arbitrum, goerli, zkSync]

export const SERVER_SESSION_SETTINGS = {
  cookieName: SITE_NAME,
  password: process.env.SESSION_PASSWORD ?? 'UPDATE_TO_complex_password_at_least_32_characters_long',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
}
