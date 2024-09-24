import { renderHook, act } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { useProgramData, WorkoutDay } from '@/hooks/use-program-data.ts'

const defaultWorkDay: WorkoutDay = { id: 'day1', name: 'Day 1', sets: [] }

describe('useProgramData', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('should write program to storage', () => {
    const { result } = renderHook(useProgramData)

    act(() => result.current.addWorkoutDay(defaultWorkDay))

    const storedProgram = localStorage.getItem('program')
    const parsedProgram = JSON.parse(storedProgram || '{}')

    expect(parsedProgram.workoutDays).toHaveLength(1)
    expect(parsedProgram.workoutDays[0]).toEqual(defaultWorkDay)
  })

  it('should get workoutDay by id', () => {
    const { result } = renderHook(useProgramData)

    const workoutDay = { id: 'day1', name: 'Day 1' }
    act(() => result.current.addWorkoutDay(defaultWorkDay))

    expect(result.current.getWorkoutDayById('day1')).toEqual(workoutDay)
  })

  it('should delete workoutDay by id', () => {
    const { result } = renderHook(useProgramData)

    act(() => result.current.addWorkoutDay(defaultWorkDay))
    act(() => result.current.deleteWorkoutDayById('day1'))

    const storedProgram = localStorage.getItem('program')
    const parsedProgram = JSON.parse(storedProgram || '{}')

    expect(parsedProgram.workoutDays).toHaveLength(0)
  })

  it('should update workoutDay', () => {
    const { result } = renderHook(useProgramData)

    act(() => result.current.addWorkoutDay(defaultWorkDay))

    act(() =>
      result.current.updateWorkoutDayById('day1', { name: 'Updated Name' })
    )

    expect(result.current.getWorkoutDayById('day1')).toEqual({
      id: 'day1',
      name: 'Updated Name',
    })
  })
})
