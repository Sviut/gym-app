import { Home, NotebookText } from 'lucide-react'
import { Button } from '@/components/ui/button.tsx'
import { Link } from 'react-router-dom'
import { PAGES } from '@/pages/router.tsx'

const NavBar = () => {
  return (
    <nav className='fixed bottom-0 flex w-full justify-around bg-gray-100 py-2'>
      <Button size={'icon'} variant={'ghost'} asChild>
        <Link to={PAGES.MAIN.path}>
          <Home />
        </Link>
      </Button>

      <Button size={'icon'} variant={'ghost'}>
        <Link to={PAGES.PROGRAMS.path}>
          <NotebookText />
        </Link>
      </Button>
    </nav>
  )
}

export default NavBar
