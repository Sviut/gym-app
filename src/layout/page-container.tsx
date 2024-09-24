import { FC, ReactNode } from 'react'
import { cn } from '@/lib/utils.ts'

interface PageContainerProps {
  children?: ReactNode
  header?: ReactNode
}

const PageContainer: FC<PageContainerProps> = ({ header, children }) => {
  if (header) {
    return (
      <>
        {header}
        <div className={cn('p-5', 'mt-[50px]')}>{children}</div>
      </>
    )
  }
  return <div className={cn('p-5')}>{children}</div>
}

export default PageContainer
