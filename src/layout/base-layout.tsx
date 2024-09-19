import { FC, ReactNode } from 'react'
import NavBar from '@/components/nav-bar.tsx'

interface BaseLayoutProps {
  children: ReactNode
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className={'flex min-h-screen flex-col'}>
      <div className={'flex flex-grow'}>{children}</div>
      <NavBar />
    </div>
  )
}

export default BaseLayout
