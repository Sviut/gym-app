import { FC, ReactNode } from 'react'
import { cn } from '@/lib/utils.ts'

interface PageContainerProps {
  children?: ReactNode
  isHeader?: boolean
}

const PageContainer: FC<PageContainerProps> = ({ isHeader, children }) => {
  return <div className={cn('p-5', isHeader && 'mt-[50px]')}>{children}</div>
}

export default PageContainer
