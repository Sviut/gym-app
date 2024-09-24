import { PlusCircle } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'
import { PAGES } from '@/pages/router.tsx'
import Header from '@/components/header.tsx'
import { useProgramData } from '@/hooks/use-program-data.ts'
import PageContainer from '@/layout/page-container.tsx'
import { Separator } from '@/components/ui/separator.tsx'
import { Button } from '@/components/ui/button.tsx'

const ProgramsPage = () => {
  const { program } = useProgramData()
  return (
    <PageContainer
      header={
        <Header
          title={PAGES.PROGRAMS.title}
          actionButton={
            <Link to={PAGES.CREATE_PROGRAM.path}>
              <Button size={'icon'} variant={'ghost'}>
                <PlusCircle />
              </Button>
            </Link>
          }
        />
      }
    >
      {program.workoutDays.map((element) => (
        <Link to={`${PAGES.WORKOUT_DAY.path}/${element.id}`}>
          <div className={'p-5'}>{element.name}</div>
          <Separator />
        </Link>
      ))}
      <Outlet />
    </PageContainer>
  )
}

export default ProgramsPage
