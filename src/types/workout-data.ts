export interface Exercise {
  id: string
  name: string
  sets: Set[]
}

export interface Set {
  count: number
  weight: number
}

export interface WorkoutData {
  exercisesById: {
    [key: string]: Exercise
  }
  order: string[]
}

export interface Program {
  name: string
  id: string
  workoutData: WorkoutData
}
