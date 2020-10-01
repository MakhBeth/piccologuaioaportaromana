import { useState, useEffect } from 'react'

export function useIsClient() {
  const [isClient, setClient] = useState(false)
  useEffect(() => {
    setClient(!!(typeof window !== 'undefined' && window.document))
  }, [])
  return isClient
}
