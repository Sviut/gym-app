import { ExerciseCounter } from '@/components/exercise-counter.tsx'
import { Card } from '@/components/ui/card.tsx'
import { Separator } from '@/components/ui/separator.tsx'

const Workout = () => {
  return (
    <div className={'flex flex-col gap-4 p-2'}>
      <div>Название упражнения</div>

      <Card className={'p-4'}>
        <div className={'mr-6 inline-flex flex-col items-center'}>
          <div className={'font-bold'}>100</div>
          <Separator />
          <div className={'font-bold'}>10</div>
        </div>

        <div className={'mr-6 inline-flex flex-col items-center'}>
          <div className={'font-bold'}>100</div>
          <Separator />
          <div className={'font-bold'}>10</div>
        </div>

        <div className={'mr-6 inline-flex flex-col items-center'}>
          <div className={'font-bold'}>100</div>
          <Separator />
          <div className={'font-bold'}>10</div>
        </div>
      </Card>

      <div className={'flex gap-4'}>
        <ExerciseCounter title={'вес'} initialValue={100} />

        <ExerciseCounter title={'повторы'} initialValue={10} />
      </div>
    </div>
  )
}

export default Workout
