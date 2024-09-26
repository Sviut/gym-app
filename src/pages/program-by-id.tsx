import { Card, CardHeader, CardTitle } from '@/components/ui/card.tsx'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button.tsx'
import { useProgram } from '@/hooks/use-program.ts'

const ProgramById = () => {
  const { id } = useParams<{ id: string }>()
  const { getProgramById } = useProgram()
  const currentProgram = getProgramById(id)

  const navigate = useNavigate()
  const onClickHandler = () => {
    navigate(`/workout/${currentProgram?.id}`)
  }

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

      <Button className={'mt-2 w-full'} size={'lg'} onClick={onClickHandler}>
        Начать тренировку
      </Button>
    </div>
  )
}

export default ProgramById
