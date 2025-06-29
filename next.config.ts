import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // 关闭服务端模式
  serverRuntimeConfig: {
    // 禁用 SSR
    useSuspense: false,
  },
}

export default nextConfig
