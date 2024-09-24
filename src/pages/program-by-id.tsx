import { Card, CardHeader, CardTitle } from '@/components/ui/card.tsx'
import { useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button.tsx'

const exercises = [
  { name: 'Жим лежа' },
  { name: 'Тяга горизонтальная' },
  { name: 'Брусья' },
  { name: 'Брусья' },
  { name: 'Брусья' },
  { name: 'Брусья' },
  { name: 'Брусья' },
]

const ProgramById = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <div className={'p-2'}>
      <div className={'flex flex-col gap-2'}>
        {exercises.map((exercise) => (
          <Card key={exercise.name}>
            <CardHeader>
              <CardTitle>{exercise.name}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Button className={'mt-2 w-full'} size={'lg'}>
        Начать тренировку
      </Button>
    </div>
  )
}

export default ProgramById
