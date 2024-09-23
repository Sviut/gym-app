import { renderHook, act } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { useProgramData } from '@/hooks/use-program-data.ts'

describe('useProgramData', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('should write program to storage', () => {
    const { result } = renderHook(useProgramData)
    const workoutDay = { id: 'day1', name: 'Day 1' }

    act(() => result.current.addWorkoutDay(workoutDay))

    const storedProgram = localStorage.getItem('program')
    const parsedProgram = JSON.parse(storedProgram || '{}')

    expect(parsedProgram.workoutDays).toHaveLength(1)
    expect(parsedProgram.workoutDays[0]).toEqual(workoutDay)
  })
})
