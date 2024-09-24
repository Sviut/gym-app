import { PlusCircle } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'
import { PAGES } from '@/pages/router.tsx'
import Header from '@/components/header.tsx'
import { useProgramData } from '@/hooks/use-program-data.ts'
import PageContainer from '@/layout/page-container.tsx'

const ProgramsPage = () => {
  const { program } = useProgramData()
  return (
    <PageContainer header={<Header title={PAGES.PROGRAMS.title} />}>
      {program.workoutDays.map((element) => (
        <div>{element.name}</div>
      ))}
      <Outlet />
      <Link to={PAGES.CREATE_PROGRAM.path}>
        <PlusCircle
          size={'44'}
          className={'absolute bottom-16 right-4 rounded-3xl'}
        />
      </Link>
    </PageContainer>
  )
}

export default ProgramsPage
