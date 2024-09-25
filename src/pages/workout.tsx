import { ExerciseCounter } from '@/components/exercise-counter.tsx'
import { Card } from '@/components/ui/card.tsx'
import { Button } from '@/components/ui/button.tsx'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Separator } from '@/components/ui/separator.tsx'

const Workout = () => {
  return (
    <div className={'flex flex-col gap-4 p-2'}>
      <div className={'flex items-center justify-between'}>
        <Button variant={'ghost'}>
          <ArrowLeft />
        </Button>
        <div>Название упражнения</div>
        <Button variant={'ghost'}>
          <ArrowRight />
        </Button>
      </div>

      <div className={'flex flex-wrap gap-4'}>
        {new Array(5).fill('str').map((_, i) => (
          <Card className={'flex min-h-16 min-w-24 items-center p-2'}>
            {i + 1} <Separator orientation={'vertical'} className={'mx-1'} />
            <div className={'flex flex-col justify-between'}>
              <div className={'flex text-xs'}>
                <div>100</div>x<div>10</div>
              </div>

              <div className={'flex font-bold'}>
                <div>100</div>x<div>10</div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className={'flex gap-4'}>
        <ExerciseCounter title={'вес'} initialValue={undefined} />

        <ExerciseCounter title={'повторы'} initialValue={10} />
      </div>

      <Button className={'mt-2 w-full'} size={'lg'} variant={'outline'}>
        Добавить
      </Button>
    </div>
  )
}

export default Workout
