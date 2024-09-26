import WorkoutHeader from '@/pages/workout/components/workout-header.tsx'
import WorkoutItem, {
  SetValue,
} from '@/pages/workout/components/workout-item.tsx'
import { useState } from 'react'
import ExerciseForm from '@/pages/workout/components/exercise-form.tsx'

interface WorkoutSet {
  prevValue?: SetValue
  currentValue?: SetValue
}

const Workout = () => {
  const [currentSet, setCurrentSet] = useState(0)
  const [workoutSet, setWorkoutSet] = useState<WorkoutSet[]>([])

  const addWorkoutSet = (newSet: SetValue) => {
    setWorkoutSet((prevState) => {
      const updatedWorkoutState = [...prevState]

      if (currentSet >= updatedWorkoutState.length) {
        updatedWorkoutState.push({ currentValue: newSet })
      } else {
        updatedWorkoutState[currentSet] = {
          ...updatedWorkoutState[currentSet],
          currentValue: newSet,
        }
      }

      setCurrentSet((prevState) => prevState + 1)

      return updatedWorkoutState
    })
  }

  const initialValue =
    workoutSet.length > 0 ? workoutSet[0].prevValue : undefined

  return (
    <div className={'flex flex-col gap-4 p-2'}>
      <WorkoutHeader title={'Название упражнения'} />

      <div className={'flex flex-wrap gap-4'}>
        {workoutSet.map((set, i) => (
          <WorkoutItem
            index={i}
            key={i}
            value={set.currentValue}
            prevValue={set.prevValue}
          />
        ))}
      </div>

      <ExerciseForm initialValue={initialValue} onSubmit={addWorkoutSet} />
    </div>
  )
}

export default Workout
