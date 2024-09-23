import useLocalStorage from '@/hooks/use-local-storage.ts'

interface WorkoutDay {
  id: string
  name: string
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

  //TODO: to be done
  // const getWorkoutDayById = (id: string) => {}
  // const deleteWorkoutDayById = (id: string) => {}
  // const updateWorkoutDayById = (id: string) => {}

  return { addWorkoutDay }
}
