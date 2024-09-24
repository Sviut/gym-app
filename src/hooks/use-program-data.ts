import useLocalStorage from '@/hooks/use-local-storage.ts'
import { SetValue } from '@/types/workout-data.ts'

export interface WorkoutDay {
  id: string
  name: string
  sets: SetValue[]
}

interface Program {
  workoutDays: WorkoutDay[]
}

export const useProgramData = () => {
  const [program, setProgram] = useLocalStorage<Program>('program', {
    workoutDays: [],
  })

  const addWorkoutDay = (day: WorkoutDay) => {
    const updatedProgram = {
      ...program,
      workoutDays: [...program.workoutDays, day],
    }
    setProgram(updatedProgram)
  }

  const getWorkoutDayById = (id: string) => {
    return program.workoutDays.find((workoutDay) => workoutDay.id === id)
  }

  const deleteWorkoutDayById = (id: string) => {
    const filtered = program.workoutDays.filter(
      (workoutDay) => workoutDay.id !== id
    )

    setProgram({ workoutDays: filtered })
  }

  const updateWorkoutDayById = (
    id: string,
    updatedDay: Partial<WorkoutDay>
  ) => {
    const currentWorkoutDay = getWorkoutDayById(id)
    if (!currentWorkoutDay) return

    const updatedWorkoutDay = { ...currentWorkoutDay, ...updatedDay }

    const updatedWorkoutDays = program.workoutDays.map((workoutDay) =>
      workoutDay.id === id ? updatedWorkoutDay : workoutDay
    )

    setProgram({ workoutDays: updatedWorkoutDays })
  }

  return {
    addWorkoutDay,
    getWorkoutDayById,
    deleteWorkoutDayById,
    updateWorkoutDayById,
  }
}
