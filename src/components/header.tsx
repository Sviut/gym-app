import { Button } from '@/components/ui/button.tsx'
import { useNavigate } from 'react-router-dom'
import { cn } from '@/lib/utils.ts'
import { FC, ReactNode } from 'react'

interface HeaderProps {
  title: string
  isBackButton?: boolean
  actionButton?: ReactNode
}

const Header: FC<HeaderProps> = ({ actionButton, isBackButton, title }) => {
  const navigate = useNavigate()

  return (
    <div
      className={
        'fixed flex h-[50px] w-full items-center justify-between border-b-2 border-gray-200 bg-gray-100 p-2'
      }
    >
      <Button
        className={cn(!isBackButton && 'invisible')}
        onClick={() => navigate(-1)}
        variant={'ghost'}
      >
        Назад
      </Button>

      <div className={'absolute left-1/2 translate-x-[-50%] font-bold'}>
        {title}
      </div>

      {actionButton}
    </div>
  )
}

export default Header
