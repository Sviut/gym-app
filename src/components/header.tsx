import { usePageNavigation } from '@/hooks/use-page-navigation.tsx'
import { Button } from '@/components/ui/button.tsx'
import { useNavigate } from 'react-router-dom'
import { cn } from '@/lib/utils.ts'

const Header = () => {
  const { title, isRootPage } = usePageNavigation()
  const navigate = useNavigate()

  return (
    <div
      className={
        'relative flex h-[50px] items-center justify-between border-b-2 border-gray-200 bg-gray-100 p-2'
      }
    >
      <Button
        className={cn(isRootPage && 'invisible')}
        onClick={() => navigate(-1)}
        variant={'ghost'}
      >
        Назад
      </Button>

      <div className={'absolute left-1/2 translate-x-[-50%] font-bold'}>
        {title}
      </div>
    </div>
  )
}

export default Header
