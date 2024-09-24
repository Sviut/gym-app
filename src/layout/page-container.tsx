import { FC, ReactNode } from 'react'

interface PageContainerProps {
  children?: ReactNode
  header?: ReactNode
}

const PageContainer: FC<PageContainerProps> = ({ header, children }) => {
  if (header) {
    return (
      <>
        {header}
        <div className={'mt-[50px] p-5'}>{children}</div>
      </>
    )
  }
  return <div className={'p-5'}>{children}</div>
}

export default PageContainer
