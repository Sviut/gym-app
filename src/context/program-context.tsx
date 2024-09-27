import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'
import { Exercise, Program } from '@/types/types.ts'

interface ProgramContextType {
  programs: Program[]
  getProgramById: (id?: string) => Program | undefined
  getExerciseById: (id?: string) => Exercise | undefined
  updateExercise: (newExercise: Exercise) => void
  getPages: (
    programId?: string,
    exerciseId?: string
  ) => { prev: string; next: string }
  saveProgramHistory: (programId?: string) => void
}

const ProgramContext = createContext<ProgramContextType | undefined>(undefined)

export const ProgramProvider = ({ children }: { children: ReactNode }) => {
  const [programs, setPrograms] = useState<Program[]>(() => {
    try {
      const storedPrograms = localStorage.getItem('program')
      return storedPrograms
        ? JSON.parse(storedPrograms)
        : [
            {
              id: '1',
              name: 'Тренировка А',
              exercises: [
                { id: '1', name: 'Жим на наклонной скамье', sets: [] },
                { id: '2', name: 'Тяга вертикального блока', sets: [] },
                { id: '3', name: 'Кувшин плечи', sets: [] },
                { id: '4', name: 'Разгибание ног', sets: [] },
              ],
            },
          ]
    } catch (error) {
      console.error('Error loading programs from localStorage:', error)
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('program', JSON.stringify(programs))
  }, [programs])

  const getProgramById = (id?: string) => {
    return programs.find((item) => item.id === id)
  }

  const getExerciseById = (id?: string) => {
    for (const program of programs) {
      const exercise = program.exercises.find((exercise) => exercise.id === id)
      if (exercise) return exercise
    }
    return undefined
  }

  const updateExercise = (newExercise: Exercise) => {
    setPrograms((prevPrograms) =>
      prevPrograms.map((program) => ({
        ...program,
        exercises: program.exercises.map((exercise) =>
          exercise.id === newExercise.id
            ? { ...exercise, ...newExercise }
            : exercise
        ),
      }))
    )
  }

  const getPages = (programId?: string, exerciseId?: string) => {
    const program = getProgramById(programId)
    const exerciseIndex = program?.exercises.findIndex(
      (exercise) => exercise.id === exerciseId
    )

    if (!program || exerciseIndex === undefined) {
      return { prev: '', next: '' }
    }

    const prev = program.exercises[exerciseIndex - 1]?.id ?? ''
    const next = program.exercises[exerciseIndex + 1]?.id ?? 'finish'

    return { prev, next }
  }

  const saveProgramHistory = (programId?: string) => {
    const updatedPrograms = programs.map((program) => {
      if (program.id === programId) {
        return {
          ...program,
          exercises: program.exercises.map((exercise) => ({
            ...exercise,
            sets: exercise.sets.map((set) => ({
              ...set, // Клонируем каждый сет
              previous: set.current, // Перемещаем current в previous
              current: undefined,
            })),
          })),
        }
      }
      return program
    })

    setPrograms(JSON.parse(JSON.stringify(updatedPrograms)))
  }

  return (
    <ProgramContext.Provider
      value={{
        programs,
        getProgramById,
        getExerciseById,
        updateExercise,
        getPages,
        saveProgramHistory,
      }}
    >
      {children}
    </ProgramContext.Provider>
  )
}

export const useProgram = () => {
  const context = useContext(ProgramContext)

  if (context === undefined) {
    throw new Error('useProgram must be used within a ProgramProvider')
  }

  return context
}
