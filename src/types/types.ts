export interface ExerciseValue {
  weight: number
  reps: number
}

export interface Sets {
  current?: ExerciseValue
  previous?: ExerciseValue
}

export interface Exercise {
  id: string
  name: string
  sets: Sets[]
}

export interface Program {
  name: string
  id: string
  exercises: Exercise[]
}
