import { PlusCircle } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'
import { PAGES } from '@/pages/router.tsx'
import Header from '@/components/header.tsx'

const ProgramsPage = () => {
  return (
    <div className={'relative flex-grow'}>
      <Header title={'Добавить тренировку'} />
      ProgramsPage
      <Outlet />
      <Link to={PAGES.CREATE_PROGRAM.path}>
        <PlusCircle
          size={'44'}
          className={'absolute bottom-20 right-4 rounded-3xl'}
        />
      </Link>
    </div>
  )
}

export default ProgramsPage
