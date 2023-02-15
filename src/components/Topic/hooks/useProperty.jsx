import { useMemo } from 'react'

export const useProperty = ({ message, property }) =>
  useMemo(() => {
    if (typeof property === 'string') {
      return property
    }

    if (typeof property === 'object') {
      return property?.[message] ?? property?._fallback
    }
  }, [message, property])
