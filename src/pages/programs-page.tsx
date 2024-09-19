import Header from '@/components/header.tsx'
import { PlusCircle } from 'lucide-react'
import { Outlet } from 'react-router-dom'

const ProgramsPage = () => {
  return (
    <div className={'relative flex-grow'}>
      <Header />
      ProgramsPage
      <Outlet />
      <PlusCircle
        size={'44'}
        className={'absolute bottom-20 right-4 rounded-3xl'}
      />
    </div>
  )
}

export default ProgramsPage
