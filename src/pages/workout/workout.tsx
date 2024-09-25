import { ExerciseCounter } from '@/components/exercise-counter.tsx'
import { Button } from '@/components/ui/button.tsx'
import WorkoutHeader from '@/pages/workout/components/workout-header.tsx'
import WorkoutItem from '@/pages/workout/components/workout-item.tsx'

const Workout = () => {
  return (
    <div className={'flex flex-col gap-4 p-2'}>
      <WorkoutHeader title={'Название упражнения'} />

      <div className={'flex flex-wrap gap-4'}>
        {new Array(5).fill('str').map((_, i) => (
          <WorkoutItem
            index={i}
            key={i}
            value={{ weight: 100, count: i }}
            prevValue={{ weight: 100, count: i }}
          />
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
