import useLocalStorage from '@/hooks/use-local-storage.ts'
import { Program } from '@/types/types.ts'

export const useProgram = () => {
  const [value, setValue] = useLocalStorage<Program[]>('program')

  const getProgramById = (id?: string) => {
    return value.find((v) => v.id === id)
  }

  return { getProgramById }
}
