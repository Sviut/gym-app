import { useState } from 'react'

type STORAGE_KEYS = 'program'

const useLocalStorage = <T>(key: STORAGE_KEYS, initialValue: T) => {
  const [storageValue, setStorageValue] = useState<T>(() => {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  })

  const setValue = (value: T) => {
    setStorageValue(value)
    localStorage.setItem(key, JSON.stringify(value))
  }

  return [storageValue, setValue] as const
}

export default useLocalStorage
