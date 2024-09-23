import { renderHook, act } from '@testing-library/react'
import useLocalStorage from '@/hooks/use-local-storage'
import { beforeEach, describe, expect, it } from 'vitest'

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('should write data to storage', () => {
    const { result } = renderHook(() =>
      useLocalStorage<string>('program', 'default-value')
    )

    expect(result.current[0]).toBe('default-value')

    act(() => {
      result.current[1]('new-value')
    })

    expect(result.current[0]).toBe('new-value')
    expect(localStorage.getItem('program')).toBe(JSON.stringify('new-value'))
  })

  it('should get value from storage', () => {
    localStorage.setItem('program', JSON.stringify('existing-value'))

    const { result } = renderHook(() =>
      useLocalStorage<string>('program', 'default-value')
    )

    expect(result.current[0]).toBe('existing-value')
  })
})
