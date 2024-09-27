import WorkoutHeader from '@/pages/workout/components/workout-header.tsx'
import WorkoutItem from '@/pages/workout/components/workout-item.tsx'
import ExerciseForm from '@/pages/workout/components/exercise-form.tsx'
import { useParams } from 'react-router-dom'
import { Exercise, ExerciseValue } from '@/types/types.ts'
import { useState } from 'react'
import { useProgram } from '@/context/program-context.tsx'

const Workout = () => {
  const { exerciseId } = useParams<{ exerciseId: string }>()
  const { getExerciseById, updateExercise } = useProgram()
  const exercise = getExerciseById(exerciseId)
  const [currentRep, setCurrentRep] = useState(0)

  const onUpdateHandler = (value: ExerciseValue) => {
    if (!exercise) return

    const updatedSets = [...exercise.sets]

    if (currentRep < updatedSets.length) {
      updatedSets[currentRep] = {
        ...updatedSets[currentRep],
        current: value,
      }
    } else {
      updatedSets.push({
        current: value,
        previous: undefined,
      })
    }

    const updatedExercise: Exercise = {
      ...exercise,
      sets: updatedSets,
    }

    updateExercise(updatedExercise)

    setCurrentRep((prevState) => prevState + 1)
  }

  if (!exercise) {
    return <div>exercise not found</div>
  }

  return (
    <div className={'flex flex-col gap-4 p-2'}>
      <WorkoutHeader title={exercise.name} />

      <div className={'flex flex-wrap gap-4'}>
        {exercise.sets.map(({ previous, current }, i) => (
          <WorkoutItem index={i} key={i} value={current} prevValue={previous} />
        ))}
      </div>

      <ExerciseForm
        initialValue={exercise.sets?.[0]?.previous}
        onSubmit={onUpdateHandler}
      />
    </div>
  )
}

export default Workout
