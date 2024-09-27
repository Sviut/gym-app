import { Card, CardHeader, CardTitle } from '@/components/ui/card.tsx'
import { Link, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button.tsx'
import { useProgram } from '@/context/program-context.tsx'

const ProgramById = () => {
  const { id } = useParams<{ id: string }>()
  const { getProgramById } = useProgram()
  const currentProgram = getProgramById(id)

  if (!currentProgram) {
    return <div>Program not found</div>
  }

  return (
    <div className={'p-2'}>
      <div className={'flex flex-col gap-2'}>
        {currentProgram?.exercises.map((exercise) => (
          <Card key={exercise.name}>
            <CardHeader>
              <CardTitle>{exercise.name}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Link
        to={`/program/${currentProgram?.id}/workout/${currentProgram?.exercises[0].id}`}
      >
        <Button type={'button'} className={'mt-2 w-full'} size={'lg'}>
          Начать тренировку
        </Button>
      </Link>
    </div>
  )
}

export default ProgramById
