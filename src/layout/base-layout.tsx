import { FC, ReactNode } from 'react'

interface BaseLayoutProps {
  children: ReactNode
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className={'flex min-h-screen flex-col'}>
      <div>head</div>

      <div className={'flex-grow'}>{children}</div>

      <nav>nav</nav>
    </div>
  )
}

export default BaseLayout
